import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list: any
  totalProduct: number = 0
  constructor(private service: ProductDataService, private router: Router) { }

  ngOnInit(): void {
    this.getCart()
    this.total()
  }
  getCart() {
    this.service.getCart().subscribe(data => {
      this.list = data
    })
  }
  total() {
    this.totalProduct = 0
    this.service.getCart().subscribe(data => {
      data.forEach((element: any) => {
        this.totalProduct += (element.price * element.quantity)
      });
    })
  }
  deleteCart(id: any) {
    this.service.removeCart(id).subscribe(() => {
      this.service.getCart().subscribe(data => {
        this.list = data
      })
    })
  }
  ok() {
    if (this.totalProduct == 0) {
      alert('Không có sản phẩm trong giỏ hàng')

    } else {
      this.list.forEach((data: any) => {
        alert('Đặt hàng thành công')
        this.service.removeCart(data.id).subscribe((data) => {
          this.router.navigate(['/'])
        })
      })
    }
  }
}
