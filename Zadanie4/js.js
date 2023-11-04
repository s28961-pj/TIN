function zadanie1(a, b, c) {
    /* Napisz funkcję, sprawdzającą, czy dane trzy liczby tworzą
    „trójkę pitagorejską” (uwaga – liczby nie muszą być podane w
    kolejności rosnącej). */
    const arr = [a, b, c];
    arr.sort();

    arr.forEach(element => {
        console.log(element);
    });

    if (Math.pow(arr[0],2) + Math.pow(arr[1],2) == Math.pow(arr[2],2)) {
        console.log("Dane liczby tworzą Trójkę Pitagorejską.");
    } else {
        console.log("Dane liczby NIE tworzą Trójki Pitagorejskiej.");
    }
}

function zadanie2(a, b, c) {
    /* Napisz funkcję wypisującą wszystkie liczby z przedziału a-b,
    podzielne przez c. */
    const arr = [];

    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    arr.forEach(element => {
        if (element % c == 0) {
            console.log(element);
        }
    });
    
}

function zadanie3() {
    /* Napisz funkcję wypisującą w konsoli tabliczkę mnożenia o
boku podanym jako parametr */
}