import { Routes } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent }, // default home
  { path: 'administration', component: AdministrationComponent },
  { path: 'course-management', component: CourseManagementComponent },
  { path: 'course-overview', component: CourseOverviewComponent },
  { path: 'course-detail', component: CourseDetailComponent }
];
