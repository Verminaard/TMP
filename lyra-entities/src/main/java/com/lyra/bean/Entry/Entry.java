package com.lyra.bean.Entry;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.lyra.bean.common.ApplicationUser;
import com.lyra.bean.common.GenericLombokEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "entry")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Entry extends GenericLombokEntity
{

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private ApplicationUser applicationUser;

    @Column(name = "entryName", nullable = false)
    private String entryName;

    @Enumerated(EnumType.STRING)
    @Column(name = "entryType", nullable = false)
    private EntryType entryType;

    @Enumerated(EnumType.STRING)
    @Column(name = "entryStatus", nullable = false)
    private EntryStatus entryStatus;

    @Column(name = "rating")
    private int rating;

    @Column(name = "description")
    private String description;

    @Column(name = "tags")
    private String tags;

}
