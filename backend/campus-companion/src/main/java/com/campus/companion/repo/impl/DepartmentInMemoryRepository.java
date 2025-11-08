package com.campus.companion.repo.impl;

import com.campus.companion.domain.Department;
import com.campus.companion.repo.DepartmentRepository;
import com.campus.companion.repo.InMemoryRepository;
import org.springframework.stereotype.Repository;

import jakarta.annotation.PostConstruct;

@Repository
public class DepartmentInMemoryRepository extends InMemoryRepository<Department> implements DepartmentRepository {
    @PostConstruct
    public void init() {
        storage.put("cse", new Department("cse", "Computer Science", "Explore programming, algorithms, and software development.", 12, 45));
        storage.put("it", new Department("it", "Information Technology", "IT Department backbone of digital infrastructure.", 10, 38));
        storage.put("entc", new Department("entc", "ENTC", "Electronics components and logic designs.", 8, 32));
    }

    @Override
    protected String getId(Department entity) {
        return entity.getId();
    }
}

