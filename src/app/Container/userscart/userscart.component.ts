import { Component } from '@angular/core';
import { UsersListService } from '../../users-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userscart',
  templateUrl: './userscart.component.html',
  styleUrl: './userscart.component.css'
})
export class UserscartComponent {
  constructor(private us:UsersListService, private route:ActivatedRoute){}
  curser;
  ngOnInit():void{
    this.route.paramMap.subscribe(
      params=>{
        let userid=+params.get('id');
        this.curser =this.us.user.find(u=>u.id==userid)
      }
    )
  }
 

}
