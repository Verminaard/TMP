package com.lyra.bean.common;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@MappedSuperclass
@Data
@EqualsAndHashCode(of = {"id"})
@ToString(of = {"id"})
public abstract class GenericLombokEntity implements Serializable
{

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(length = 36)
    @NotNull
    protected String id;

    @Getter
    @Setter
    private boolean deleted;
}
