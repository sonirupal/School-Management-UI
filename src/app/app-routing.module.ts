import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ClassesComponent } from './components/classes/classes.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { NewHiringComponent } from './components/new-hiring/new-hiring.component';

const routes: Routes = [
  {path : 'Dashboard' , component: DashboardComponent},
  {path : 'Assignment' , component:AssignmentComponent},
  {path : 'Classes' , component : ClassesComponent},
  {path : 'Students' , component : StudentProfileComponent},
  {path : 'Subjects' , component : SubjectsComponent},
  {path : 'Teachers' , component: TeachersComponent},
  {path : 'Admission' , component: AdmissionComponent},
  {path : 'Hiring' , component: NewHiringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
