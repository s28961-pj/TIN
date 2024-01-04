function zadanie1() {
    const container = document.getElementById("container");
    const firstButton = document.getElementById("firstButton");
    const secondButton = document.getElementById("secondButton");
    const thirdButton = document.getElementById("thirdButton");
    const fourthButton = document.getElementById("fourthButton");

    firstButton.addEventListener('click', addDiv);

    function addDiv() {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "item");
        container.append(newDiv);
    }

    secondButton.addEventListener('click', removeFirst);

    function removeFirst() {

        if (container.hasChildNodes()) {
            container.removeChild(container.children[0]);
        }
    }

    thirdButton.addEventListener('click', changeColor);

    function changeColor() {
        const thirdDiv = container.children[2];
        thirdDiv.setAttribute("style", "background-color: red");
    }

    fourthButton.addEventListener('click', addText);

    function addText() {
        const listOfDivs = container.children;
        for (let i = 0; i < listOfDivs.length; i++) {
            listOfDivs[i].innerText = "nowy tekst";
        }
    }
}

zadanie1();

function zadanie2() {

    // łączenie DOM
    const firstInput = document.getElementById("firstInput");
    const secondInput = document.getElementById("secondInput");
    const resultDiv = document.getElementById("result");
    const select = document.getElementById("select");
    const calculateButton = document.getElementById("calculateButton");


    calculateButton.addEventListener('click', calculateResult);


    function calculateResult() {

        // INPUT 
        const firstValue = parseInt(firstInput.value);
        const secondValue = parseInt(secondInput.value);
        const selectedOption = select.selectedIndex;

        // FUNCTIONS
        const addiction = () => firstValue + secondValue;
        const subtraction = () => firstValue - secondValue;
        const multiplication = () => firstValue * secondValue;
        const division = function () {
            if (secondValue == 0) {
                alert("Division by 0!")
                return "0";
            }
            return firstValue / secondValue;
        }

        // OPTIONS
        switch (selectedOption) {
            case 0: {
                resultDiv.innerHTML = addiction();
                break;
            }
            case 1: {
                resultDiv.innerHTML = subtraction();
                break;
            }
            case 2: {
                resultDiv.innerHTML = multiplication();
                break;
            }
            case 3: {
                resultDiv.innerHTML = division();
                break;
            }
        }
    }

}

zadanie2();

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

function zadanie3() {

    const opel = new Auto(2008, 275000, 16000, 16000);
    const mazda = new Auto(2018, 54000, 160000, 160000);
    const peugeot = new Auto(2020, 180000, 230000, 230000);
    const ford = new Auto(2002, 372000, 4500, 4500);
    const volkswagen = new Auto(1997, 420000, 10000, 10000);

    let arr = [opel, mazda, peugeot, ford, volkswagen];

    const carsTable = document.getElementById("carsTable");
    carsTable.innerHTML += "<table id='table'>";

    const table = document.getElementById("table");

    table.innerHTML +=
        `<thead>
        <th>Rok</th>
        <th>Przebieg</th>
        <th>Cena wyjściowa</th>
        <th>Cena końcowa</th>
    </thead>`;

    table.innerHTML += `<tbody id="tbody"></tbody>`;

    const tbody = document.getElementById("tbody");

    arr.forEach(element => {
        tbody.innerHTML +=
            `<tr>
            <td>${element.rok}</td>
            <td>${element.przebieg}</td>
            <td>${element.cena_wyjsciowa}</td>
            <td>${element.cena_koncowa}</td>
        </tr>`
    });

    carsTable.innerHTML += "</table>"

}
zadanie3();

function zadanie5() {
    const accordionList = document.querySelectorAll(".accordion");

    accordionList.forEach(element => {
        element.addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

            /* Animation */
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

            // Close other accordion panels
            accordionList.forEach(otherElement => {
                if (otherElement !== element) {
                    otherElement.classList.remove("active");

                    let otherPanel = otherElement.nextElementSibling;
                    otherPanel.style.display = "none";
                    otherPanel.style.maxHeight = null;
                }
            });
        });
    })
}
zadanie5();

/* Zadanie 6 */

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;

    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}