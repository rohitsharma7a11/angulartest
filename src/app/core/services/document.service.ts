import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }
  base_url: string = 'http://localhost:3000';
  httpHeaders = new HttpHeaders().set('Content-type', 'application/json')
  
  getById(id: any) {
    return this.http.get(`${this.base_url}/document/${id}`)
  }
  getAll(){
    return this.http.get(`${this.base_url}/document`)

  }
  add(data:any) {
   

    return this.http.post(`${this.base_url}/document`, data)

  }
}
