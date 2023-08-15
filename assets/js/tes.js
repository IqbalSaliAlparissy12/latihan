
const data = [1,2,3,4,5,6]
console.log(data[3])

const students = ["student1", "student2", "student3"];
let students2 = [];
let student1;
students.forEach((item, index) => {
    students2.push(item + " Ini Sekolah 2");
    // harus memasukan argument seperti apa? nilanya student1 untuk variable student2
    if(index=== 0){
         student1 = item + " Ini Sekolah 2";
    }
});

console.log(student1);