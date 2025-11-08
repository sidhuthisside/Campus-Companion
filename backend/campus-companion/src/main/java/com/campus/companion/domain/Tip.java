package com.campus.companion.domain;

public class Tip extends BaseEntity {
    private String title;
    private String content;
    private String category;

    public Tip(String id, String title, String content, String category) {
        super(id);
        this.title = title;
        this.content = content;
        this.category = category;
    }

    public String getTitle() { return title; }
    public String getContent() { return content; }
    public String getCategory() { return category; }
}

