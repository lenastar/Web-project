export class Client {
  public name: string;
  public phone: string;
  public website: string;
  public email: string;
  public imagePath: string;

  constructor(name: string, phone: string, website: string, email: string, imagePath: string) {
    this.name = name;
    this.phone = phone;
    this.website = website;
    this.email = email;
    this.imagePath = imagePath;
  }
}
