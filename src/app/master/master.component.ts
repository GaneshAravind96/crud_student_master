import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  users: any[] = []; 
  searchTerm: string = ''; 

  constructor(private service: UserService) {}

  @ViewChild(StudentComponent)
  stuComp!: StudentComponent

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getUser().subscribe((data: any) => {
      this.users = data; 
    }, (error) => {
      console.error('Error fetching users:', error); 
    });
  }

  filteredUsers() {
    if (!this.searchTerm) {
      return this.users; 
    }
    return this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addUser(event:any) {
    this.service.postUser(event).subscribe(data => this.getData());
  }

  remove(index: number) {
    this.users.splice(index, 1); 
  }

  edittUser(user: any, i: number) {
    this.stuComp.userForm.setValue({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      address: user.address  
    });
  }
}
