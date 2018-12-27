package com.lyra.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.lyra.bean.common.UserAuthority;
import lombok.Data;
import lombok.ToString;

import java.util.Set;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
@ToString(of = {"id", "login", "firstName", "lastName", "middleName", "authorities"})
public class UserDTO {

    private String id;

    private String login;

    private String fio;

    private String firstName;

    private String lastName;

    private String middleName;

    private String password;

    private Set<UserAuthority> authorities;

    private UserAuthorityDTO customRole;
}
