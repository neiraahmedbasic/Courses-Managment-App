import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson' }
  ];


  currentLang: 'en' | 'bs' = 'en';


  translations: any = {
    en: {
      title: 'Manage Users',
      createNewUser: 'Create New User',
      editUser: 'Edit User',
      firstName: 'First Name',
      lastName: 'Last Name',
      save: 'Save',
      cancel: 'Cancel',
      actions: 'Actions',
      deleteConfirm: 'Are you sure you want to delete user'
    },
    bs: {
      title: 'Upravljanje korisnicima',
      createNewUser: 'Kreiraj novog korisnika',
      editUser: 'Uredi korisnika',
      firstName: 'Ime',
      lastName: 'Prezime',
      save: 'Sačuvaj',
      cancel: 'Otkaži',
      actions: 'Akcije',
      deleteConfirm: 'Da li ste sigurni da želite obrisati korisnika'
    }
  };

  showCreateDialog = false;
  newUser: Partial<User> = {};
  editUser: User | null = null;


  changeLang(lang: 'en' | 'bs') {
    this.currentLang = lang;
  }

  openCreateDialog() {
    this.showCreateDialog = true;
    this.newUser = {};
  }

  saveUser() {
    if (!this.newUser.firstName || !this.newUser.lastName) {
      alert('All fields are required!');
      return;
    }
    const newId = this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    this.users.push({ id: newId, firstName: this.newUser.firstName!, lastName: this.newUser.lastName! });
    this.showCreateDialog = false;
  }

  cancelCreate() {
    this.showCreateDialog = false;
  }

  edit(user: User) {
    this.editUser = { ...user };
  }

  saveEdit() {
    if (!this.editUser?.firstName || !this.editUser?.lastName) {
      alert('All fields are required!');
      return;
    }
    const index = this.users.findIndex(u => u.id === this.editUser!.id);
    if (index !== -1) this.users[index] = { ...this.editUser! };
    this.editUser = null;
  }

  cancelEdit() {
    this.editUser = null;
  }

  delete(user: User) {
    if (confirm(`${this.translations[this.currentLang].deleteConfirm} ${user.firstName} ${user.lastName}?`)) {
      this.users = this.users.filter(u => u.id !== user.id);
    }
  }
}
