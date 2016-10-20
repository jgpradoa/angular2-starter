import { Injectable } from '@angular/core';

@Injectable()
export class ForgotPassService {
  success: boolean = false;

  error(email: String): boolean{
    console.log("email: " + email);
    this.success = true;
    return true;
  }
}