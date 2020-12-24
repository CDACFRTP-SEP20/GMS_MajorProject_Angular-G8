export class Departmenthead {
    name?: string
    email?: string 
    phone?: string 
    departmentName?: string
    username?: string 
    password?: string 
    deptHeadId?: string

    constructor(name?: string, email?: string, phone?: string, departmentName?: string, username?: string, password?: string ,deptHeadId?: string){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.departmentName=departmentName;
        this.username=username;
        this.password=password;
        this.deptHeadId=deptHeadId;
    }

}
