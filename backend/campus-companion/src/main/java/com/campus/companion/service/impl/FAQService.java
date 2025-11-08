package com.campus.companion.service.impl;

import com.campus.companion.domain.FAQ;
import com.campus.companion.repo.FAQRepository;
import org.springframework.stereotype.Service;

@Service
public class FAQService extends AbstractService<FAQ> {
    public FAQService(FAQRepository repository) {
        super(repository);
    }
}

