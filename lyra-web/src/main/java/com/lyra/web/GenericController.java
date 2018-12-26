package com.lyra.web;

import com.lyra.transformer.UniversalTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public abstract class GenericController {

    private final UniversalTransformer universalTransformer;

    @Autowired
    public GenericController(UniversalTransformer universalTransformer) {
        this.universalTransformer = universalTransformer;
    }

    public <T> T transform(Object source, Class<T> destinationClass) {
        return universalTransformer.transform(source, destinationClass);
    }

    public <T> T transform(Object source, Class<T> destinationClass, String contextName) {
        return universalTransformer.transform(source, destinationClass, contextName);
    }

    public <T, U> List<U> transformList(final List<T> source, final Class<U> destType) {
        return universalTransformer.transformList(source, destType);
    }

    public <T, U> Page<U> transformPage(final Page<T> source, Pageable pageable, final Class<U> destType) {
        return universalTransformer.transformPage(source, pageable, destType);
    }

}
