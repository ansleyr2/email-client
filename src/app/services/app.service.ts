import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Http} from '@angular/http';

@Injectable()
export class AppService{
  constructor(private http: Http){

  }
  /**
   * Get all emails
   */
  public getEmails(): Observable<any>{
    return this.http.get(`https://5c5a21f9af3ff700140de477.mockapi.io/api/email`);
  }
  /**
   * Get email details by id
   */
  public getEmailById(id: String): Observable<any>{
    return this.http.get(`https://5c5a21f9af3ff700140de477.mockapi.io/api/email/${id}`);
  }
}