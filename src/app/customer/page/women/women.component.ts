import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(private productService :ProductDataService) { }
  list:any=[]
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.list = data.filter((e:any)=>{
       return e.itemwomen
      })
   })
  }

}
