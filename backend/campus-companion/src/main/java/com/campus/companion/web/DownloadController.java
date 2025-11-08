package com.campus.companion.web;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

@RestController
@RequestMapping("/downloads")
public class DownloadController {
    private static final String ZIP_PATH = "/Users/vedantghule/Downloads/campus-companion 7/campus-companion-singlehost.zip";

    @GetMapping("/campus-companion-singlehost.zip")
    public ResponseEntity<Resource> downloadZip() {
        File file = new File(ZIP_PATH);
        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }
        FileSystemResource resource = new FileSystemResource(file);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=campus-companion-singlehost.zip")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(file.length())
                .body(resource);
    }
}

