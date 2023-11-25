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
    powiekszCene() { 
        this.cena_wyjsciowa += 1000;
        console.log("cena wyjsciowa zostala zwiekszona o 1.000");
    }
    obnizCeneZaLata() {
        for (let i = 0; i < this.wiek(); i++) {
            this.cena_koncowa -= 1000;
        }
        console.log("Cena została obniżona o 1.000 zł za każdy rok wieku");
    }
    obnizCeneZaPrzebieg() {
        if (this.przebieg >= 100000) {
            this.cena_koncowa -= 10000;
        }
        console.log("Cena została obniżona o 10.000 zł za każde 100.000 km przebiegu")
    }
    aktualizuj() {
        

    }
};

const mazda = new Auto(2020, 100000, 80000, 80000);
mazda.obnizCeneZaPrzebieg();


class Student {
    constructor(imie, ...parametry) {

    }
    oceny = [];
    sredniaOcen;

}

class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}