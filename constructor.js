//Constructor คือ function พิเศษที่จะถูกเรียกใช้งาน เมื่อสร้าง object และจำทำงานอัตโนมัติในตอนเริ่มต้นเพียงครั้งเดียว

/*โครงสร้าง contructor([parametor]){

}

ประเภทของ constructor
default contructor คือ constructor เริ่มต้นที่มีอยู่ในทุก class
parameterized contructor คือ constructor ที่ส่ง parametor เข้าไปทำงานได้
การแยก property และ parametor ให้มองที่ keyword this. ที่ชี้ไปเป็นหลัก
*/

class User{
    //property
    name = "Avartar"
    password = "0000"

    constructor(fname,pwd){ //parameter constructor
        this.name=fname
        this.password=pwd
    }
}

const member = new User("poy",12349) 
console.log(member.name)
console.log(member.password)


const member1 = new User()
const member2 = new User()


