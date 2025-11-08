package com.campus.companion.web;

import com.campus.companion.domain.Tip;
import com.campus.companion.service.impl.TipService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tip")
public class TipController {
    private final TipService service;

    public TipController(TipService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> handle(@RequestParam(name = "action", required = false) String action,
                                    @RequestParam(name = "category", required = false) String category) {
        if ("list".equalsIgnoreCase(action)) {
            List<Tip> all = service.getAll();
            return ResponseEntity.ok(all);
        }
        if ("category".equalsIgnoreCase(action) && category != null) {
            return ResponseEntity.ok(service.getAll().stream().filter(t -> category.equalsIgnoreCase(t.getCategory())).toList());
        }
        return ResponseEntity.badRequest().body("Unsupported action");
    }
}

