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

function checkAndSendEmail() {
    const now = new Date();
    const targetHour = 14; // Aika, jolloin sähköposti lähetetään (12:00)

    // Tarkista, onko nykyinen aika klo 12:00
    if (now.getHours() === targetHour && now.getMinutes() === 0) {
        sendEmail();
    }
}

function sendEmail() {


    const link1Count = getClickCount('Ilo.html');
    const link2Count = getClickCount('JuuJaa.html');
    const link3Count = getClickCount('Suru.html');

    const emailData = {
        link1_count: link1Count,
        link2_count: link2Count,
        link3_count: link3Count,
    }

    const serviceID = 'default_service';
    const templateID = 'template_r263zqt';

    emailjs.send(serviceID,templateID, emailData);
}

function startEmailScheduler() {
    // Tarkista heti, että jos sivu ladataan juuri oikeaan aikaan
    checkAndSendEmail();

    // Aseta ajastin tarkistamaan joka minuutti (60000ms = 1 minuutti)
    setInterval(checkAndSendEmail, 60000); // Tarkistaa joka minuutti
}

window.onload = function() {
    scheduleDailyEmail();
};