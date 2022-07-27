import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
import { Cart } from '../../class/cart';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: any = {};
  product = new Cart()
  index: any
  quantily: any
  constructor(private service: ProductDataService, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = this.actRouter.snapshot.params['id']
    this.service.getDetailHome(id).subscribe((data) => {
      this.item = data


    })
  }
  addCart() {

    let temp: any = document.getElementById('quantity')
    this.quantily = Number(temp.value)
    this.product.id_product = this.item.id
    this.product.img = this.item.img
    this.product.name = this.item.name
    this.product.price = this.item.price
    this.product.quantity = this.quantily
    this.service.getCart().subscribe(data => {
      this.index = data.find((data: any) => {
        return data.id_product == this.product.id_product
      })
      if (this.index) {
        this.index.quantity += this.quantily
        this.service.putCart(this.index).subscribe(data => {
        })
        alert('cong sp')
      } else {
        this.service.postCart(this.product).subscribe((data) => {
          if (data) {
            alert('Thêm sản phẩm thành công')
          }
        })
      }
    })
  }
  mark(mark: any) {
    let quantily: any = document.getElementById('quantity')
    console.log(quantily)
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
      }
    } else {
      quantily.value = Number(quantily.value) + 1
    }
  }
}
