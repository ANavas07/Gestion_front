import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginAttemptService {

  private maxAttempts=3;
  private  lockoutTime= 30000; //Block time for starting with other attempts

  constructor() { }

  incrementAttempts(): void{
    let attempts = this.getAttempts();
    attempts++;
    localStorage.setItem('loginAttempts', attempts.toString());
    if (attempts >= this.maxAttempts) {
      const lockoutExpiration = Date.now() + this.lockoutTime;
      localStorage.setItem('lockoutExpiration', lockoutExpiration.toString());
      console.log(`Límite de intentos alcanzado. Bloqueando hasta: ${new Date(lockoutExpiration).toLocaleString()}`);
    }
  }

  resetAttempts():void{
    localStorage.removeItem('loginAttempts');
    localStorage.removeItem('lockoutExpiration');
  }

  canAttemptLogin():boolean{
    const lockoutExpiration= this.getLockoutExpiration();
    if (lockoutExpiration && Date.now() < lockoutExpiration){
      return false
    }
    if (lockoutExpiration && Date.now() >= lockoutExpiration) {
      this.resetAttempts(); //Restore attempts if the lock time has passed
    }
    return this.getAttempts() < this.maxAttempts;
  }

  getRemainingAttempts():number{
    return this.maxAttempts- this.getAttempts()
  }

  private getAttempts(): number{
    //Formato en base 10
    return parseInt(localStorage.getItem('loginAttempts') ||'0', 10);
  }

  getLockoutExpiration():number | null{
    const lockoutExpiration=localStorage.getItem('lockoutExpiration');
    return lockoutExpiration ? parseInt(lockoutExpiration,10): null;
  }
}
