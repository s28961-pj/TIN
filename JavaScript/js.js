function zadanie1(...arr) {
    /* Napisz funkcję, sprawdzającą, czy dane trzy liczby tworzą
    „trójkę pitagorejską” (uwaga – liczby nie muszą być podane w
    kolejności rosnącej). */
    
    if (arr.length != 3) {
        console.log("Zła ilość argumentów.");
        return;
    }

    arr.sort(function (a, b) { return a - b });

    if (Math.pow(arr[0], 2) + Math.pow(arr[1], 2) == Math.pow(arr[2], 2)) {
        console.log(`Liczby ${arr[0]}, ${arr[1]} i ${arr[2]} tworzą Trójkę Pitagorejską.`);
    } else {
        console.log(`Liczby ${arr[0]}, ${arr[1]} i ${arr[2]} NIE tworzą Trójki Pitagorejskiej.`);
    }
}

function zadanie2(...params) {
    /* Napisz funkcję wypisującą wszystkie liczby z przedziału a-b,
    podzielne przez c. */

    if (params.length != 3) {
        console.log("Zła ilość argumentów.");
        return;
    }
    const arr = [];
    
    for (let i = params[0]; i <= params[1]; i++) {
        arr.push(i);
    }

    arr.forEach(element => {
        if (element % params[2] == 0) {
            console.log(element);
        }
    });

}

function zadanie3(count) {
    /* Napisz funkcję wypisującą w konsoli tabliczkę mnożenia o
    boku podanym jako parametr */

    if ((count == undefined)) {
        console.log("Zła ilość argumentów");
        return;
    }

    let result = '\n';
    for (var i = 1; i <= count; i++) {
        for (let j = 1; j <= count; j++) {
            result += (i * j) + ' ';
        }
        result += '\n'
    }
    console.log(result);
}

function zadanie4(lengthOfFibonacciSequence) {
    /* Napisz funkcję wypisującą w konsoli ciąg Fibonacciego o długości podanej jako parametr. */

    if (lengthOfFibonacciSequence == undefined) {
        console.log("Brak argumentu");
        return;
    }

    let arr = [0, 1];

    for (let i = 2; i < lengthOfFibonacciSequence; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    let result = arr.toString();

    for (let i = 0; i < lengthOfFibonacciSequence; i++) {
        result = result.replace(",", "")
    }

    console.log(result);
}

function zadanie5(height) {
    /* Napisz funkcję rysującą choinkę o podanej wysokości. */

    if (height == undefined) {
        console.log("Brak argumentu")
        return;
    }

    let result = "";

    for (let i = 1; i <= height; i++) {
        for (let j = 0; j < i; j++) {
            result += "*";
        }
        result += "\n";
    }

    console.log(result);
}

function zadanie6(height) {

    // !! DOKOŃCZ !!

    /* Napisz funkcję rysującą „choinkę nocą” o podanej wysokości (szerokość jest tu nieco większa niż wysokość).
    > choinkaNoca(6);
    *********
    **** ****
    ***   ***
    **     **
    *       *
    ********* */

    if (height == undefined) {
        console.log("Brak argumentu");
        return;
    }

    let result = "";

    for (let i = height; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            result += '*';
        }
        result += '\n';
    }

    console.log(result);
}

function zadanie7(shape, ...params) {
    /* Napisz funkcję liczącą pole wybranej figury (prostokąt, trapez, równoległobok, trójkąt) z wykorzystaniem instrukcji switch. Każda figura powinna mieć osobną funkcję do liczenia pola. */

    let shapeArea;

    switch (shape) {
        case "prostokat": {
            rectangle(params);
            break;
        }
        case "trapez": {
            trapezium(params);
            break;
        }
        case "rownoleglobok": {
            parallelogram(params);
            break;
        }
        case "trojkat": {
            triangle(params);
            break;
        }
        default:
            console.log("błąd");
    }

    function rectangle(params) {
        if (params.length != 2) {
            console.log("Zła ilość argumentów");
            return;
        }
        shapeArea = params[0] * params[1];
        console.log(`Pole prostokąta o wymiarach ${params[0]} * ${params[1]} = ${shapeArea}`);
    }

    function trapezium(params) {
        if (params.length != 3) {
            console.log("Zła ilość argumentów");
            return;
        }
        shapeArea = ((params[0] + params[1]) * params[2]) / 2;
        console.log(`"Pole trapezu (${params[0]} + ${params[1]}) * ${params[2]} / 2 = ${shapeArea}`);
    }

    function parallelogram(params) {
        if (params.length != 2) {
            console.log("Zła ilość argumentów");
            return;
        }
        shapeArea = (params[0] * params[1]) / 2;
        console.log(`Pole rownolegloboku (${params[0]} * ${params[1]}) / 2 = ${shapeArea}`);
    }

    function triangle(params) {
        if (params.length != 2) {
            console.log("Zła ilość argumentów");
            return;
        }
        shapeArea = (params[0] * params[1]) / 2;
        console.log(`Pole trójkąta ${params[0]} * ${params[1]} / 2 = ${shapeArea}`);
    }
}

function zadanie8() {
    /* Napisz funkcję liczącą pole wybranej figury (prostokąt, trapez, równoległobok, trójkąt) bez użycia instrukcji warunkowej (bez if, switch, pętli). Wykorzystaj funkcje anonimowe i callback. */

}