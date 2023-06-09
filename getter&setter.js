/*
getter , setter method

*/

class User{ //class

    #name="" //property
    #password=""

    constructor(name,password){ //constructor
        this.#name=name
        this.#password=password
    }

    showdata(){ //method
        console.log(`ชื่อผู้ใช้ ${this.#name} รหัสผ่าน ${this.#password}`)
    }

    setname(newname){ //setter
        this.#name = newname
    }

    getname(){ //getter เรียกใช้งานเฉพาะ property ที่ต้องการ
        return this.#name //return ค่าที่ต้องการ
    }
}

const member = new User("POY",1223)
member.setname("Avatar")

console.log(member.getname())







