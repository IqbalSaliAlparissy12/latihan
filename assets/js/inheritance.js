class Kendaraan {
    constructor(merk, tahunProduksi) {
        this.merk = merk;
        this.tahunProduksi = tahunProduksi;
    }

    hitungUsia() {
        const tahunSekarang = new Date().getFullYear
        return tahunSekarang - this.tahunProduksi;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, tahunProduksi, warna) {
        super(merk, tahunProduksi);
        this.warna = warna;
    }

    infoUsia() {
        const usia = this.hitungUsia();
        console.log(`Mobil ${this.merk} (${this.warna}), usia: ${usia} tahun`);
    }
}

class Motor extends Kendaraan {
    constructor(merk, tahunProduksi, tipe) {
        super(merk, tahunProduksi);
        this.tipe = tipe;
    }

    infoUsia() {
        const usia = this.hitungUsia();
        console.log(`Motor ${this.merk} (${this.tipe}), usia: ${usia} tahun`);
    }
}

const mobilCar = new Mobil("Daihatsu", 2010, "Merah");
const motorCycle = new Motor("Honda", 2021, "Hitam");

console.log(mobilCar)
console.log(motorCycle)
