import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../account.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  returnUrl: string;
  error = '';
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  private static match(group: FormGroup) {
    const password = group.controls.password.value;
    const confirmPassword = group.controls.confirmPassword.value;
    return password === confirmPassword ? null : { notMatch: true };
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: RegisterComponent.match});
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get controls() { return this.registerForm.controls; }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.loading = false;
      return;
    }

    this.authenticationService.register(this.controls.login.value, this.controls.password.value, this.controls.confirmPassword.value)
      .pipe(first())
      .subscribe(
        () => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
          this.error = error;
        });
  }
}
