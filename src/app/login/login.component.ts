import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { LoginService } from './login.service';

@Component({
  selector: 'femr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private formBuilder: FormBuilder;
  private loginForm: FormGroup;
  private loginService: LoginService;
  private router: Router;
  public errorMessage: string;

  constructor(formBuilder: FormBuilder, loginService: LoginService, router: Router) {
    this.formBuilder = formBuilder;
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  submitForm() {
    if (!this.loginForm.valid) { return; }

    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (response: Response) => {
          window.sessionStorage.setItem('id_token', response.json().accessToken);
          this.router.navigateByUrl('/');
        },
        (error) => { this.errorMessage = error.json().message; }
      );
  }
}
