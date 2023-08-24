const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        // 1. Tambahkan di constructor untuk set value gender
        this.gender = gender;
    }

    setTitle(title) {
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
        // name nya menjadi contoh, 
        // name = Tuan Jhon
        if (this.gender === "L") {
            this.name = `${title} ${this.name}`
        } else if (this.gender === "P") {
            this.name = `Nyonya ${this.name}`
        }
    }

    static find(name) {
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
        return persons.find((person) => person.name === name);
    }
}

// 3. buat kan 2 object person
// 1 person laki laki
// panggil funsi setTittle dari object person 
// 1 person perempuan
// panggil funsi setTittle dari object person 
const person1 = new Person('John', 'L');
person1.setTitle('Tuan');
persons.push(person1);

const person2 = new Person('Jane', 'P');
person2.setTitle('Nyonya');
persons.push(person2);

// 4. setiap object person nya ditambahkan ke array object persons

// 5. tampilkan object persons.
console.log(persons);

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
const cariPerson = Person.find('Tuan John');
console.log(cariPerson);
