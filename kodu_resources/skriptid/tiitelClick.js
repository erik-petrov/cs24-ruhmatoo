// Skripti kirjutas HENRI KIVI
// Teeme kindlaks, et veebi leht on enne jõudnud tiitli ära laadida
document.addEventListener('DOMContentLoaded', () => {
    // valime selle pildi
    const titleImage = document.querySelector('.tiitliPilt img');

    // funktsioon et kahe väärtuse vahel suvaline väärtus võtta, kasutame seda click'i animatsiooni jaoks
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Ootame kui selle peale klikkitaks
    titleImage.addEventListener('click', () => {
        // Lisame "clicked" klassi, et eelnev animatsioon lõpetada
        titleImage.classList.add('clicked');
        const rotate = getRandom(-2, 2); // suvaline keerutus -2 ja 2 kraadi vahel
        const scale = getRandom(1, 1.1); // suvaline suurus tavalise ja 1.1x vahel

        // lisame arvutatud transformatsioonid pildile
        titleImage.style.transform = ` rotate(${rotate}deg) scale(${scale})`;

        // Paneme animatsioonid tagasi pärast 100ms
        setTimeout(() => {
            titleImage.classList.remove('clicked');
        }, 200);
    });
});