import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsServiceService {

  baseUrl :any = 'http://localhost:9001/api/';

  navDataSubject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }


  getMenuItems(){
    return this.httpClient.get(this.baseUrl+"menu/");
  }

  sendDataToHeader(data:any){
    this.navDataSubject.next(data);
  }

  createClassName(payload:any){
    return this.httpClient.post(this.baseUrl+"classes/",payload)
  }

  getAllClassNames(){
    return this.httpClient.get(this.baseUrl+"classes/")
  }

  deleteClassById(cid:any){
    return this.httpClient.delete(this.baseUrl+"classes/"+cid)
  }

  updateClassById(id:any,payload:any){
    return this.httpClient.put(this.baseUrl+"classes/"+id,payload)
  }

  createNewStudent(payload:any){
    return this.httpClient.post(this.baseUrl+"student/new",payload)
  }

  hireNewTeacher(payload:any){
    return this.httpClient.post(this.baseUrl+"teachers",payload)
  }

  getAllTeachersData(){
    return this.httpClient.get(this.baseUrl+"teachers")
  }
}
