# Project: Courses App

Courses App is a web application for managing courses, users, and departments. It integrates a responsive Angular frontend with a Spring Boot backend, using MySQL as the database. The application supports bilingual interfaces (English/Bosnian) and provides full CRUD operations for courses and users.

---

## Table of Contents
- [Frontend](#frontend)
- [Backend](#backend)
- [Components](#components)
  - [AppComponent](#appcomponent)
  - [HomeViewComponent](#homeviewcomponent)
  - [AdministrationComponent](#administrationcomponent)
  - [CourseManagementComponent](#coursemanagementcomponent)
  - [CourseOverviewComponent](#courseoverviewcomponent)
  - [CourseDetailComponent](#coursedetailcomponent)
- [Database Integration](#database-integration)
- [Frontend Functionality](#frontend-functionality)
- [API Testing](#api-testing)

---

## Frontend
- Implemented in **Angular** using TypeScript.
- Provides a responsive and dynamic user interface with routing.
- Supports **English/Bosnian** language toggle.
- Uses card-style modules for easy navigation.

## Backend
- Built with **Java Spring Boot**.
- Exposes REST APIs for CRUD operations.
- Integrates with MySQL using **HikariCP** for connection pooling.
- Handles all database operations via Spring Boot repositories.

---

## Components

### AppComponent
- Main layout component integrating header, sidebar, user menu, and content area (`router-outlet`).
- Manages language toggling and simulated authentication.
- Provides a consistent layout for all other components.

### HomeViewComponent
- Landing page giving quick access to **Administration**, **Course Management**, and **Course Overview**.
- Language toggle supported.
- Uses card-style layout for clarity and intuitive navigation.

### AdministrationComponent
- Handles user management: view, create, edit, delete users.
- Forms include validation.
- Supports dynamic language switching.
- Uses mock data with automatic ID assignment.

### CourseManagementComponent
- Create, update, and filter courses.
- Search by course name, department, or classification.
- Interactive, bilingual interface with form validation.

### CourseOverviewComponent
- Displays all courses with details: name, classification, department, participant group, number of participants.
- Supports dynamic search, filtering, and deletion.
- Bilingual labels supported.

### CourseDetailComponent
- Shows detailed course information including participants, documents, and photos.
- Allows adding/removing participants, uploading documents and photos.
- Sectioned card layout with dynamic lists.
- Supports bilingual labels and content.

---

## Database Integration
- **MySQL** database hosted locally via **XAMPP**.
- Tables include:
  - `User`
  - `Role`
  - `Department`
  - `Course`
  - `CourseClassification`
  - `CourseParticipant`
- All operations performed via Spring Boot repositories.
- **MySQL Workbench** used for design, querying, and managing tables.
- Backend exposes REST APIs for frontend consumption.

---

## Frontend Functionality
- Dynamic course management and participant handling.
- Upload and manage files (documents, photos).
- Fully responsive design for desktop and mobile.
- Frontend communicates with backend via REST APIs.

---

## API Testing
- Use **Postman** for testing the Courses App REST API.
