import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Email } from '../model/Email.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'email-view',
  templateUrl: './email-view.component.html',
  styleUrls: ['./email-view.component.css'],
  providers: [AppService]
})
export class ViewEmailComponent implements OnInit {
  public email: Email = {
    id: 0,
    from: "",
    to: "",
    subject: "",
    text: "",
    read: false,
    received: ""
  };
  // Decider flag for showing view or create mode.
  public createEmail: boolean =false;

  constructor(public service: AppService, public route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // If we have an id, show the view mode.
      if(params["id"] ){
        this.createEmail = false;
        this.getEmailData(params["id"]);
      }else{
        // No id, create mode.
        this.createEmail = true;
      }
      
    });
  }
  /**
   * Get the details for email
   */
  getEmailData(id: String){
    this.service.getEmailById(id).subscribe(data=>{
      this.email = JSON.parse(data._body);
    }, err=>{
      console.log(err);
    });
  }
  /**
   * TO-DO 
   * check for valid data. 
   * Manipualte the id before send, usually auto generated at the back-end.
   */
  sendEmail(email: Email){
    console.log(email);
  }
}