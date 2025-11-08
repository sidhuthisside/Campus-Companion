package com.campus.companion.repo.impl;

import com.campus.companion.domain.Tip;
import com.campus.companion.repo.InMemoryRepository;
import com.campus.companion.repo.TipRepository;
import org.springframework.stereotype.Repository;
import jakarta.annotation.PostConstruct;

@Repository
public class TipInMemoryRepository extends InMemoryRepository<Tip> implements TipRepository {
    @PostConstruct
    public void init() {
        storage.put("tip1", new Tip("tip1", "Develop a Study System", "Study in shorter, focused sessions.", "academic"));
        storage.put("tip2", new Tip("tip2", "Use a Planner", "Track assignments and exams.", "time"));
    }

    @Override
    protected String getId(Tip entity) { return entity.getId(); }
}

