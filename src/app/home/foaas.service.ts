import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoaasService {

  apiOperations = 'https://foaas.com/operations';
  apiFoaas = 'https://foaas.com';

  constructor(private http: HttpClient) { }

  getOperations(){
    return this.http.get(this.apiOperations);
  }
}
