import { ProductData } from '../Interface/data';
import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  url = "../../assets/mock/data.json";
  constructor(private http: HttpClient) { }

  getProductsData(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>(this.url)
  }
}
