import { Component } from '@angular/core';
import { SmsServiceService } from 'src/app/services/sms-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  className:string = '';
  classData:any = [];
  updatedClassName = '';
  isUpdate:boolean = false
  constructor(private apiService:SmsServiceService, private toastr:ToastrService){}

  ngOnInit(){
    // this.apiService.getAllClassNames().subscribe(res => this.classData = res)
    this.fetchAllClassData()
  }

  fetchAllClassData(){
    this.apiService.getAllClassNames().subscribe(res =>{
     this.classData= res;
      this.classData.forEach((elem:any) => {
        elem.isUpdate = false
      });
    })
  }
  submitClassName(){
    const payload = {
      "class_name":this.className
    }
    this.apiService.createClassName(payload).subscribe((res:any) => {
      console.log(res)
      this.toastr.success('Class added','Success')
      this.fetchAllClassData()
    }
    )
  }
  deleteClass(id:any){
    this.apiService.deleteClassById(id).subscribe((res:any) =>{
      this.toastr.success(res.msg,'Success')
      this.fetchAllClassData()
    })
  }
  updateClassName(id:any,row:any){
   
   
    const payload = {
      class_name:this.updatedClassName
    }
    this.apiService.updateClassById(id,payload).subscribe((res:any)=>{
      this.toastr.success(res.msg,'Success')
      this.fetchAllClassData()
      row.isUpdate = false;
    })
  }
  triggerEdit(row:any){
    row.isUpdate = true
  }
}
