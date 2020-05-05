const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Fill LIsteners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Drag Function
function dragStart() {
    console.log('start');
}

function dragEnd() {
    console.log('end');
}

