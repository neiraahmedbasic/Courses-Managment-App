import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang: 'en' | 'bs' = 'en';

  translations = {
    en: {
      filterCourses: 'Filter Courses',
      createUpdate: 'Create / Update Course',
      courseName: 'Course Name',
      classification: 'Classification',
      department: 'Department',
      participants: 'Participants',
      save: 'Save',
      cancel: 'Cancel',
      welcome: 'WELCOME USER',
      username: 'Username',
      password: 'Password',
      login: 'Login',
    },
    bs: {
      filterCourses: 'Filtriraj kurseve',
      createUpdate: 'Kreiraj / Ažuriraj kurs',
      courseName: 'Naziv kursa',
      classification: 'Klasifikacija',
      department: 'Odjeljenje',
      participants: 'Učesnici',
      save: 'Sačuvaj',
      cancel: 'Otkaži',
      welcome: 'DOBRODOŠLI',
      username: 'Korisničko ime',
      password: 'Lozinka',
      login: 'Prijava',
    }
  };

  setLanguage(lang: 'en' | 'bs') {
    this.currentLang = lang;
  }

  t(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }
}
export const translations: any = {
  en: {
    filterCourses: 'Filter Courses',
    courseName: 'Course Name',
    classification: 'Classification',
    department: 'Department',
    participants: 'Participants',
    createCourse: 'Create / Update Course',
    coursesOverview: 'Courses Overview',
    save: 'Save',
    cancel: 'Cancel',
    allDepartments: 'All Departments',
    allClassifications: 'All Classifications',
    select: '--Select--',
  },
  bs: {
    filterCourses: 'Filtriraj Kurseve',
    courseName: 'Naziv Kursa',
    classification: 'Klasifikacija',
    department: 'Odjeljenje',
    participants: 'Učesnici',
    createCourse: 'Kreiraj / Ažuriraj Kurs',
    coursesOverview: 'Pregled Kurseva',
    save: 'Sačuvaj',
    cancel: 'Otkaži',
    allDepartments: 'Sva odjeljenja',
    allClassifications: 'Sve klasifikacije',
    select: '--Odaberi--',
  }
};
