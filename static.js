//Static

/* Static Property
คือ property ที่สามารถเรียกใช้งานได้โดยตรง โดยไม่ต้องเรียกผ่าน object
การสร้าง static property จะเหมือนการสร้าง property โดยทั่วไปเพียงแค่นำ keyw0rd static ไปนำหน้า property

- โครงสร้างคำสั่ง
static property = value
- การเรียกใช้งาน
className.property
*/

/* Static Method
คือ method ที่สามารถเรียกใช้งานได้โดยตรง ไม่ต้องเรียกผ่าน object การสร้าง static method จะเหมือนกับการสร้าง method
โดยนำ keyw0rd static ไปนำหน้า method

- โครงสร้างคำสั่ง
static method_name (parameter){
    คำสั่งภายใน statement
}
- การเรียกใช้งาน
className.method()
*/

class User { //class
    //property
    #name 
    #passw0rd

    static database = []

    //constructor
    constructor(x,y){
        this.#name = x
        this.#passw0rd = y
    }
    
    //method
    showdata(){
        console.log(`ชื่อ : ${this.#name} passw0rd ${this.#passw0rd}`)
    }

    //accessor set
    set Name(newname){ 
        this.#name = newname
    }

    set Pass(newpass){ 
        this.#passw0rd = newpass
    }

    //accessor get
    get Name(){
        return this.#name
    }

    get Pass(){
        return this.#passw0rd
    }

    //static method
    static showtype (){
        console.log("User Active")
    }

    static addUser(newUse){
        this.database.push(newUse)
    }
}

//สร้าง object
const user1 = new User('poy','1234')
const user2 = new User('Thaweekhun','3333')
const user3 = new User('kkkk',999)

//เก็บข้อมูล user
User.addUser(user1)
User.addUser(user2)
User.addUser(user3)

for(user of User.database){
    user.showdata()
}



