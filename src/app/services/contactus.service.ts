import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUs } from '../Models/contact-us';
export const API_URL="http://localhost:3000/contact-us";
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(public http:HttpClient) { }
  addContactDetails(details:ContactUs){
    return this.http.post(API_URL,details);
  }
  getContactDetails():any{
    return this.http.get("API_URL");
    }
}
