async function getData() {

    const news = [];

    function updateNewsSection() {
        const slider = document.getElementById("lightSlider");
        slider.style.width = '100%';
        slider.innerHTML += `<li><h2>${news[0]}</h2></li>`;

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
        const tableBox = document.getElementById("tableBox");
        const keys = Object.keys(data.stock);
        tableBox.innerHTML = '';
        for (let i = 0; i < keys.length; i++) {
            tableBox.innerHTML += `${keys[i]} - ${data.stock[keys[i]]} `;
        }
    }, 3000);
}

getData();