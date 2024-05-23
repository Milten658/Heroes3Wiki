const AscBtn = document.getElementById('sort-asc')
const DescBtn = document.getElementById('sort-dasc')
const Creature_Level = document.getElementById('1')

const baseUrl = 'http://localhost:3000/'

AscBtn.addEventListener('click', AscSort)
async function AscSort(e) {
    e.preventDefault()
    console.log('clicked')
    const res = await fetch(baseUrl + 'pair', {
        method: 'GET'
    })
    console.log(res)
    const data = await res.json()
    console.log(data)
    Creature_Level.innerHTML = data.creaure
}

async function DescSort() {

}