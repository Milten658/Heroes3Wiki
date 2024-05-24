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
const pattern = /localhost:3000\/(\w+)/;
const match = currentURL.match(pattern);
const extractedWord = match[1];
console.log("Extracted word:", extractedWord);

window.onload = load_creatures()
async function load_creatures() {

    console.log('loaded')
    const res = await fetch(baseUrl + `load?faction=${extractedWord}`, {
        method: 'GET'
    })
    console.log(res)

}