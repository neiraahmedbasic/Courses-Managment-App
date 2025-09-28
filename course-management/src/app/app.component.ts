import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpen = false;
  userMenuOpen = false;
  selectedLanguage = 'en';

  loginData: { username: string; password: string } = { username: '', password: '' };
  loginError: string = '';
  isLoggedIn: boolean = false;

  translations: any = {
    en: {
      home: 'Home',
      administration: 'Administration',
      courseManagement: 'Course Management',
      courseOverview: 'Course Overview',
      courseDetail: 'Course Detail',
      coursesApp: 'Courses App',
      welcomeUser: 'WELCOME USER',
      helloAdmin: 'Hello, Admin!',
      username: 'Username',
      password: 'Password',
      login: 'Login',
      logout: 'Logout',
      invalidLogin: 'Invalid username or password'
    },
    bs: {
      home: 'Početna',
      administration: 'Administracija',
      courseManagement: 'Upravljanje Kursevima',
      courseOverview: 'Pregled Kurseva',
      courseDetail: 'Detalji Kursa',
      coursesApp: 'Aplikacija Kursevi',
      welcomeUser: 'DOBRODOŠAO KORISNIČE',
      helloAdmin: 'Zdravo, Admin!',
      username: 'Korisničko ime',
      password: 'Lozinka',
      login: 'Prijava',
      logout: 'Odjava',
      invalidLogin: 'Neispravno korisničko ime ili lozinka'
    }
  };

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
  }

  login() {
    const { username, password } = this.loginData;
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.loginError = '';
      this.loginData = { username: '', password: '' };
    } else {
      this.loginError = this.translations[this.selectedLanguage].invalidLogin;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
