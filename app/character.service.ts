import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseService {
  endpoint: string = 'characters';

  getAll(){
    this.setEndPoint(this.endpoint);
    return this.get();
  }

  getSingle(id: any) {

    this.setEndPoint(`${this.endpoint}/${id}`);
    return this.get();

  }
}