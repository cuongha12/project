import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './customer/class/cart';
import { Observable } from 'rxjs';
const APi = ' http://localhost:3000/producthome';
const API_form = ' http://localhost:3000/form';
const url = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})

export class ProductDataService {

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<any>(`${APi}`)
  }
  getDetailHome(id: number) {
    return this.http.get<any>(`${APi}/${id}`)
  }
  createForm(data: any) {
    return this.http.post<any>(`${API_form}`, data);
  }
  deleteProduct(id: any) {
    return this.http.delete<any>(`${APi}/${id}`)
  }
  putProduct(data: any, id: any) {
    return this.http.put<any>(`${APi}/${id}`, data)
  }
  postProduct(data: any) {
    return this.http.post<any>(`${APi}`, data)
  }
  //Cart
  postCart(data:Cart):Observable<Cart>{
    return this.http.post<Cart>(`${url}/cart`,data)
  }
  putCart(data:Cart):Observable<Cart>{
    return this.http.put<Cart>(`${url}/cart/${data.id}`,data)
  }
  getCart():Observable<any>{  
    return this.http.get<any>(`${url}/cart`)
  }
  removeCart(id:number):Observable<any>{{
    return this.http.delete<any>(`${url}/cart/${id}`)
  }}
}

