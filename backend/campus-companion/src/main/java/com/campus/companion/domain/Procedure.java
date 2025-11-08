package com.campus.companion.domain;

public class Procedure extends BaseEntity {
    private String title;
    private String summary;
    private String category;

    public Procedure(String id, String title, String summary, String category) {
        super(id);
        this.title = title;
        this.summary = summary;
        this.category = category;
    }

    public String getTitle() { return title; }
    public String getSummary() { return summary; }
    public String getCategory() { return category; }
}

