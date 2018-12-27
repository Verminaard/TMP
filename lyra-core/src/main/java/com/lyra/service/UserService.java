package com.lyra.service;

import com.lyra.bean.common.ApplicationUser;

public interface UserService
{

    ApplicationUser saveUser(ApplicationUser applicationUser);

    ApplicationUser editUser(ApplicationUser applicationUser);

    ApplicationUser loadUserByUsername(String login);
}
