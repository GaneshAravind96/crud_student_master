import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  users: any[] = []; 
  searchTerm: string = ''; 
  constructor(private service: UserService) {}

  
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
    this.service.postUser(event).subscribe(data => this.getData())
  }

  remove(index: number) {
    this.users.splice(index, 1); 
  }
}
