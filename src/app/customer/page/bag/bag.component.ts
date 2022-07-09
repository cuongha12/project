import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  constructor(private productService :ProductDataService) { }
  list:any=[]
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.list = data.filter((e:any)=>{
       return e.itembag
      })
   })
  }

}
