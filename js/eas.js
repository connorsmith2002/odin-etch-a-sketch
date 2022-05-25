let rows = document.querySelectorAll('.row');
let click = false;
let eraser = false;
let color = '#FF0000';

console.log(rows);
rows.forEach(function (row) {
    for (i = 0; i < 16; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
});

document.addEventListener('mousedown', (event) => {
    click = true;
});

document.addEventListener('mouseup', (event) => {
    click = false;
});

let eraserBTN = document.querySelector('#eraser');
eraserBTN.addEventListener('click', (event) => {
    eraser = true;
});

let penBTN = document.querySelector('#pen');
penBTN.addEventListener('click', (event) => {
    eraser = false;
});

let clearBTN = document.querySelector('#clear');
clearBTN.addEventListener('click', (event) => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(function (square) {
        square.style.backgroundColor = 'white';
    });
});

rows.forEach((row) => {
    row.addEventListener('mouseover', (event) => {
        let square = event.target;
        if (click) {
            if (!eraser) {
                square.style.backgroundColor = color;
            } else {
                square.style.backgroundColor = 'white';
            }
        }
    });

    row.addEventListener('mousedown', (event) => {
        if (!eraser) {
            event.target.style.backgroundColor = color;
        } else {
            event.target.style.backgroundColor = 'white';
        }
    });
});

colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener('change', (element) => {
    color = element.target.value.toString();
});
