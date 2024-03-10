import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductsToBuyModel } from '../model/productsToBuyModel';
import { RequestMadeModel } from '../model/requestMadeModel';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetProductsWithSale(): Observable<[]> {
    return this.http.get<[]>(this.baseApiUrl + '/api/ProductStore/GetProductsWithSale');
  }
  GetProductsToBuy(): Observable<[ProductsToBuyModel]>{
    return this.http.get<[ProductsToBuyModel]>(this.baseApiUrl + '/api/ProductStore/GetProductsToBuy');
  }
  GetRequestProducts(): Observable<[RequestMadeModel]>{
    return this.http.get<[RequestMadeModel]>(this.baseApiUrl + '/api/ProductStore/GetRequestProducts');
  }
}
