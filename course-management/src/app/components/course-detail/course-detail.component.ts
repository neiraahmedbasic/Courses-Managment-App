import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {


  course = {
    name: 'Angular Basics',
    department: 'Computer Science',
    group: 'A1',
    participants: ['Neira', 'Amir', 'Lejla']
  };

  newParticipant: string = '';


  documents: string[] = [];
  photos: string[] = [];
  selectedDoc: string | null = null;
  selectedPhoto: string | null = null;


  currentLang: 'en' | 'bs' = 'en';
  labels = {
    en: {
      courseInfoTitle: '📘 Course Information',
      courseNameLabel: 'Name:',
      departmentLabel: 'Department:',
      groupLabel: 'Group:',
      participantsTitle: '👥 Participants',
      newParticipantPlaceholder: 'Add participant...',
      addBtn: 'Add',
      filesTitle: '📂 Files',
      uploadPhotoTitle: '🖼 Upload Photo',
      uploadPhotoBtn: 'Upload',
      uploadDocTitle: '📤 Upload Document',
      uploadDocBtn: 'Upload',
      backBtn: '⬅ Back'
    },
    bs: {
      courseInfoTitle: '📘 Informacije o kursu',
      courseNameLabel: 'Naziv:',
      departmentLabel: 'Odsjek:',
      groupLabel: 'Grupa:',
      participantsTitle: '👥 Učesnici',
      newParticipantPlaceholder: 'Dodaj učesnika...',
      addBtn: 'Dodaj',
      filesTitle: '📂 Dokumenti',
      uploadPhotoTitle: '🖼 Učitaj fotografiju',
      uploadPhotoBtn: 'Učitaj',
      uploadDocTitle: '📤 Učitaj dokument',
      uploadDocBtn: 'Učitaj',
      backBtn: '⬅ Nazad'
    }
  };

  constructor(private router: Router) {}


  addParticipant() {
    if (this.newParticipant.trim()) {
      this.course.participants = [...this.course.participants, this.newParticipant.trim()];
      this.newParticipant = '';
    }
  }

  removeParticipant(index: number) {
    this.course.participants = this.course.participants.filter((_, i) => i !== index);
  }


  onDocSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.selectedDoc = file.name;
    event.target.value = ''; // reset input
  }

  addDocument() {
    if (this.selectedDoc) {
      this.documents = [...this.documents, this.selectedDoc];
      this.selectedDoc = null;
    }
  }


  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.selectedPhoto = file.name;
    event.target.value = ''; // reset input
  }

  addPhoto() {
    if (this.selectedPhoto) {
      this.photos = [...this.photos, this.selectedPhoto];
      this.selectedPhoto = null;
    }
  }


  goBack() {
    this.router.navigate(['/course-overview']);
  }


  changeLang(lang: 'en' | 'bs') {
    this.currentLang = lang;
  }
}
