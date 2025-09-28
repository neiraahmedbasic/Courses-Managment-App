CREATE DATABASE IF NOT EXISTS courses_db;
USE courses_db;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS course_participant;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS classification;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS users;

SET FOREIGN_KEY_CHECKS = 1;


CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('USER','ADMIN') DEFAULT 'USER'
);


CREATE TABLE department (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);


CREATE TABLE classification (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);


CREATE TABLE course (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration_hours INT,
    department_id BIGINT NULL,
    classification_id BIGINT NULL,
    participants INT DEFAULT 0,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL,
    FOREIGN KEY (classification_id) REFERENCES classification(id) ON DELETE SET NULL
);


CREATE TABLE course_participant (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    course_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE
);


INSERT INTO users (first_name, last_name, username, password, role) VALUES
('John', 'Doe', 'admin', 'admin', 'ADMIN'),
('Jane', 'Smith', 'janesmith', 'password123', 'USER'),
('Bob', 'Johnson', 'bobjohnson', 'password123', 'USER'),
('Neira', 'Ahmedbašić', 'neira123', 'lozinka123', 'USER'),
('Amir', 'Kovačević', 'amirk', 'pass123', 'USER'),
('Elma', 'Hadžić', 'elmah', 'pass123', 'USER');


INSERT INTO department (name) VALUES 
('IT'), ('HR'), ('Finance'), ('Marketing'), ('Sales');


INSERT INTO classification (name) VALUES 
('Beginner'), ('Intermediate'), ('Advanced'), ('Expert');


INSERT INTO course (title, description, duration_hours, department_id, classification_id, participants) VALUES
('Angular Basics', 'Learn the basics of Angular', 20, 1, 1, 10),
('Java Basics', 'Introductory Java course', 40, 1, 1, 15),
('Spring Boot Fundamentals', 'Building REST APIs with Spring Boot', 30, 1, 2, 12),
('Database Design', 'Learn relational database concepts and SQL', 25, 1, 2, 18),
('Web Development with Angular', 'Modern frontend development using Angular', 35, 1, 2, 10),
('Cloud Computing', 'Introduction to cloud services and architecture', 30, 1, 3, 9),
('Effective Communication', 'Improve workplace communication skills', 15, 2, 1, 20),
('Teamwork & Collaboration', 'How to work effectively in teams', 12, 2, 1, 18),
('Leadership Essentials', 'Develop basic leadership and management skills', 20, 2, 2, 14),
('Time Management', 'Organize and prioritize tasks effectively', 10, 2, 1, 25),
('Conflict Resolution', 'Learn strategies to resolve workplace conflicts', 15, 2, 2, 11),
('Project Management', 'Basics of project management', 15, 2, 2, 22),
('Financial Literacy', 'Understand financial reports and budgeting', 18, 3, 1, 16),
('Business Strategy', 'Learn how to create and execute business strategies', 25, 3, 3, 12),
('Entrepreneurship 101', 'Starting and managing your own business', 20, 3, 2, 19),
('Marketing Fundamentals', 'Principles of digital and traditional marketing', 20, 4, 1, 13),
('SEO & Analytics', 'Optimize websites and analyze marketing data', 25, 4, 2, 9),
('Sales Techniques', 'Learn modern sales strategies', 15, 5, 1, 17),
('Customer Relationship Management', 'Managing clients effectively', 20, 5, 2, 11),
('Advanced Negotiation Skills', 'Expert strategies for business negotiations', 30, 5, 4, 6);


INSERT INTO course_participant (user_id, course_id) VALUES
(2, 1), (2, 12),
(3, 2), (3, 7), (3, 14),
(4, 1), (4, 3), (4, 5), (4, 8), (4, 15),
(5, 4), (5, 6), (5, 16), (5, 18),
(6, 9), (6, 10), (6, 13), (6, 17), (6, 19);

SET FOREIGN_KEY_CHECKS = 1;


SELECT * FROM users;
SELECT * FROM department;
SELECT * FROM classification;
SELECT * FROM course;
SELECT * FROM course_participant;

