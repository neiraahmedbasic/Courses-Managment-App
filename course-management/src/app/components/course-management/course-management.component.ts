import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Course {
  name: string;
  department: string;
  classification: string;
  participants: number;
}

@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent {

  currentLang: 'en' | 'bs' = 'bs';

  translations = {
    en: {
      filterCourses: 'Filter Courses',
      courseName: 'Course Name',
      classification: 'Classification',
      department: 'Department',
      participants: 'Participants',
      createUpdate: 'Create / Update Course',
      save: 'Save',
      cancel: 'Cancel',
      coursesOverview: 'Courses Overview',
      allDepartments: 'All Departments',
      allClassifications: 'All Classifications',
      select: '--Select--',
      softSkills: 'Soft Skills',
      technical: 'Technical',
      business: 'Business',
      hr: 'HR',
      managers: 'Managers',
      developers: 'Developers',
      administrators: 'Administrators'
    },
    bs: {
      filterCourses: 'Filtriraj kurseve',
      courseName: 'Naziv kursa',
      classification: 'Klasifikacija',
      department: 'Odjel',
      participants: 'Učesnici',
      createUpdate: 'Kreiraj / Ažuriraj kurs',
      save: 'Spasi',
      cancel: 'Otkaži',
      coursesOverview: 'Pregled kurseva',
      allDepartments: 'Svi odjeli',
      allClassifications: 'Sve klasifikacije',
      select: '--Odaberi--',
      softSkills: 'Međuljudske vještine',
      technical: 'Tehnički',
      business: 'Biznis',
      hr: 'Ljudski resursi',
      managers: 'Menadžeri',
      developers: 'Programeri',
      administrators: 'Administratori'
    }
  };

  switchLang(lang: 'en' | 'bs') {
    this.currentLang = lang;
  }


  filterName: string = '';
  filterDepartment: string = '';
  filterClassification: string = '';


  newCourse: Course = {
    name: '',
    department: '',
    classification: '',
    participants: 0
  };


  courses: Course[] = [];


  saveCourse() {
    if (!this.newCourse.name || !this.newCourse.department || !this.newCourse.classification) {
      alert(this.currentLang === 'en'
        ? 'All required fields must be filled!'
        : 'Sva obavezna polja moraju biti popunjena!');
      return;
    }


    this.courses.push({ ...this.newCourse });


    this.resetForm();


    this.filterName = '';
    this.filterDepartment = '';
    this.filterClassification = '';
  }

  resetForm() {
    this.newCourse = {
      name: '',
      department: '',
      classification: '',
      participants: 0
    };
  }


  get filteredCourses() {
    return this.courses.filter(c =>
      (!this.filterName || c.name.toLowerCase().includes(this.filterName.toLowerCase())) &&
      (!this.filterDepartment || c.department === this.filterDepartment) &&
      (!this.filterClassification || c.classification === this.filterClassification)
    );
  }
}
