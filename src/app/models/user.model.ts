
export class AuthenticationRequest {
  public username: string = '';
  public password: string = ''
}

export class User extends AuthenticationRequest {
  public id: number = 0;
  public firstname: string = '';
  public lastname: string = '';
  public phone: string = '';
}

export class AuthenticationResponse {
  public user: User = new User();
  public token: string = '';
}