package com.lyra.bean.geo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.lyra.bean.common.GenericLombokEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "geotag")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Geotag extends GenericLombokEntity
{
    @Column(name = "xValue")
    private double xValue;

    @Column(name = "yValue")
    private double yValue;
}
