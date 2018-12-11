package com.lyra.service;

import com.lyra.bean.common.User;
import com.lyra.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService
{
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user)
    {
        if (userRepository.findByLogin(user.getLogin()) == null)
        {
            throw new IllegalArgumentException("Login must be uniq!");
        }

        //логика регистрации Spring Security
/*        User newUser = user;
        user.setPassword(passwordEncoder.encode(user.getPassword()));*/

        return userRepository.save(user);
    }
}
