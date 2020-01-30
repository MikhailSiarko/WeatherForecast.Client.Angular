export class UserModel {
  id: number;
  login: string;
}

export class AuthenticationModel {
  token: string;
  user: UserModel;
}
