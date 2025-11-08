package com.campus.companion.repo;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public abstract class InMemoryRepository<T> implements Repository<T, String> {
    protected final Map<String, T> storage = new ConcurrentHashMap<>();

    protected abstract String getId(T entity);

    @Override
    public List<T> findAll() {
        return new ArrayList<>(storage.values());
    }

    @Override
    public Optional<T> findById(String id) {
        return Optional.ofNullable(storage.get(id));
    }
}

