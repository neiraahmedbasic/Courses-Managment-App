import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'course-management', component: CourseManagementComponent },
  { path: 'course-overview', component: CourseOverviewComponent },
 { path: 'course-detail', component: CourseDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


