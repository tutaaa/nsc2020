import { Component, OnInit } from '@angular/core';
import {TotalService} from '../total.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private total : TotalService) { }

  ngOnInit() {
  
  }


coffeecount =0
teacount =0
milkcount =0
ricecount =0
totalprice = 0
addcoffee(){
  this.coffeecount+=1;
  this.totalprice +=50
  
 
}
addtea(){
  this.teacount+=1;
  this.totalprice +=40

  
}
addmilk(){
  this.milkcount+=1;
  this.totalprice +=20
  
  
} 
addrice(){
  this.ricecount+=1;
  this.totalprice +=70

}



}
