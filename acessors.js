/*
Acessors คำสั่งที่ช่วยในการจัดการ property โดยสามารถกำหนดได้ว่าต้องการทำงานกับ property ใด
มีองค์ประกอบสองส่วน 
- get ตัวช่วยสำหรับเรียกดูข้อมูลใน property
- set ตัวช่วยสำหรับกำหนดหรือเขียนข้อมูลใน property

*/

class User{ 

    #name="" 
    #password=""

    constructor(name,password){ 
        this.#name=name
        this.#password=password
    }

    showdata(){ 
        console.log(`ชื่อผู้ใช้ ${this.#name} รหัสผ่าน ${this.#password}`)
    }

    set Name(newname){ //set
        this.#name = newname
    }

    get Name(){  //get
        return this.#name
    }
}

const member = new User("Avatar",1223)
member.Name = "kahood" //กำหนดค่า property ใหม่ผ่าน get
console.log(member.Name) //เรียกดูข้อมูล







