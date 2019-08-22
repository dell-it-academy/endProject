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

  getFoaasLink(operation: any, field1: string, field2: string, field3: string){
    let s =  operation.url.split(':');

    if(field1 != '')
      field1 = `${field1}/`

    if(field2 != '')
      field2 = `${field2}/`

    if(field3 != '')
      field3 = `${field3}/`

    return this.http.get(`${this.apiFoaas}${s[0]}${field1}${field2}${field3}`);
  }
}
