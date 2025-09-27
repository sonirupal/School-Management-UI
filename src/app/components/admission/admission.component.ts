import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmsServiceService } from 'src/app/services/sms-service.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {
  studentForm!: FormGroup;

  classOptions:any = []
  
  
  constructor(private fb: FormBuilder,private apiService:SmsServiceService) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      class_id: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(3)]],
      dob: ['', Validators.required],
      admissionDate: ['', Validators.required],
      admissionFee: ['', [Validators.required, Validators.min(5000)]]
    });

    this.apiService.getAllClassNames().subscribe(res => this.classOptions = res)
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log('✅ Student Payload:', this.studentForm.value);
      const payload = this.studentForm.value;
      this.apiService.createNewStudent(payload).subscribe(res => {
        console.log(res);
        
      })
    } else {
      console.log('❌ Form Invalid');
      this.studentForm.markAllAsTouched();
    }
  }
}
