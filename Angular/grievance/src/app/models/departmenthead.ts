export class Departmenthead {
    name?: string
    email?: string 
    phone?: string 
    departmentName?: string
    username?: string 
    password?: string 

    constructor(name?: string, email?: string, phone?: string, departmentName?: string, username?: string, password?: string){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.departmentName=departmentName;
        this.username=username;
        this.password=password;
    }

}
