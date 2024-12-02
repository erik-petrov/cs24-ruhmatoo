//SCRIPT TEGI: ERIK PETROV
fetch("https://api.modrinth.com/v2/projects_random?count=10") // Teeb päringu Modrinthi API-le, et saada 10 juhuslikku projekti
.then((response) => response.json()) // Konverteerib vastuse JSON-iks
.then((json) => {
    var t = document.getElementById("needsChange"); // Leiab elemendi id-ga 'needsChange'
    
    // API tagastab mõnikord ka juhusliku arvu mode...
    t.innerHTML = t.innerHTML.replace("**COUNT**", json.length); // Asendab '**COUNT**' tegeliku modide arvuga

    (function(){
        var ul = document.getElementById("mod_list").getElementsByTagName("ul")[0]; // Leiab esimese <ul> elemendi elemendis id-ga 'mod_list'
    
        json.forEach(renderProductList); // Läbib iga mod-i JSON andmetes ja kutsub funktsiooni renderProductList
    
        function renderProductList(element) {
            var li = document.createElement('li'); // Loob uue <li> elemendi
            li.setAttribute('class','item'); // Määrab <li> klassiks 'item'
            ul.appendChild(li); // Lisab <li> elemendi <ul> sisse

            // Loob vormindatud stringi, mis sisaldab linki mod-i lehele
            let formattedString = `<span><a href='https://modrinth.com/mod/${element["slug"]}' target='_blank'>${element["title"]}</a></span>`;

            li.innerHTML = li.innerHTML + formattedString; // Lisab vormindatud stringi <li> sisu juurde
        }
    })(); // Kutsutakse kohe välja anonüümne funktsioon modide loendi renderdamiseks
});