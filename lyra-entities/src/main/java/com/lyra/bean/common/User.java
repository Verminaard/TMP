package com.lyra.bean.common;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import javax.persistence.*;

@Entity
@Table(name = "Users")
@Data
@ToString(callSuper = true, of = {"login"})
@EqualsAndHashCode(of = {"login", "email"}, callSuper = true)
public class User extends GenericLombokEntity{

    private static final long serialVersionUID = -1939385900251608680L;

    @Column(unique = true)
    private String login;

    @Column
    private String fio;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String middleName;

    @Column
    private String email;

    @Column
    private String telephone;

    @Transient
    private String password;

}
