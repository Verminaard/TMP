package com.lyra.bean.common;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.StringJoiner;

import static org.springframework.util.CollectionUtils.isEmpty;

@Entity
@Table(name = "Users")
@Data
@ToString(callSuper = true, of = {"login"})
@EqualsAndHashCode(of = {"login", "email"}, callSuper = true)
public class User extends GenericLombokEntity{

    @Column(name="login", unique = true)
    private String login;

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

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "middleName")
    private String middleName;

    @Column(name = "email")
    private String email;

    @Column(name = "telephone")
    private String telephone;

    @Transient
    private String password;

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
        if (getAuthorities().isEmpty()) {
            return false;
        } else {
            for (UserAuthority userAuthority : getAuthorities()) {
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
