//const AscBtn = document.getElementById('sort-asc')
//const DescBtn = document.getElementById('sort-dasc')
//const Creature_Level = document.getElementById('1')
const Container = document.getElementById('nav')

const baseUrl = `http://localhost:3000/`

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
const pattern = /0\/(\w+)/;
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

        const Creature_box = `<div class=\"creature\" data-sort=\"\">` +
            `<div class=\"name\"> ${data[i].name}</div>` +
            `<a href =\"\"><img src=\"static/Images/average/${data[i].img}\" /></a>` +
            `<ul class=\"description\">` +
            `<li> <img src=\"static/Images/lvlo.png\" class=\"stat\" id=\"lvlim\">` +
            `<p class=\"stats\" id=\"lvle\">Level: ${data[i].level}</p> </li >` +
            `<li><img src=\"static/Images/Gold.gif\" class=\"stat\">` +
            `<p class=\"stats\" id=\"prc\">Price: ${data[i].price} gold</p>` +
            `</li>` +
            `<li><img src=\"static/Images/hp.png\" class=\"stat\">` +
            `<p class=\"stats\" id=\"hpe\">HP: ${data[i].health}</p>` +
            `</li>` +
            `<li><img src=\"static/Images/atck.png\" class=\"stat\">` +
            `<p class=\"stats\" id=\"atc\">Atack: ${data[i].attack}</p>` +
            `</li >` +
            `<li><img src=\"static/Images/shield.png\" class=\"stat\">` +
            `<p class=\"stats\" id=\"df\">Defense: ${data[i].defence}</p>` +
            `</li >` +
            `<li><img src=\"static/Images/speed.png\" class=\"stat\">` +
            `<p class=\"stats\" id=\"spd\">Speed: ${data[i].speed}</p>` +
            `</li>  </ul>  </div>`;

        Creature_list += Creature_box;
    }
    Container.innerHTML = Creature_list;
}

