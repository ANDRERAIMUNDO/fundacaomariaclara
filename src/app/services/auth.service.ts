import { Injectable } from '@angular/core';
import { CredentiaisDTO } from '../models/CredentiaisDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authetocation (obj: CredentiaisDTO){
    return obj;
  }
}
