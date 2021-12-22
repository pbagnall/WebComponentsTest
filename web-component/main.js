import DropDown from "./DropDown.js";

const values = {
    "One": 1,
    "Two": 2,
    "Three": 3,
    "Four": 4
}

function getOptions() {
    // TODO: a way of setting the options
}

export function showSelection(div, event) {
    console.log(event.detail);
    div.innerHTML = event.detail;
}

let first = document.getElementById('firstDropDown');
let firstout = document.getElementById('firstSelection');
first.addEventListener('change', (e) => showSelection(firstout, e));

let second = document.getElementById('secondDropDown');
// second.setDataSource(getOptions);
let secondout = document.getElementById('secondSelection');
second.addEventListener('change', (e) => showSelection(secondout, e));
