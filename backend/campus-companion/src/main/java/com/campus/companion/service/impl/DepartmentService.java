package com.campus.companion.service.impl;

import com.campus.companion.domain.Department;
import com.campus.companion.repo.DepartmentRepository;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService extends AbstractService<Department> {
    public DepartmentService(DepartmentRepository repository) {
        super(repository);
    }
}

