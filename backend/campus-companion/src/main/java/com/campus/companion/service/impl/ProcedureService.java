package com.campus.companion.service.impl;

import com.campus.companion.domain.Procedure;
import com.campus.companion.repo.ProcedureRepository;
import org.springframework.stereotype.Service;

@Service
public class ProcedureService extends AbstractService<Procedure> {
    public ProcedureService(ProcedureRepository repository) {
        super(repository);
    }
}

