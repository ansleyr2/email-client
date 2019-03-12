import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Email } from '../model/Email.model';
import { Router } from '@angular/router'; 


@Component({
  selector: 'inbox',
  templateUrl: './inbox-view.component.html',
  styleUrls: ['./inbox-view.component.css'],
  providers: [AppService]
})
export class InboxViewComponent implements OnInit {
  // stores the list of emails.
  public emails: Email[] = [];
  //  stores the emails that should be deleted .
  // array filled after clicking on checkbox against an email.
  public emailsForDelete: Email[]= [];

  constructor(public service: AppService, public router: Router) {

  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    // fetch emails.
    this.service.getEmails().subscribe(data =>{
      this.emails = JSON.parse(data._body);
    }, err=>{
      console.log(err);
    });
  }
  /**
   * show details of the email.
   */
  viewEmail(email: Email){    
    const id = email.id;
    this.router.navigate(['view-email'], 
    { queryParams: { id: id } });
    
  }
  /**
   * Handles the checkBox clicks
   */
  handleSelected(event, email){
    if(event.target.checked){
      // Adding to array when checked.
      this.emailsForDelete.push(email);
    }else{
      // Get the index of the email to remove.
      const index = this.emailsForDelete.findIndex((data)=> data.id === email.id);
      // Remove it from the array .
      this.emailsForDelete.splice(index, 1);
    }
  }

}