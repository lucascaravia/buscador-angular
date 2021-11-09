import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  url: string = environment.url;
  endPoint: string = '';

  constructor(private http: HttpClient) {  }
  
  
  async get(){
    try {
      return await this.http.get(`${this.url}/${this.endPoint}`).toPromise();
    } catch (error) {
      return error;
    }
  }  
  setEndPoint(endpoint: string) {
    this.endPoint = endpoint;
  };  
}