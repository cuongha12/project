import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list:any = [
  
  ]
  constructor(private items:ProductDataService) { }

  ngOnInit(): void {
    this.items.getProducts().subscribe((data:any)=>{
      this.list = data.filter((e:any)=>{
        return e.itemhome
      })
  })
  }

}
