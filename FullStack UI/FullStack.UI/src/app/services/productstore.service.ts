import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductsToBuyModel } from '../model/ProductsToBuyModel';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetProductsWithSale(): Observable<[]> {
    return this.http.get<[]>(this.baseApiUrl + '/api/ProductStore/GetProductsWithSale');
  }
  GetBoughtProducts(): Observable<[ProductsToBuyModel]>{
    return this.http.get<[ProductsToBuyModel]>(this.baseApiUrl + '/api/ProductStore/GetBoughtProducts');
  }
}
