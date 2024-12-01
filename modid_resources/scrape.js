//SCRIPT TEGI: ERIK PETROV
var mods;
fetch("https://api.modrinth.com/v2/projects_random?count=10")
.then((response) => response.json())
.then((json) => {
    var t = document.getElementById("needsChange");
    //for some reason the api returns a random amount of mods as well..
    t.innerHTML = t.innerHTML.replace("**COUNT**", json.length);
    (function(){
        var ul = document.getElementById("mod_list").getElementsByTagName("ul")[0];
    
        json.forEach(renderProductList);
    
        function renderProductList(element) {
            var li = document.createElement('li');
            li.setAttribute('class','item');
            ul.appendChild(li);
    
            let formattedString = `<span><a href='https://modrinth.com/mod/${element["slug"]}' target='_blank'>${element["title"]}</a></span>`;

            li.innerHTML=li.innerHTML + formattedString;
        }
    })();
});

