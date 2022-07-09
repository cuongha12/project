import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-acces',
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.css']
})
export class AccesComponent implements OnInit {
  list:any=[]
  constructor(private productService :ProductDataService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.list = data.filter((e:any)=>{
         return e.itemacc
      })
   })
  }

}
