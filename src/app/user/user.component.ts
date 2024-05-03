import { Component, DoCheck, Input, OnChanges, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnChanges,DoCheck {
  @Input('use') userName:string="";
  @Input('name') name:string='';



  constructor() {
    console.log("constructor call")
   }


   ngOnChanges(element:SimpleChanges){
    console.log("ng onchanges")
    console.log(element)
 }

  ngOnInit(): void {
    console.log('ngonint called')
    
  }

   ngDoCheck(): void {
      console.log('ngDocheck called')
   }


  

}
