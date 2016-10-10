import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { LoginService } from './login.service';

describe('Service: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        LoginService
      ]
    });
  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
