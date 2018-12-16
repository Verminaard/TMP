package com.lyra.web;

import com.lyra.bean.common.ApplicationUser;
import com.lyra.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController
{
    private final UserService userService;

    @Autowired
    public AccountController(UserService userService)
    {
        this.userService = userService;
    }

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
    public ApplicationUser registerUser(@RequestBody ApplicationUser applicationUser) {
        return userService.saveUser(applicationUser);
    }
}
