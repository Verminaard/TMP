package com.lyra.transformer;


import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


public class UniversalTransformer
{

    private DozerBeanMapper mapper;

    @Autowired
    public UniversalTransformer(DozerBeanMapper mapper) {
        this.mapper = mapper;
    }

    @SuppressWarnings("unchecked")
    public <T> T copy(T source) {
        return (T) mapper.map(source, source.getClass());
    }

    public <T> T transform(Object source, Class<T> destinationClass) {
        return mapper.map(source, destinationClass);
    }

    public <T> T transform(Object source, Class<T> destinationClass, String context) {
        return mapper.map(source, destinationClass, context);
    }

    public <T, U> List<U> transformList(final List<T> source, final Class<U> destType) {
        return transformCollection(source, destType);
    }

    public <T, U> List<U> transformList(final List<T> source, final Class<U> destType, String context) {
        return transformCollection(source, destType, context);
    }

    public <T, U> List<U> transformCollection(final Collection<T> source, final Class<U> destType) {

        final ArrayList<U> dest = new ArrayList<U>();

        for (T element : source) {
            if (element == null) {
                continue;
            }
            dest.add(mapper.map(element, destType));
        }
        return dest;
    }

    public <T, U> List<U> transformCollection(final Collection<T> source, final Class<U> destType, String context) {

        final ArrayList<U> dest = new ArrayList<U>();

        for (T element : source) {
            if (element == null) {
                continue;
            }
            dest.add(mapper.map(element, destType, context));
        }
        return dest;
    }

    public <T, U> Page<U> transformPage(final Page<T> source, Pageable pageable, final Class<U> destType) {
        List<T> content = source.getContent();

        final ArrayList<U> destContent = new ArrayList<U>();

        for (T element : content) {
            if (element == null) {
                continue;
            }
            destContent.add(mapper.map(element, destType));
        }
        return new PageImpl<>(destContent, pageable, source.getTotalElements());
    }

    public <T, U> Page<U> transformPage(final Page<T> source, Pageable pageable, final Class<U> destType, String context) {
        List<T> content = source.getContent();

        final ArrayList<U> destContent = new ArrayList<U>();

        for (T element : content) {
            if (element == null) {
                continue;
            }
            destContent.add(mapper.map(element, destType, context));
        }
        return new PageImpl<>(destContent, pageable, source.getTotalElements());
    }
}
