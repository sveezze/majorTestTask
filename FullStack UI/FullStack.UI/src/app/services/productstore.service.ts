import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getProductsInfo(): Observable<[]> {
    return this.http.get<[]>(this.baseApiUrl + '/api/ProductStore/GetProducts');
  }
}
