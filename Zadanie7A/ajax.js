// tablica 3 ostatnich newsów
const news = [];

async function getData() {

    // pobiera dane z Szuflandii i czeka az cały się załaduje
    const response = await fetch("http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php");

    // parsuje dane do JSON i czeka az się wykona
    const data = await response.json();

    // Dodaje 3 najnowsze newsy
    if (news.length < 3) {
        news.push(data.news);
    } else {
        news.shift();
        news.push(data.news);
    }
    console.log(news)

    // Wyświetla nagłowki tabeli 
    const headRow = document.getElementById("headRow");
    headRow.innerHTML = '';
    const keys = Object.keys(data.stock);
    for (let i = 0; i < keys.length; i++) {
        headRow.innerHTML += `<th>${keys[i]}</th>`;
    };

    // Wyświetla dane tabeli
    const bodyRow = document.getElementById("bodyRow");
    bodyRow.innerHTML = '';
    for (let i = 0; i < keys.length; i++) {
        bodyRow.innerHTML += `<td>${data.stock[keys[i]]}</td>`;
    };

    // Wyświetla rotator z 3 newsami 
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.innerHTML = '';
    news.forEach(element => {
        carouselInner.innerHTML += `<div class="carousel-item">
                <p class="d-block w-100 text-center text-warning display-5">${element}</p>
              </div>`;
    });

    // dodaje class 'active' do pierwszego carousel-item
    const carouselItems = carouselInner.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Ustawia cykliczne wywołanie funkcji
setInterval(getData, 3000);