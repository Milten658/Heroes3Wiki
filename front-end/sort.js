//document.querySelector('.sort_asc').onclick = DescSort

function DescSort() {
  let nav = document.querySelector('#nav');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (+nav.children[i].getAttribute('hp_sort') > +nav.children[j].getAttribute('hp_sort')) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i])
      }
    }
  }
}

//document.querySelector('.sort_desc').onclick = AscSort
function AscSort() {
  let nav = document.querySelector('#nav');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (+nav.children[i].getAttribute('atk') < +nav.children[j].getAttribute('atk')) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i])
      }
    }
  }
}
function insertAfter(First, Second) {
  return Second.parentNode.insertBefore(First, Second.nextSibling)
}
// const sortButton = document.getElementById('sort-fraction');


//necropolis button
let isFiltered = false;

// sortButton.addEventListener('click', () => {
//   if (!isFiltered) {
//     creatures.forEach(creature => {
//       if (creature.dataset.type !== 'Necro' && creature.dataset.type !== 'inferno') {
//         creature.style.display = 'none';
//       }
//     });
//     isFiltered = true;
//   } else {
//     creatures.forEach(creature => {
//       creature.style.display = 'block';
//     });
//     isFiltered = false;
//   }
// });
function sortCreatures(data, selectedLevel) {
  // Convert selected level to integer (assuming numeric after underscore)
  const level = parseInt(selectedLevel.split('_')[1], 10);

  return data.sort((creatureA, creatureB) => {
    const creatureALevel = parseInt(creatureA.dataset.sort, 10);
    const creatureBLevel = parseInt(creatureB.dataset.sort, 10);

    // Sort by level ascending, then by name alphabetically
    if (creatureALevel !== creatureBLevel) {
      return creatureALevel - creatureBLevel; // Sort by level
    } else {
      return creatureA.querySelector('.name').textContent.localeCompare(creatureB.querySelector('.name').textContent); // Sort by name within same level
    }
  });
}




//const ch_1 = document.getElementById('level_1_check'); //document.querySelector('input [class="fake"] [type="checkbox"] [name="level_1"]')
const sort_function = document.getElementsByClassName('sort_asc');

function FactiontoIndex(faction) {
  switch (faction) {
    case 'Necropolis':
      return 0;
    case 'Inferno':
      return 1;
    case 'Stronghold':
      return 2;
    case 'Castle':
      return 3;
    case 'Rampart':
      return 4;
    case 'Dungeon':
      return 5;
    case 'Fortress':
      return 6;
    case 'Conflux':
      return 7;
    case 'Tower':
      return 8;
    default:
      break;
  }
}

document.querySelector('.sort_asc').onclick = sort;

function sort() {

  const creatures = document.getElementsByClassName('creature_line');

  var lvl_box = [document.getElementById('level_1_check').checked,
  document.getElementById('level_2_check').checked,
  document.getElementById('level_3_check').checked,
  document.getElementById('level_4_check').checked,
  document.getElementById('level_5_check').checked,
  document.getElementById('level_6_check').checked,
  document.getElementById('level_7_check').checked];

  var frc_box = [document.getElementById('Necropolis').checked,
  document.getElementById('Inferno').checked,
  document.getElementById('Stronghold').checked,
  document.getElementById('Castle').checked,
  document.getElementById('Rampart').checked,
  document.getElementById('Dungeon').checked,
  document.getElementById('Fortress').checked,
  document.getElementById('Conflux').checked,
  document.getElementById('Tower').checked];

  let empty_frc_check = false;
  let empty_lvl_check = false;
  for (let i = 0; i < frc_box.length; i++) {
    if (frc_box[i]) {
      empty_frc_check = true;
      break;
    }
  }
  for (let i = 0; i < lvl_box.length; i++) {
    if (lvl_box[i]) {
      empty_lvl_check = true;
      break;
    }
  }


  if (empty_frc_check || empty_lvl_check) { //if none options are checked then skip  

    for (let i = 0; i < creatures.length; i++) {

      const creature = creatures[i];
      creature.style.display = 'block';
      if (empty_lvl_check) {
        if (!lvl_box[creature.getAttribute("lvl") - 1]) {
          creature.style.display = 'none';
        }
      }
      if (empty_frc_check) {
        if (!frc_box[FactiontoIndex(creature.getAttribute("frc"))]) {
          creature.style.display = 'none';
        }
      }

    }
  } else {
    for (let i = 0; i < creatures.length; i++) {
      const creature = creatures[i];
      creature.style.display = 'block';
    }
  }




}