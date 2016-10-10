import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

describe('Component: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        LoginService
      ],
      imports: [
        HttpModule,
        RouterTestingModule,
        ReactiveFormsModule
      ]
    });
  });

  it('should create an instance', () => {
    const loginFixture = TestBed.createComponent(LoginComponent);
    const loginComponent = loginFixture.componentInstance;

    expect(loginComponent).toBeTruthy();
  });
});
