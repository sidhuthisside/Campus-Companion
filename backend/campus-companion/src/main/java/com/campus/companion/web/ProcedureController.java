package com.campus.companion.web;

import com.campus.companion.domain.Procedure;
import com.campus.companion.service.impl.ProcedureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/procedure")
public class ProcedureController {
    private final ProcedureService service;

    public ProcedureController(ProcedureService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> handle(@RequestParam(name = "action", required = false) String action,
                                    @RequestParam(name = "category", required = false) String category) {
        if ("list".equalsIgnoreCase(action)) {
            List<Procedure> all = service.getAll();
            return ResponseEntity.ok(all);
        }
        // simple category filter for future use
        if ("category".equalsIgnoreCase(action) && category != null) {
            return ResponseEntity.ok(service.getAll().stream().filter(p -> category.equalsIgnoreCase(p.getCategory())).toList());
        }
        return ResponseEntity.badRequest().body("Unsupported action");
    }
}

