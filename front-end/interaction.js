
const Container = document.getElementById('nav')

const baseUrl = `http://localhost:3000/`

var currentURL = window.location.href;
const pattern = /\/([^/]+)\.html/; // /0\/(\w+)/;
let match = currentURL.match(pattern);
let extractedWord = match[1];
console.log("Extracted word:", extractedWord);

window.onload = load_creatures()
async function load_creatures() {

    let Creature_list = "";
    let Creature_box = "";

    console.log('loaded')


    if (extractedWord == 'creature') {

        match = currentURL.match(/\?name=([^&]+)/);
        console.log("Extracted word:", extractedWord);

        const res = await fetch(baseUrl + `page_load?faction=${match[1]}`, {
            method: 'GET'
        })
        const data = await res.json();
        console.log(data)

        Creature_list = `<p class=\"creature_name\">${data[0].name} </p>` +
            `<div class=\"creature_img_stat\">` +
            `<img class=\"creature_img\" src=\"static/Images/average/${data[0].img}\" alt=\"\">` +
            `<div class=\"stats_little\">` +
            `<img src=\"static/Images/lvlo.png\" alt=\"\" class=\"stat\" id=\"lvlim\">` +
            `<p>${data[0].level}</p>` +
            `<img src=\"static/Images/Gold.gif\" alt=\"\" class=\"stat\" id=\"prcim\">` +
            `<p>${data[0].price}</p>` +
            `<img src=\"static/Images/atck.png\" alt=\"\" class=\"stat\" id=\"prcim\">` +
            `<p>${data[0].attack}</p>` +
            `<img src=\"static/Images/shield.png\" alt=\"\" class=\"stat\" id=\"prcim\">` +
            `<p>${data[0].defence}</p>` +
            `<img src=\"static/Images/hp.png\" alt=\"\" class=\"stat\" id=\"prcim\">` +
            `<p>${data[0].health}</p>` +
            `<img src=\"static/Images/speed.png\" alt=\"\" class=\"stat\" id=\"prcim\">` +
            `<p>${data[0].speed}</p>` +
            `</div>` +
            `<div class=\"building\">` +
            `<p>Recruited in</p>` +
            `<p>${data[0].building}</p> </div>` +
            `</div >` +
            `<div class=\"full_descript\">` +
            `<H2> Description</H2>` +
            `<p>Gnolls are a race of beastmen of the kingdom of Tatalia, the most numerous inhabitants of this` +
            `region, and also, along with lizards, the backbone of its armies. From the ranks of the gnolls,` +
            `excellent military leaders often stand out, some of whom even become heroes in the future. They are` +
            `armed with a flail, protected by a light leather breastplate, and have no other armor. Hired from` +
            `the Gnoll Hut.</p>` +
            `<H2>Tactics</H2>` +
            `<p>Gnolls have decent defense and health, but their attack and speed are quite low, so they perform best` +
            `in defense. In particular, gnolls can provide good cover for archer lizards.</p>` +
            ` </div >`;

    } else {
        const res = await fetch(baseUrl + `page_load?faction=${extractedWord}`, {
            method: 'GET'
        })
        const data = await res.json();
        console.log(data)

        if (extractedWord == 'all_creatures') {

            for (let i = 0; i < data.length; i++) {

                Creature_box = `<div class=\'creature_line\' atk=\'${data[i].attack}\' lvl=\'${data[i].level}\' ` +
                    `hp=\'${data[i].hp}\' frc=\'${data[i].faction}\' def=\'${data[i].defence}\' ` +
                    ` spd=\'${data[i].speed}\' prc=\'${data[i].price}\'>` +
                    `<a href=\'creature.html?name=${data[i].name}\'> <img class=\'small_pic\' ` +
                    `src=\'static/Images/small/${data[i].img}\' id=\'${data[i].faction}\' alt=\'\'></a>` +
                    `<a href=\'creature.html?name=${data[i].name}\'>${data[i].name} - ${data[i].faction} - ${data[i].level} lvl</a> </div>`;
                Creature_list += Creature_box;
            }

        } else {

            for (let i = 0; i < data.length; i++) {

                Creature_box = `<div class=\"creature\" data-sort=\"\">` +
                    `<div class=\"name\"> ${data[i].name}</div>` +
                    `<a href =\"\"><img src=\"static/Images/average/${data[i].img}\" /></a>` +
                    `<ul class=\"description\">` +
                    `<li> <img src=\"static/Images/lvlo.png\" class=\"stat\" id=\"lvlim\">` +
                    `<p class=\"stats\" id=\"lvle\">Level: ${data[i].level}</p> </li >` +
                    `<li><img src=\"static/Images/Gold.gif\" class=\"stat\" id=\"prcim\">` +
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
        }
    }
    Container.innerHTML = Creature_list;
}


