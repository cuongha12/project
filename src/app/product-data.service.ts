import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const APi = ' http://localhost:3000/producthome';
const API_form = ' http://localhost:3000/form'
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
}

