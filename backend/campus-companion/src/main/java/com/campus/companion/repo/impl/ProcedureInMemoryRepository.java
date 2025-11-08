package com.campus.companion.repo.impl;

import com.campus.companion.domain.Procedure;
import com.campus.companion.repo.InMemoryRepository;
import com.campus.companion.repo.ProcedureRepository;
import org.springframework.stereotype.Repository;
import jakarta.annotation.PostConstruct;

@Repository
public class ProcedureInMemoryRepository extends InMemoryRepository<Procedure> implements ProcedureRepository {
    @PostConstruct
    public void init() {
        storage.put("entry", new Procedure("entry", "College Entry", "Show admission proof or ID at security.", "general"));
        storage.put("admin", new Procedure("admin", "Administrative Formalities", "Submit documents and collect ID.", "general"));
    }

    @Override
    protected String getId(Procedure entity) { return entity.getId(); }
}

