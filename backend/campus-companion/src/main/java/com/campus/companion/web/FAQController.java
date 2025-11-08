package com.campus.companion.web;

import com.campus.companion.domain.FAQ;
import com.campus.companion.service.impl.FAQService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/faq")
public class FAQController {
    private final FAQService service;

    public FAQController(FAQService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> handle(@RequestParam(name = "action", required = false) String action,
                                    @RequestParam(name = "q", required = false) String query) {
        if ("list".equalsIgnoreCase(action)) {
            List<FAQ> all = service.getAll();
            return ResponseEntity.ok(all);
        }
        if ("search".equalsIgnoreCase(action) && query != null) {
            return ResponseEntity.ok(service.getAll().stream()
                    .filter(f -> f.getQuestion().toLowerCase().contains(query.toLowerCase())
                            || f.getAnswer().toLowerCase().contains(query.toLowerCase()))
                    .toList());
        }
        return ResponseEntity.badRequest().body("Unsupported action");
    }
}

