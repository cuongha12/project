import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list: any = []
  binding:any
  keyword:any
  constructor(private productService: ProductDataService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.list = data
    })
  }

}
