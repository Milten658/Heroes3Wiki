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