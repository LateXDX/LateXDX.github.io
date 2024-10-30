// Hanki nykyinen päivämäärä muodossa YYYY-MM-DD
function getCurrentDate() {
    const date = new Date();
    return date.toISOString().split('T')[0]; // Palauttaa "YYYY-MM-DD"
}

// Alustetaan laskuri
function getClickCount(link) {
    const date = getCurrentDate();
    const count = localStorage.getItem(`${date}_${link}`);
    return count ? parseInt(count) : 0;
}

// Näytetään painamiskerrat
function displayClickCounts() {
    document.getElementById('link1-count').innerText = getClickCount('Ilo.html');
    document.getElementById('link2-count').innerText = getClickCount('JuuJaa.html');
    document.getElementById('link3-count').innerText = getClickCount('Suru.html');
}