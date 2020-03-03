import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gift } from '../gift';
import { Observable } from 'rxjs';


export const url="http://localhost:3000/gift";

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor(private http:HttpClient) { }
  addorderdetails(details:Gift){
    return this.http.post(url,details);
  }
  getorderDetail():Observable<any>{
    return this.http.get(url);
    }
 
}
