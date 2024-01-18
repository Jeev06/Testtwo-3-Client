import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResponse, AuthenticationRequest } from 'src/app/models/user.model';
import { HttpService } from 'src/app/shared/services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpService
  ) { }

  public login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post('user/authenticate', request);
  }

}