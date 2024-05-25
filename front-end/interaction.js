//const AscBtn = document.getElementById('sort-asc')
//const DescBtn = document.getElementById('sort-dasc')
//const Creature_Level = document.getElementById('1')
const Container = document.getElementById('nav')

const baseUrl = `http://192.168.1.108:3000/`

// AscBtn.addEventListener('click', AscSort)
// async function AscSort(e) {
//     e.preventDefault()
//     console.log('clicked')
//     const res = await fetch(baseUrl + 'pair', {
//         method: 'GET'
//     })
//     console.log(res)
//     const data = await res.json()
//     console.log(data)
//     Creature_Level.innerHTML = data.creaure
// }

// DescBtn.addEventListener('click', DescSort)
// async function DescSort(e) {
//     e.preventDefault()
//     console.log('clicked')
//     const res = await fetch(baseUrl + 'Inferno', {
//         method: 'GET'
//     })
//     console.log(res)
//     const data = await res.json()
//     console.log(data)
//     Creature_Level.innerHTML = data.level

// }
var currentURL = window.location.href;
const pattern = /:3000\/(\w+)/;
const match = currentURL.match(pattern);
const extractedWord = match[1];
console.log("Extracted word:", extractedWord);

window.onload = load_creatures()
async function load_creatures() {

    let Creature_list = "";

    console.log('loaded')
    const res = await fetch(baseUrl + `faction_page_load?faction=${extractedWord}`, {
        method: 'GET'
    })
    const data = await res.json();
    console.log(data)



    for (let i = 0; i < data.length; i++) {

        const Creature_box = `<div class=\"creature\" data-sort=\"4\">` +
            `<div class=\"name\"> ${data[i].name}</div>` +
            `<a href=\"\"><img src=\"static/Images/angel.jpg\" alt=\"\" /></a>` +
            `<p class=\"castle\">Faction: ${data[i].faction_name} </p>` +
            `<p class=\"level\">Level: ${data[i].level} </p>` +
            `<p class=\"atack\">Atack: ${data[i].attack} </p>` +
            `<p class=\"def\">defense: ${data[i].defence} </p>` +
            `<p class=\"hp\">HP: ${data[i].health} </p>` +
            `</div>`;

        Creature_list += Creature_box;
    }


    Container.innerHTML = Creature_list;

}