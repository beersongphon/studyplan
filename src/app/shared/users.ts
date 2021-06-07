export class Users {
  public id_user: number;
  public name: string;
  public email: string;
  public password: string;
  public position: string;


  constructor(id_user: number, name: string, email: string, password: string, position: string) {
    this.id_user = id_user;
    this.name = name;
    this.email = email;
    this.password = password;
    this.position = position;
  }
}
