<<<<<<< HEAD
=======

>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
export class User {
  public id: number = 0;
  public userId: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public userName: string = '';
  public email: string = '';
  public logInDateDisplay: Date = new Date();
  public joinDate: Date = new Date();
  public profileImageUrl: string = '';
  public active: boolean = false;
  public notLocked: boolean = false;
  public role: string = '';
<<<<<<< HEAD
  public authorities: [] = [];
  
    constructor (){
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.active = false;
        this.notLocked = false;
        this.role = '';
        this.authorities = [];
    }
}
=======
  public authorities: string[] = [];

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
>>>>>>> ade89ae9f7018bacc1d4125b69fa3224a5a44422
