import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id: number;
  nameEn: string;
  nameBs: string;
  classificationEn: string;
  classificationBs: string;
  departmentEn: string;
  departmentBs: string;
  participantGroupEn: string;
  participantGroupBs: string;
  numberOfParticipants: number;
}

@Component({
  selector: 'app-course-overview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent {

  displayedCourses: Course[] = [];
  searchTerm: string = '';
  selectedLang: string = 'en'; // default jezik

  // Testni podaci sa prevodom
  courses: Course[] = [
    { id: 1, nameEn: 'Java Backend Development', nameBs: 'Java Backend Razvoj', classificationEn: 'Core', classificationBs: 'Osnovni', departmentEn: 'Software Engineering', departmentBs: 'Softverski Inženjering', participantGroupEn: 'Group A', participantGroupBs: 'Grupa A', numberOfParticipants: 30 },
    { id: 2, nameEn: 'Angular Frontend Development', nameBs: 'Angular Frontend Razvoj', classificationEn: 'Core', classificationBs: 'Osnovni', departmentEn: 'Software Engineering', departmentBs: 'Softverski Inženjering', participantGroupEn: 'Group B', participantGroupBs: 'Grupa B', numberOfParticipants: 25 },
    { id: 3, nameEn: 'Technical Writing', nameBs: 'Tehničko Pisanje', classificationEn: 'Elective', classificationBs: 'Izborni', departmentEn: 'Technical Skills', departmentBs: 'Tehničke Vještine', participantGroupEn: 'Group A', participantGroupBs: 'Grupa A', numberOfParticipants: 20 },
    { id: 4, nameEn: 'Project Management Basics', nameBs: 'Osnove Projekt Menadžmenta', classificationEn: 'Core', classificationBs: 'Osnovni', departmentEn: 'Business', departmentBs: 'Biznis', participantGroupEn: 'Group C', participantGroupBs: 'Grupa C', numberOfParticipants: 22 },
    { id: 5, nameEn: 'Communication & Teamwork', nameBs: 'Komunikacija i Timski Rad', classificationEn: 'Elective', classificationBs: 'Izborni', departmentEn: 'Soft Skills', departmentBs: 'Meke Vještine', participantGroupEn: 'Group B', participantGroupBs: 'Grupa B', numberOfParticipants: 28 },
    { id: 6, nameEn: 'Agile Methodologies', nameBs: 'Agilne Metodologije', classificationEn: 'Core', classificationBs: 'Osnovni', departmentEn: 'Software Engineering', departmentBs: 'Softverski Inženjering', participantGroupEn: 'Group A', participantGroupBs: 'Grupa A', numberOfParticipants: 18 },
    { id: 7, nameEn: 'Business Strategy', nameBs: 'Biznis Strategija', classificationEn: 'Elective', classificationBs: 'Izborni', departmentEn: 'Business', departmentBs: 'Biznis', participantGroupEn: 'Group C', participantGroupBs: 'Grupa C', numberOfParticipants: 24 }
  ];

  // Prijevodi kolona, dugmadi i placeholdera
  translations: any = {
    en: {
      courseName: 'Course Name',
      classification: 'Classification',
      department: 'Department',
      participantGroup: 'Participant Group',
      numberOfParticipants: 'Number of Participants',
      actions: 'Actions',
      showAll: 'Show All Courses',
      searchPlaceholder: 'Search courses...'
    },
    bs: {
      courseName: 'Naziv Kursa',
      classification: 'Klasifikacija',
      department: 'Odjel',
      participantGroup: 'Grupa Polaznika',
      numberOfParticipants: 'Broj Polaznika',
      actions: 'Akcije',
      showAll: 'Prikaži sve kurseve',
      searchPlaceholder: 'Pretraži kurseve...'
    }
  };

  constructor() {
    this.showAllCourses();
  }

  showAllCourses(): void {
    this.displayedCourses = [...this.courses];
  }

  filteredCourses() {
    return this.displayedCourses.filter(course =>
      (this.selectedLang === 'en' ? course.nameEn : course.nameBs).toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      (this.selectedLang === 'en' ? course.classificationEn : course.classificationBs).toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      (this.selectedLang === 'en' ? course.departmentEn : course.departmentBs).toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      (this.selectedLang === 'en' ? course.participantGroupEn : course.participantGroupBs).toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteCourse(id: number): void {
    this.displayedCourses = this.displayedCourses.filter(course => course.id !== id);
  }

  onLangChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedLang = selectElement.value;
  }
}
