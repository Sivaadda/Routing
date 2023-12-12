import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private http:HttpClient){}
data1;
getdata(){
  this.http.get("https://fakestoreapi.com/products").subscribe((data)=>{
    this.data1=data;
    console.log(data);
  }
   
  )
}

}
