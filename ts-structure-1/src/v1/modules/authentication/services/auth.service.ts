class UserService {
  constructor() {}
  async createUser(user: User) {
    return user;
  }
}

class AuthService {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async signUp(email: string, password: string): Promise<string> {
    const user = await this.userService.createUser({ email, password });

    if (user) {
      return "user created";
    } else {
      return "user not created";
    }
  }

  signIn(user: User) {}
}

export default AuthService;
