package com.campus.companion.service.impl;

import com.campus.companion.service.Service;
import com.campus.companion.repo.Repository;
import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T> implements Service<T, String> {
    private final Repository<T, String> repository;

    protected AbstractService(Repository<T, String> repository) {
        this.repository = repository;
    }

    @Override
    public List<T> getAll() {
        return repository.findAll();
    }

    @Override
    public Optional<T> getById(String id) {
        return repository.findById(id);
    }
}

