class Auto {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }
    wiek() {
        const dzisiaj = new Date();
        return dzisiaj.getFullYear() - this.rok;
    }
    powiekszCene() {    // Metoda, która powiększa cenę wyjściową o 1.000 zł
        this.cena_wyjsciowa += 1000;
        console.log("Cena wyjsciowa zostala zwiekszona o 1.000 zł");
    }
    obnizCeneZaLata() {     // Metoda, która obniża cenę końcową o 1.000 zł za każdy rok wieku auta (względem ceny wyjściowej).
        for (let i = 0; i < this.wiek(); i++) {
            this.cena_koncowa -= 1000;
        }
        console.log(`Cena została obniżona o ${this.wiek()}.000 zł za wiek`);
    }
    obnizCeneZaPrzebieg() {     // Metoda, która obniża cenę końcową o 10.000 zł za każde 100.000km przebiegu auta.
        for (let i = 0; i < Math.floor(this.przebieg / 100000); i++) {
            this.cena_koncowa -= 10000;
        }
        console.log(`Cena została obniżona o ${10 * Math.floor(this.przebieg / 100000)}.000 zł za przebieg`)
    }
    aktualizuj(przebieg, rok) {      // Metoda, która dopisuje do auta podany przebieg i rok (automatycznie przeliczając cenę wg powyższych funkcji).
        this.przebieg = przebieg;
        this.rok = rok;
        this.obnizCeneZaLata();
        this.obnizCeneZaPrzebieg();
    }
};

// TEST
const mazda = new Auto(2020, 350000, 80000, 80000);
//console.log(mazda.aktualizuj(430000, 2018))

const cars = [];

const dodajAuto = function (auto) {      // Funkcja, która dopisze auto do tablicy samochodow, jesli jego cena jest wieksza niz 10000.
    if (auto.cena_koncowa > 10000) {
        cars.push(auto)
        console.log("Auto dodane do tablicy")
    } else "Zbyt niska cena."
}
//dodajAuto(mazda);


const zwiekszRok = function (cars) {      // Funkcja, ktora dla wszystkich aut z tablicy zwieksza rok o 1.
    cars.forEach(element => {
        element.rok++;
        console.log(element.rok)
    });
}
//zwiekszRok(cars);

class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {

    constructor(imie, nazwisko, ...parametry) {     // Konstruktor 
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    tablicaOcen = [];   // pusta tablica ocen

    sredniaOcen() {     // metoda zwracająca średnią ocen
        let result = 0;
        for (let i = 0; i < this.tablicaOcen.length; i++) {
            result += this.tablicaOcen[i].wartosc;
        }
        result /= this.tablicaOcen.length;
        return result;
    };

    hello() {
        console.log(`Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen()}.`);
    }

    set oceny(x) {
        if (x.constructor.name == "Ocena") {
            this.tablicaOcen.push(x);
            this.sredniaOcen();
        }
    }

    get oceny() {
        let result = "";
        for (let i = 0; i < this.tablicaOcen.length; i++) {
            result += `Przedmiot: ${this.tablicaOcen[i].przedmiot} - ${this.tablicaOcen[i].wartosc}. `
        }
        return result;
    }
}
let ocena1 = new Ocena("Matematyka", 4);
let ocena2 = new Ocena("TIN", 2);
let s = new Student("Roland", "Liedtke");

s.oceny = ocena1;
s.oceny = ocena2;
s.hello()

console.log(s.oceny)