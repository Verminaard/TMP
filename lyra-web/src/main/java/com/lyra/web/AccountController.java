package com.lyra.web;

import com.lyra.bean.common.ApplicationUser;
import com.lyra.service.UserService;
import com.lyra.transformer.UniversalTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/user/{login}", method = RequestMethod.GET)
    public ApplicationUser getUser(@AuthenticationPrincipal ApplicationUser applicationUser, @PathVariable("login") String login) {
        if (!applicationUser.getLogin().equals(login))
        {
            return null;
        }
        return userService.loadUserByUsername(login);
    }

    @RequestMapping(value = "/user/edit", method = RequestMethod.POST)
    public ApplicationUser editUser(@AuthenticationPrincipal ApplicationUser applicationUser, @RequestBody ApplicationUser newApplicationUser) {
        if (!applicationUser.getLogin().equals(newApplicationUser.getLogin()))
        {
            return null;
        }
        return userService.saveUser(newApplicationUser);
    }
}
