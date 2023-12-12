import { Component } from '@angular/core';
import { ProductListService } from '../../product-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private ps:ProductListService,private route: ActivatedRoute){ }
  products=[];
  

  ngOnInit():void{
    this.route.queryParamMap.subscribe(
      (qparams)=>{
        let categ= qparams.get('category')
        if(categ){
          this.products =this.ps.products.filter((p)=>{
            return p.category==categ})}
            else{
              this.products=this.ps.products
            }
          })


        }
        
      }
    
  

