// class Student{
//     constructor(nama, kelas, gender){
//         this.nama = nama
//         this.kelas= kelas
//         this.gender = gender
//     }
// }

// const student_func_1 = new Student("Iqbal", "FWA", "L")
// const student_func_2 = new Student("Erina", "FWA", "P")
// const student_func_3 = new Student("Rahmat", "FWA", "L")
// const student_func_4 = new Student("Tia", "FWA", "P")

// console.log(student_func_1);
// console.log(student_func_2);
// console.log(student_func_3);
// console.log(student_func_4);

class Student{
    #nama
    #kelas
    #gender

    constructor(nama, kelas, gender){
        this.nama = nama 
        this.kelas = kelas
        this.gender = gender
    }
    helloSiswa(){
        console.log(`Hallo ${this.nama}, Selamat Malam`)
    }
}
const student_func_1 = new Student("Iqbal", "FWA", "L")
const student_func_2 = new Student("Erina", "FWA", "P")
const student_func_3 = new Student("Rahmat", "FWA", "L")
const student_func_4 = new Student("Tia", "FWA", "P")

console.log(student_func_1);
console.log(student_func_2);
console.log(student_func_3);
console.log(student_func_4);

student_func_1.helloSiswa()
student_func_2.helloSiswa()
student_func_3.helloSiswa()
student_func_4.helloSiswa()