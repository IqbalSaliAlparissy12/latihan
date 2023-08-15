//membuat object student secara manual menggunakan type data object

let student_1 = {
    name : "Iqbal",
    class : "Fullstack Web Developer",
    gender : "Laki - Laki"
}


let student_2 = {
    name : "erina",
    class : "Fullstack Web Developer",
    gender : "Perempuan"
}


let student_3 = {
    name : "Rahmat",
    class : "Fullstack Web Developer",
    gender : "Laki - Laki"
}

console.log(student_1);
console.log(student_2);
console.log(student_3);

console.log("-----------------------------------------------------------");
function Student(nama, kelas, gender){
    this.nama = nama;
    this.kelas = kelas;
    this.gender = gender
}

const student_func_1 = new Student("Iqbal", "Bahasa Indonesia", "Laki - Laki")
const student_func_2 = new Student("Erina", "Perikanan Pangan", "Perempuan")
const student_func_3 = new Student("Tesla", "Guru", "Laki - Laki")
const student_func_4 = new Student("Rain", "Perjalanan", "Perempuan")

console.log(student_func_1);
console.log(student_func_2);
console.log(student_func_3);
console.log(student_func_4);


function Facil(nama, kelas, gender){
    this.nama = nama;
    this.kelas = kelas;
    this.gender = gender;

    this.helloStudent = (nama, gender) => {
        const title = (gender === "L") ? "Mas " : "Mbak ";
        console.log(`Hallo ${title} ${nama}, Selamat Malam`);
    }
}

const facil_1 = new Facil("Erina", "FWA", "Perempuan")
console.log(facil_1);
facil_1.helloStudent("Iqbal", "L")

