import { Component } from '@angular/core';
import { UsersListService } from '../../users-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor( private ul : UsersListService, private r:Router){
   
  }
  show=false;
  users=this.ul.user

  navigation(id){
    this.r.navigate(['/user',id]);
  }
}
