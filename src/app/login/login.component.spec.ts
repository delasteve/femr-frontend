import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('Component: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
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
