import { Component } from '@angular/core';
import { SmsServiceService } from 'src/app/services/sms-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  data : any = [];

  //  arr : any =["Dashboard" , "Class", " Teachers","Subjects","Student","Reports"]

   constructor(private apiService : SmsServiceService){

   }

   ngOnInit(){
    this.apiService.getMenuItems().subscribe(res => {
      console.log(res);
      this.data = res
    })
    
   }

   sendTitleValue(title:any){
      this.apiService.sendDataToHeader(title)
   }
   
  

    

}
