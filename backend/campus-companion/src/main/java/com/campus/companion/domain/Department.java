package com.campus.companion.domain;

public class Department extends BaseEntity {
    private String name;
    private String description;
    private int numFaculty;
    private int numCourses;

    public Department(String id, String name, String description, int numFaculty, int numCourses) {
        super(id);
        this.name = name;
        this.description = description;
        this.numFaculty = numFaculty;
        this.numCourses = numCourses;
    }

    public String getName() { return name; }
    public String getDescription() { return description; }
    public int getNumFaculty() { return numFaculty; }
    public int getNumCourses() { return numCourses; }
}

