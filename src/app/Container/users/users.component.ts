import { Component } from '@angular/core';
import { UsersListService } from '../../users-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor( private ul : UsersListService){
   
  }
  users=this.ul.user

}
