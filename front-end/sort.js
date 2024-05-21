document.querySelector('#sort-asc').onclick = mySort

function mySort() {
    let nav = document.querySelector('#nav');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-sort') > +nav.children[j].getAttribute('data-sort')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])
            }
        }
    }
}

document.querySelector('#sort-dasc').onclick = Sort
function Sort() {
    let nav = document.querySelector('#nav');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-sort') < +nav.children[j].getAttribute('data-sort')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])
            }
        }
    }
}
function insertAfter(First, Second){
    return Second.parentNode.insertBefore(First, Second.nextSibling)
}
const sortButton = document.getElementById('sort-fraction');
const nav = document.getElementById('nav');
const creatures = nav.querySelectorAll('.creature');

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