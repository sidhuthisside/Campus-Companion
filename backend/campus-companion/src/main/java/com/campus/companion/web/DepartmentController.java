package com.campus.companion.web;

import com.campus.companion.domain.Department;
import com.campus.companion.service.impl.DepartmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/department")
public class DepartmentController {
    private final DepartmentService service;

    public DepartmentController(DepartmentService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> handle(@RequestParam(name = "action", required = false) String action) {
        if ("list".equalsIgnoreCase(action)) {
            List<Department> all = service.getAll();
            return ResponseEntity.ok(all);
        }
        return ResponseEntity.badRequest().body("Unsupported action");
    }
}

