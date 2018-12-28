package com.lyra.web;

import com.lyra.bean.common.ApplicationUser;
import com.lyra.dto.UserShortDTO;
import com.lyra.service.UserService;
import com.lyra.transformer.UniversalTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController extends GenericController
{
    private final UserService userService;

    @Autowired
    public AccountController(UniversalTransformer universalTransformer, UserService userService)
    {
        super(universalTransformer);
        this.userService = userService;
    }

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
    public ApplicationUser registerUser(@RequestBody ApplicationUser applicationUser) {
        return userService.saveUser(applicationUser);
    }

    @RequestMapping(value = "/user/me", method = RequestMethod.GET)
    public UserShortDTO getUser(@AuthenticationPrincipal ApplicationUser applicationUser) {
        if (applicationUser.getLogin() == null)
        {
            return null;
        }
        return transform(userService.loadUserByUsername(applicationUser.getLogin()), UserShortDTO.class);
    }

    @RequestMapping(value = "/user/edit", method = RequestMethod.POST)
    public UserShortDTO editUser(@AuthenticationPrincipal ApplicationUser applicationUser, @RequestBody ApplicationUser newApplicationUser) {
        if (!applicationUser.getLogin().equals(newApplicationUser.getLogin()))
        {
            return null;
        }
        return transform(userService.saveUser(newApplicationUser), UserShortDTO.class);
    }
}
