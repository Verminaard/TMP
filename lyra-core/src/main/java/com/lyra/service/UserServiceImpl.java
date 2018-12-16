package com.lyra.service;

import com.lyra.bean.common.ApplicationUser;
import com.lyra.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService, UserDetailsService
{
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder)
    {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public ApplicationUser saveUser(ApplicationUser applicationUser)
    {
        if (userRepository.findByLogin(applicationUser.getLogin()) != null)
        {
            throw new IllegalArgumentException("Login must be uniq!");
        }

        //логика регистрации Spring Security
        ApplicationUser newApplicationUser = applicationUser;

        newApplicationUser.setEnabled(true);
        newApplicationUser.setPassword(bCryptPasswordEncoder.encode(applicationUser.getPassword()));


        return userRepository.save(newApplicationUser);
    }

    @Override
    public ApplicationUser loadUserByUsername(String username) throws UsernameNotFoundException
    {
        ApplicationUser applicationUser = userRepository.findByLogin(username);
        if (applicationUser == null) {
            throw new UsernameNotFoundException(username);
        }
        return applicationUser;
    }
}
