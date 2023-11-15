import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environnement } from './environnement/environnement';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = environnement.apiUrl;

  constructor(private httpClient:HttpClient) {}
  
  signUp(data: any) {
    return this.httpClient.post(`${this.url}/signup`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
