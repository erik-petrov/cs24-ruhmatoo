// Skripti kirjutas HENRI KIVI
// Valime steve elementi lehelt
const steveGif = document.getElementById("steve");

// funktsioon, et näidata steve'i
function showSteve() {
    steveGif.classList.add("steve-yleval");
    setTimeout(() => {
        steveGif.classList.remove("steve-yleval");
    }, 3000); // Las ta jääb ülesse 3 sekundit
}
setInterval(() => {
    if (Math.random() > 0.7) { // 30% et steve ilmub
        showSteve();
    }
}, 15000); // Kordame võimalust iga 15 sekundi tagant