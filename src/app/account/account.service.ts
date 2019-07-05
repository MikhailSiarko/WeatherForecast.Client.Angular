import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../api-urls.service';
import { Router } from '@angular/router';


export class AccountService {

  constructor(private http: HttpClient, private apiUrlsService: ApiUrlsService, private router: Router) { }

  login(login: string, password: string) {
    this.http.post(this.apiUrlsService.login, {login, password}).subscribe((data: any) => {
      sessionStorage.setItem('auth_token', data.token);
      this.router.navigate(['forecast']);
    },
    error => console.error(error));
  }

  register(login: string, password: string, confirmPassword: string) {
    this.http.post(this.apiUrlsService.register, {login, password, confirmPassword}).subscribe((data: any) => {
      sessionStorage.setItem('auth_token', data.token);
      this.router.navigate(['forecast']);
    },
    error => console.error(error));
  }
}
