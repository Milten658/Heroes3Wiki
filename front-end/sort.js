
function DescSort(param) {
  let nav = document.querySelector('#nav');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (+nav.children[i].getAttribute(`${param}`) > +nav.children[j].getAttribute(`${param}`)) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i])
      }
    }
  }
}

function AscSort(param) {
  let nav = document.querySelector('#nav');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (+nav.children[i].getAttribute(`${param}`) < +nav.children[j].getAttribute(`${param}`)) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i])
      }
    }
  }
}
function insertAfter(First, Second) {
  return Second.parentNode.insertBefore(First, Second.nextSibling)
}

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


  let radioSort = document.getElementsByName('sort_by');
  let radioOrder = document.getElementsByName('asc_desc');

  let empty_sort = false;
  let empty_order = false;
  let sort_param;
  let sort_order;

  for (let radio of radioSort) {
    if (radio.checked) {
      empty_sort = true;
      sort_param = radio.value;
      break;
    }
  }
  for (let radio of radioOrder) {
    if (radio.checked) {
      empty_order = true;
      sort_order = radio.value;
      break;
    }
  }
  if (empty_sort && empty_order) {
    if (sort_order == 'asc') {
      DescSort(sort_param);
    } else {
      AscSort(sort_param);
    }


  } else if (empty_sort || empty_order) {
    alert('If you want to sort creatures, please, check both parameters. It can\'t work other way');
  }

}