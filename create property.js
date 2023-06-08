//create property

//การเรียกใช้งาน property
//เรียกใช้งานภายใน class this.(ชื่อ property)
//เรียกใช้งานนอก class (ชื่อ object).(ชื่อ property)

class User{ //class
    //property
    name="POY"
    password=1234
}

const member = new User(); //object
member.name = "JOJO" //เปลี่ยนแปลงข้อมูล property ภายใน class
console.log(member.name)
console.log(member.password)



const member1 = new User(); //object
console.log(member1.name)
console.log(member1.password)