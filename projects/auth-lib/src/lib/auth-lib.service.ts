import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private userName: string;

  public get user(): string {
    return this.userName;
  }

  constructor() { }

  public login(userName: string, password: string): void {
    this.userName = userName;
  }

}
