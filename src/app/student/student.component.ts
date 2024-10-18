import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  obj: any;

  @Output() onAdd = new EventEmitter();


  userForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
    address: new FormControl('')
  });

  onSubmit() {
    this.obj = this.userForm.value;
    this.onAdd.emit(this.obj);
    console.log(this.userForm.value)
    this.userForm.reset();
  }

}
