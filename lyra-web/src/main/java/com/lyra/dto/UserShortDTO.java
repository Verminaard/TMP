package com.lyra.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.Set;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserShortDTO {

    private String id;

    private String login;

    private String fio;

    private String firstName;

    private String lastName;

    private String middleName;

    private Set<UserAuthorityDTO> userRoleSet;

}
