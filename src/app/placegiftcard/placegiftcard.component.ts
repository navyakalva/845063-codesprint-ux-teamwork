import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Gift } from '../gift';
import { PlaceorderService } from '../services/placeorder.service';

@Component({
  selector: 'app-placegiftcard',
  templateUrl: './placegiftcard.component.html',
  styleUrls: ['./placegiftcard.component.css']
})
export class PlacegiftcardComponent implements OnInit {
  itemform:FormGroup;
  submitted=false;
  gift:Gift;
  constructor(private builder:FormBuilder,private service:PlaceorderService) { }

  ngOnInit() 
  {
    
    this.itemform=this.builder.group({
      inr:['',Validators.required,Validators],
      paisa:['',[Validators.required,Validators.pattern('^[0-100]+$')]],
      firstname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      lastname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      streetaddress:['',[Validators.required,]],
      city:['',[Validators.required,]],
      state:['',[Validators.required,]],
      country:['',[Validators.required,]],
      pincode:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      bfirstname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      blastname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      phoneno:['',[Validators.required,Validators.pattern('^[6-9][0-9]+$')]],
      emailid:['',[Validators.required,Validators.email]]
      
      });
    
  }
  get f() { return this.itemform.controls; }

  onSubmit() {
   
      this.submitted = true;
      this.gift=new Gift();
      this.gift.bfirstname=this.itemform.value["bfirstname"],
      this.gift.streetaddress=this.itemform.value["streetaddress"],
      this.gift.city=this.itemform.value["city"],
      this.gift.inr=this.itemform.value["inr"],
      this.gift.phoneno=this.itemform.value["phoneno"]
      this.service.addorderdetails(this.gift).subscribe(response=> {
        console.log(this.gift);
          });
          console.log(this.gift);
      
  }
      
  

  onReset() {
      this.submitted = false;
      this.itemform.reset();
  }

}
