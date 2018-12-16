package com.lyra.bean.common;


import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import javax.persistence.*;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserAuthority extends GenericLombokEntity implements GrantedAuthority, Comparable<UserAuthority> {

    @Column(name="name", unique = true)
    private String name;

    @Override
    public String getAuthority() {
        return "AUTHORITY_" + this.getName();
    }

    public int compareTo(UserAuthority p) {
        return name.compareTo(p.getName());
    }
}