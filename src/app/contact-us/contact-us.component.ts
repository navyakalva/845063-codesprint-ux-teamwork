import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ContactUs } from '../Models/contact-us';
import { ContactusService } from '../services/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactusform:FormGroup;
submitted=false;
contactus:ContactUs;
list:ContactUs[];
  constructor(private formbuilder:FormBuilder,private route:Router,private service:ContactusService) { }

  ngOnInit() {
    this.contactusform=this.formbuilder.group({
     name:['',Validators.required],
  comment:['',[Validators.required]],
     
    })
  }
  get f() {return this.contactusform.controls;}
  onSubmit()
  {
  if(this.contactusform.valid){
    this.submitted=true;
    this.contactus=new ContactUs();
    this.contactus.name=this.contactusform.value["name"],
    this.contactus.comment=this.contactusform.value["comment"],
    this.service.addContactDetails(this.contactus).subscribe(response=> {
    console.log(this.contactus);
      });
      console.log(this.contactus);
  }
  }
  onReset()
  {
    this.submitted=false;
    this.contactusform.reset();
  }


  

}
