import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

  insert (obj: Registro){
    return obj;
  }
}
