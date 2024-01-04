async function getData() {

    // pobiera dane z Szuflandii i czeka az cały się załaduje
    const response = await fetch("http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php");

    // parsuje dane do JSON i czeka az się wykona
    const data = await response.json();

    const headRow = document.getElementById("headRow");
    const keys = Object.keys(data.stock);
    for (let i = 0; i < keys.length; i++) {
        headRow.innerHTML += `<th>${keys[i]}</th>`;
    }

    const news = [];

    function updateNewsSection() {
        const slider = document.getElementById("lightSlider");
        slider.style.width = '100%';
        if (news[0] != undefined) {
            slider.innerHTML += `<li><h2>${news[0]}</h2></li>`;
        }
        if (slider.children.length > 3) {
            slider.removeChild(slider.children.item(0));
        };
    }

    // Ustawia cykliczne wywołanie funkcji
    setInterval(async () => {

        // pobiera dane z Szuflandii i czeka az cały się załaduje
        const response = await fetch("http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php");

        // parsuje dane do JSON i czeka az się wykona
        const data = await response.json();

        updateNewsSection();


        // Dodaje 3 najnowsze newsy
        if (news.length < 3) {
            news.push(data.news);
        } else {
            news.shift();
            news.push(data.news)
        }

        // Wyświetla kursy akcji

        const bodyRow = document.getElementById("bodyRow");
        bodyRow.innerHTML = '';
        for (let i = 0; i < keys.length; i++) {
            bodyRow.innerHTML += `<td>${data.stock[keys[i]]}</td>`;
        }

    }, 3000);
}

getData();