import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // userInput:any


     @Output() userAr=new EventEmitter<string>();

     @ViewChild('userInput') userInput?:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onUserAdded(){
    // console.log(input.value)
    // this.userAr.emit(input.value)
    // console.log(this.userInput)
    this.userAr.emit(this.userInput?.nativeElement.value)
  }

}
