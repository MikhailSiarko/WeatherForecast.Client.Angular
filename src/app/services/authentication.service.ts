import {AuthenticationModel, UserModel} from '../models';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiUrlsService} from '../api-urls.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

export class AuthenticationService {
  private userSubject: BehaviorSubject<UserModel>;
  private userObservable: Observable<UserModel>;
  private tokenSubject: BehaviorSubject<string>;
  private tokenObservable: Observable<string>;

  private authenticate(path: string, data: any) {
    return this.http.post<AuthenticationModel>(path, data).pipe(map(authData => {
      if (authData && authData.user && authData.token) {
        sessionStorage.setItem('user', JSON.stringify(authData.user));
        this.userSubject.next(authData.user);
        sessionStorage.setItem('token', authData.token);
        this.tokenSubject.next(authData.token);
      }
      return authData;
    }));
  }

  constructor(private http: HttpClient, private apiUrlsService: ApiUrlsService, private router: Router) {
    this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(sessionStorage.getItem('user')));
    this.userObservable = this.userSubject.asObservable();
    this.tokenSubject = new BehaviorSubject<string>(sessionStorage.getItem('token'));
    this.tokenObservable = this.tokenSubject.asObservable();
  }

  public get user(): UserModel {
    return this.userSubject.value;
  }

  public get token(): string {
    return this.tokenSubject.value;
  }

  login(login: string, password: string) {
    return this.authenticate(this.apiUrlsService.login, {login, password});
  }

  register(login: string, password: string, confirmPassword: string) {
    return this.authenticate(this.apiUrlsService.register, {login, password, confirmPassword});
  }

  logout() {
    sessionStorage.removeItem('user');
    this.userSubject.next(null);
    sessionStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }
}
