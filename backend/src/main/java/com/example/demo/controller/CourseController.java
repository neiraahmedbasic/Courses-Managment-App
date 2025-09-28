package com.example.demo.controller;

import com.example.demo.model.Course;
import com.example.demo.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;


    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }


    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }


    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Course not found with id " + id));
    }


    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable Long id, @RequestBody Course courseDetails) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Course not found with id " + id));

        course.setTitle(courseDetails.getTitle());
        course.setDescription(courseDetails.getDescription());
        course.setDurationHours(courseDetails.getDurationHours());   //  camelCase
        course.setParticipants(courseDetails.getParticipants());
        course.setDepartment(courseDetails.getDepartment());
        course.setClassification(courseDetails.getClassification());

        return courseRepository.save(course);
    }


    @DeleteMapping("/{id}")
    public String deleteCourse(@PathVariable Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Course not found with id " + id));
        courseRepository.delete(course);
        return "Course with id " + id + " has been deleted successfully.";
    }
}
