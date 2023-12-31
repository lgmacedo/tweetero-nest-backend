export class User {
  private username: string;
  private avatar: string; // url

  constructor(username: string, avatar: string) {
    this.username = username;
    this.avatar = avatar;
  }

  getUsername() {
    return this.username;
  }

  getAvatar() {
    return this.avatar;
  }
}
