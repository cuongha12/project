import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
})
export class ManComponent implements OnInit {
  list:any=[]
  constructor(private productService :ProductDataService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.list = data.filter((e:any)=>{
         return e.itemman
      })
   })
  }

}
