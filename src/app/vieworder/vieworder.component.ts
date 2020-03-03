import { Component, OnInit } from '@angular/core';
import { Gift } from '../gift';
import { PlaceorderService } from '../services/placeorder.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
list:Gift[];
  constructor(private service:PlaceorderService) {
this.service.getorderDetail().subscribe(res=>{
  this.list=res;
  console.log(this.list);
})


    
   }

  ngOnInit() {
  }

}
