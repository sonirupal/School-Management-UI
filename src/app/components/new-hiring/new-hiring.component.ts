
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmsServiceService } from 'src/app/services/sms-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-hiring',
  templateUrl: './new-hiring.component.html',
  styleUrls: ['./new-hiring.component.css']
})
export class NewHiringComponent {

 teacherForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService:SmsServiceService, private toastr:ToastrService) {
    this.teacherForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      age: ['', [Validators.required, Validators.min(21)]],
      gender: ['', Validators.required],
      totalExperience: ['', [Validators.required, Validators.min(0)]],
      degree: this.fb.array([this.fb.control('', Validators.required)]),
      subject: this.fb.array([this.fb.control('', Validators.required)]),
      address: this.fb.array([this.createAddressGroup()]),
      experience: this.fb.array([this.createExperienceGroup()])
    });
  }

  // Address group
  createAddressGroup(): FormGroup {
    return this.fb.group({
      houseNo: ['', Validators.required],
      street: [''],
      area: [''],
      landmark: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  // Experience group
  createExperienceGroup(): FormGroup {
    return this.fb.group({
      schoolName: ['', Validators.required],
      totalExperience: ['', [Validators.required, Validators.min(1)]],
      location: ['']
    });
  }

  // Getters for FormArrays
  get degree() {
    return this.teacherForm.get('degree') as FormArray;
  }

  get subject() {
    return this.teacherForm.get('subject') as FormArray;
  }

  get address() {
    return this.teacherForm.get('address') as FormArray;
  }

  get experience() {
    return this.teacherForm.get('experience') as FormArray;
  }

  // Add/remove dynamic fields
  addDegree() {
    this.degree.push(this.fb.control('', Validators.required));
  }
  removeDegree(i: number) {
    this.degree.removeAt(i);
  }

  addSubject() {
    this.subject.push(this.fb.control('', Validators.required));
  }
  removeSubject(i: number) {
    this.subject.removeAt(i);
  }

  addAddress() {
    this.address.push(this.createAddressGroup());
  }
  removeAddress(i: number) {
    this.address.removeAt(i);
  }

  addExperience() {
    this.experience.push(this.createExperienceGroup());
  }
  removeExperience(i: number) {
    this.experience.removeAt(i);
  }

  // Submit form
  onSubmit() {
    debugger
    if (this.teacherForm.valid) {
      console.log('Form Submitted:', this.teacherForm.value);
      // Call API with this.teacherForm.value
      const payload = this.teacherForm.value;
      this.apiService.hireNewTeacher(payload).subscribe((res:any) =>{
        console.log(res);
        this.teacherForm.reset()
        this.toastr.success('Form Submitted Successfully!','Success');
      })
    } else {
      this.teacherForm.markAllAsTouched();
      
    }
  }
}
