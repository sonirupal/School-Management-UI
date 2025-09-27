import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ClassesComponent } from './components/classes/classes.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdmissionComponent } from './components/admission/admission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewHiringComponent } from './components/new-hiring/new-hiring.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    CardsComponent,
    StudentProfileComponent,
    TeachersComponent,
    AssignmentComponent,
    CoursesComponent,
    SubjectsComponent,
    ClassesComponent,
    AdmissionComponent,
    NewHiringComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
