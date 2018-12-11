package com.lyra.bean.common;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.StringJoiner;

@Entity
@Table(name = "Users")
@Data
@ToString(callSuper = true, of = {"login"})
@EqualsAndHashCode(of = {"login", "email"}, callSuper = true)
public class User extends GenericLombokEntity{

    @Size(min = 3, max = 64, message = "Длина логина должна быть от 3 до 64 символов")
    @Column(name="login", unique = true, nullable = false)
    private String login;

    @Size(min = 5, max = 64, message = "Длина пароля должна быть от 5 до 64 символов")
    @Column(name = "password", nullable = false, length = 64)
    public String password;

    @Transient
    public String getFio() {
        StringJoiner joiner = new StringJoiner(" ");
        if (lastName != null) {
            joiner.add(lastName);
        }
        if (firstName != null) {
            joiner.add(firstName);
        }
        if (middleName != null) {
            joiner.add(middleName);
        }
        return joiner.toString();
    }

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "middleName", nullable = false)
    private String middleName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "isEnabled")
    private Boolean enabled;

    @Transient
    private Set<UserAuthority> authorities = new LinkedHashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "User_UserAuthority",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "authority_id"))
    private Set<UserAuthority> authoritySet;

    @Transient
    public boolean hasAuthority(@Nullable String authorityName) {
        if (authorityName == null || authorityName.isEmpty()) {
            return false;
        }
        if (authorities.isEmpty()) {
            return false;
        } else {
            for (UserAuthority userAuthority : authorities) {
                if (userAuthority.getName().equals(authorityName)) {
                    return true;
                }
            }
            return false;
        }
    }

    public static boolean hasAuthority(@Nullable User user, @Nullable String authorityName) {
        return !(user == null || (authorityName == null || authorityName.isEmpty())) && user.hasAuthority(authorityName);
    }

    @Transient
    public boolean hasAnyAuthorities(Set<String> authorityNameSet) {
        for (String authorityName : authorityNameSet) {
            if (hasAuthority(authorityName)) {
                return true;
            }
        }
        return false;
    }

    public static boolean hasAnyAuthorities(@Nullable User user, Set<String> authorityNameSet) {
        if (user != null) {
            for (String authorityName : authorityNameSet) {
                if (user.hasAuthority(authorityName)) {
                    return true;
                }
            }
        }
        return false;
    }

}
