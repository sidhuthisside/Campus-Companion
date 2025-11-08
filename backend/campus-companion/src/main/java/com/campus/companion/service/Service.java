package com.campus.companion.service;

import java.util.List;
import java.util.Optional;

public interface Service<T, ID> {
    List<T> getAll();
    Optional<T> getById(ID id);
}
