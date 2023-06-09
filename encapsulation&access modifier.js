/*Encapsulation เป็นกระบวนการซ่อนรายละเอียดการทำงานและข้อมูลไว้ภายใน ไม่ให้สามาถมองเห็นและเปลี่ยนแปลงข้อมูลภายในได้
- สามารถสร้างความปลอดภัยให้แก่ข้อมูล เนื่องจากข้อมูลจะสามารถเข้าถึงจากผู้มีสิทธิ์เท่านั้น

access modifier ระดับในการเข้าถึง class,property,method etc. ในภาษาเชิงวัตถุ

private = # สามารถเข้าถึงข้อมูลได้เฉพาะใน class

*/

class User{ //class

    name="" //property
    #password=""

    constructor(name,password){ //constructor
        this.name=name
        this.#password=password
    }

    showdata(){ //method
        console.log(`ชื่อผู้ใช้ ${this.name} รหัสผ่าน ${this.#password}`)
    }
}

const member = new User("POY",1223)
member.name = "bug"
member.password = "0000" //รหัสผ่านจะไม่ถูกเปลี่ยนเนื่องจากมีการตั้ง access modifirer ให้เป็นรูปแบบ private
member.showdata(); //เรียกใช้งาน method ภายนอก class





