package com.lyra.web;

import com.lyra.bean.common.User;
import com.lyra.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class AccountController
{
    private final UserService userService;

    @Autowired
    public AccountController(UserService userService)
    {
        this.userService = userService;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
