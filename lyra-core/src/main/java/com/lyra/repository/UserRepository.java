package com.lyra.repository;

import com.lyra.bean.common.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<ApplicationUser, String>
{
    ApplicationUser findByLogin(String login);
}
