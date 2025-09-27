import { Component } from '@angular/core';
import { SmsServiceService } from 'src/app/services/sms-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerTitle : any = 'Dashboard'

  constructor(private apiService:SmsServiceService){
    this.apiService.navDataSubject.subscribe(res => 
      this.headerTitle= res
    )
  }
  ngOnInit(){
    console.log(window.location.pathname);
    if(window.location.pathname !== '/Dashboard'){
      const title = window.location.pathname.split('/');
      console.log(title);
      this.headerTitle = title[1];
      
    }else{
      this.headerTitle = 'Dashboard'
    }
    
  }
}
