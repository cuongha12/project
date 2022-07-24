import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list: any;
  keyword: any
  constructor(private service:ProductDataService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data => {
      this.list = data
    })
  }
  deleteStudent(id: any) {
    if (confirm('Are you delete ?')) {
      this.service.deleteProduct(id).subscribe(() => {
        this.service.getProducts().subscribe(data => {
          this.list = data
        })
      })
    }
  }
}
