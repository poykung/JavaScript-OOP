/*การสร้าง method การสร้าง method ใน class จะคล้ายกับหลักการสร้าง function
ใน javascript แต่จะมีลักษณะสำคัญ คือ
- ระบุแค่ชื่อ method จะไม่มีคำว่า function นำหน้า
- สามารถกำหนด parametor ได้เหมือนกับ function

การเรียกใช้งาน
- อ้างอิง property หรือ method เดีวงกันใน class โดยใช้ keyword .this
- อ้างอิง property หรือ method นอก class โดยใช้ object name.method name()
*/

class User{
    name=""
    password=""

    constructor(name,password){
        this.name=name
        this.password=password
    }

    //method
    showdata(){
        console.log(`ชื่อผู้ใช้ ${this.name} รหัสผ่าน ${this.password}`)
    }
}

const member = new User("POY",1223)
member.showdata(); //เรียกใช้งาน method ภายนอก class
const member1 = new User("Thaweekhun",21)
member1.showdata();//เรียกใช้งาน method ภายนอก class




