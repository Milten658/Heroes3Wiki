document.querySelector('.sort_asc').onclick = DescSort

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

document.querySelector('.sort_desc').onclick = AscSort
function AscSort() {
  let nav = document.querySelector('#nav');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (+nav.children[i].getAttribute('hp_sort') < +nav.children[j].getAttribute('hp_sort')) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i])
      }
    }
  }
}
function insertAfter(First, Second) {
  return Second.parentNode.insertBefore(First, Second.nextSibling)
}
const sortButton = document.getElementById('sort-fraction');
const nav = document.getElementById('nav');
const creatures = nav.querySelectorAll('.creature');

//necropolis button
let isFiltered = false;

sortButton.addEventListener('click', () => {
  if (!isFiltered) {
    creatures.forEach(creature => {
      if (creature.dataset.type !== 'Necro' && creature.dataset.type !== 'inferno') {
        creature.style.display = 'none';
      }
    });
    isFiltered = true;
  } else {
    creatures.forEach(creature => {
      creature.style.display = 'block';
    });
    isFiltered = false;
  }
});
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