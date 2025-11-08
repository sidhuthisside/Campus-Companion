package com.campus.companion.repo.impl;

import com.campus.companion.domain.FAQ;
import com.campus.companion.repo.FAQRepository;
import com.campus.companion.repo.InMemoryRepository;
import org.springframework.stereotype.Repository;
import jakarta.annotation.PostConstruct;

@Repository
public class FAQInMemoryRepository extends InMemoryRepository<FAQ> implements FAQRepository {
    @PostConstruct
    public void init() {
        storage.put("faq1", new FAQ("faq1", "How do I change my major?", "Complete Major Declaration Form and submit.", "academic"));
        storage.put("faq2", new FAQ("faq2", "When is tuition due?", "Two weeks before semester starts.", "financial"));
    }

    @Override
    protected String getId(FAQ entity) { return entity.getId(); }
}

