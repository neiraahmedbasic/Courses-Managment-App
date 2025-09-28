import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  isEnglish: boolean = true; // default je engleski

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }
}
