import { Component, OnInit,  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class UsersComponent implements OnInit {
      userList=['prajwal'] ;
      name="prajwal";
      
  constructor() { }

  ngOnInit(): void {
  }
   
  onUserAdded(event:string){
      this.userList.push(event)
  }
   
  onChanged(){
    this.name="Hai raju"
  }
}
