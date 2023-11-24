function zadanie1(...arr) {
    /* Napisz funkcję, sprawdzającą, czy dane trzy liczby tworzą
    „trójkę pitagorejską” (uwaga – liczby nie muszą być podane w
    kolejności rosnącej). */

    if (arr.length != 3) {
        return "Zła ilość argumentów.";
    }

    arr.sort((a, b) => a - b);

    if (Math.pow(arr[0], 2) + Math.pow(arr[1], 2) == Math.pow(arr[2], 2)) {
        return `Liczby ${arr[0]}, ${arr[1]} i ${arr[2]} tworzą Trójkę Pitagorejską.`;
    } else {
        return `Liczby ${arr[0]}, ${arr[1]} i ${arr[2]} NIE tworzą Trójki Pitagorejskiej.`;
    }
}

function zadanie2(...params) {
    /* Napisz funkcję wypisującą wszystkie liczby z przedziału a-b,
    podzielne przez c. */

    if (params.length != 3) {
        return "Zła ilość argumentów.";
    }
    const arr = [];

    for (let i = params[0]; i <= params[1]; i++) {
        arr.push(i);
    }

    const result = [];

    arr.forEach(element => {
        if (element % params[2] == 0) {
            result.push(element);
        }
    });
    return result;

}

function zadanie3(count) {
    /* Napisz funkcję wypisującą w konsoli tabliczkę mnożenia o
    boku podanym jako parametr */

    if ((count == undefined)) {
        return "Zła ilość argumentów";
    } else {
        let result = '';
        for (let i = 1; i <= count; i++) {
            for (let j = 1; j <= count; j++) {
                result += (i * j) + ' ';
            }
            result += '\n';
        }
        console.log(result);
    }
}

function zadanie4(lengthOfFibonacciSequence) {
    /* Napisz funkcję wypisującą w konsoli ciąg Fibonacciego o długości podanej jako parametr. */

    switch (lengthOfFibonacciSequence) {
        case undefined: {
            return "Brak argumentu";
        }
        case 0: {
            return null;
        }
        case 1: {
            return 0;
        }
        default: {
            let arr = [0, 1];

            for (let i = 2; i < lengthOfFibonacciSequence; i++) {
                arr.push(arr[i - 2] + arr[i - 1]);
            }

            let result = arr.toString();

            // for (let i = 0; i < lengthOfFibonacciSequence; i++) {
            //     result = result.replace(",", "")
            // }

            return result;
        }
    }


}

function zadanie5(height) {
    /* Napisz funkcję rysującą choinkę o podanej wysokości. */

    if (height == undefined) {
        return "Brak argumentu";
    } else if (height == 0) {
        return null;
    } else {
        let result = "";

        for (let i = 1; i <= height; i++) {
            for (let j = 0; j < i; j++) {
                result += "*";
            }
            result += "\n";
        }

        console.log(result);
    }


}

function zadanie6(height) {

    /* Napisz funkcję rysującą „choinkę nocą” o podanej wysokości (szerokość jest tu nieco większa niż wysokość).
    > choinkaNoca(6);
    *********
    **** ****
    ***   ***
    **     **
    *       *
    ********* */

    if (height == undefined) {
        return "Brak argumentu.";
    } else if (height == 0) {
        return null;
    } else {
        let result = "";

        for (let i = 0; i < height; i++) { // wysokość wierszy
            for (let j = i; j < height - 1; j++) {
                result += "*";
            }
            for (let k = 1; k <= i; k++) {
                result += " ";
            }
            for (let l = i + 1; l > 0; l--) {
                result += " ";
            }
            for (let m = height - 1; m > i; m--) {
                result += "*";
            }
            result += '\n';
        }
        console.log(result);
    }


}

function zadanie7(shape, ...params) {
    /* Napisz funkcję liczącą pole wybranej figury (prostokąt, trapez, równoległobok, trójkąt) z wykorzystaniem instrukcji switch. Każda figura powinna mieć osobną funkcję do liczenia pola. */

    let shapeArea;

    switch (shape) {
        case undefined: {
            return "Brak argumentów";
        }
        case "prostokat": {
            return rectangle(params);
        }
        case "trapez": {
            return trapezium(params);
        }
        case "rownoleglobok": {
            return parallelogram(params);
        }
        case "trojkat": {
            return triangle(params);
        }
        default:
            return "Błąd argumentów";
    }

    function rectangle(params) {
        if (params.length != 2) {
            return "Zła ilość argumentów";
        }
        shapeArea = params[0] * params[1];
        return `Pole prostokąta o wymiarach ${params[0]} * ${params[1]} = ${shapeArea}`;
    }

    function trapezium(params) {
        if (params.length != 3) {
            return "Zła ilość argumentów";
        }
        shapeArea = ((params[0] + params[1]) * params[2]) / 2;
        return `"Pole trapezu (${params[0]} + ${params[1]}) * ${params[2]} / 2 = ${shapeArea}`;
    }

    function parallelogram(params) {
        if (params.length != 2) {
            return "Zła ilość argumentów";
        }
        shapeArea = (params[0] * params[1]) / 2;
        return `Pole rownolegloboku (${params[0]} * ${params[1]}) / 2 = ${shapeArea}`;
    }

    function triangle(params) {
        if (params.length != 2) {
            return "Zła ilość argumentów";
        }
        shapeArea = (params[0] * params[1]) / 2;
        return `Pole trójkąta ${params[0]} * ${params[1]} / 2 = ${shapeArea}`;
    }
}

// Zadanie 8
const rectangle = (params) => params[0] * params[1];

const trapezium = (params) => ((params[0] + params[1]) * params[2]) / 2;

const parallelogram = (params) => (params[0] * params[1]) / 2;

const triangle = (params) => (params[0] * params[1]) / 2;


function zadanie8(shape, ...params) {

    /* Napisz funkcję liczącą pole wybranej figury (prostokąt, trapez, równoległobok, trójkąt) bez użycia instrukcji warunkowej (bez if, switch, pętli). Wykorzystaj funkcje anonimowe i callback. */

    return `${shape.name} area = ${shape(params)}`;
}

function zadanie9(height) {

    // !! DOKOŃCZ !!

    /* Napisz funkcję wypisującą w konsoli trójkąt Pascala o wysokości podanej jako parametr. */

    let res = [];

    let output = "";

    if (height == undefined) {
        return "brak argumentu.";
    } else if (height == 0) {
        return null;
    } else {
        for (let i = 0; i < height; i++) {
            res.push(Array(i + 1));
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    res[i][j] = 1;
                    output += " " + res[i][j] + " ";
                } else {
                    res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
                    output += " " + res[i][j] + " ";
                }
            }
            output += '\n';
        }
        console.log(output)
    }
};


function zadanie10(arr, text) {

    // !! DOKOŃCZ !!

    /* Napisz funkcję cenzurującą zdanie. Funkcja ma otrzymać 2 parametry: tablicę niedozwolonych słów oraz zdanie do ocenzurowania. Każde niedozwolone słowo ma zostać zastąpione znakiem *.
    > cenzura([‘Ala’, ‘kot’], ‘Ala ma kota i psa’ );
    * ma *a i psa */

    let result = text;

    console.log(text.includes(arr))
    // arr.forEach(slowo => {
    //     result = text.includes(slowo) ? arr.replace(slowo, '*') : '';
    // });


    //console.log(result);

}