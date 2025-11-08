package com.campus.companion.service.impl;

import com.campus.companion.domain.Tip;
import com.campus.companion.repo.TipRepository;
import org.springframework.stereotype.Service;

@Service
public class TipService extends AbstractService<Tip> {
    public TipService(TipRepository repository) {
        super(repository);
    }
}

