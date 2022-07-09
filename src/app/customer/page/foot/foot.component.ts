import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  constructor(private productService :ProductDataService) { }
  list:any=[]
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.list = data.filter((e:any)=>{
        return e.itemfoot
      })
    })
  }

}
