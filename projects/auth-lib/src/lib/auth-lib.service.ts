import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  userName: string = null;

  constructor() { }

  login(userName: string, password: string): void {
    this.userName = userName;
  }

  logout(): void {
    this.userName = null;
  }
  
}
