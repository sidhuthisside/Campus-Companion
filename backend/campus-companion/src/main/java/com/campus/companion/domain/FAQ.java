package com.campus.companion.domain;

public class FAQ extends BaseEntity {
    private String question;
    private String answer;
    private String category;

    public FAQ(String id, String question, String answer, String category) {
        super(id);
        this.question = question;
        this.answer = answer;
        this.category = category;
    }

    public String getQuestion() { return question; }
    public String getAnswer() { return answer; }
    public String getCategory() { return category; }
}

