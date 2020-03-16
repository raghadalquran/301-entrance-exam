'use strict';

//Global variables
var sectionEl = document.createElementById('result');
var arrayToPush = [];
var newt;
var variable1;
var variable2;
//create the constructor function
function Taskes(array, date) {
    this.array = array;
    this.date = date;
    arrayToPush.push(this);
}


//The form
var myform = document.getElementById('my-form');
myform.addEventListener('submit', submitfun());
function submitfun(event) {
    event.preventdefult();
    variable1 = event.target.text;
    variable2 = event.target.date;

    new Taskes(variable1, variable1);
}

//render the result from the form
function render() {
    var ulEl = document.createElement('ul');
    ulEl.appendChild(sectionEl);
    for (vari = 0; i < arrayToPush; i++) {
        var liEl = document.createElement('li')
        ulEl.appendChild(liEl);
        liEl.textContent = newt[i].variable1;
        var liEl = document.createElement('li')
        ulEl.appendChild(liEl);
        liEl.textContent = newt[i].variable2;
    }
}

//set to the local storge
function setItem() {
    var toString = JSON.stringify(arrayToPush);
    localStorage.setItem('toString', toString);
}
//get from the local storge
function getItem() {
    newt = JSON.parse(localStorage.getItem('toString'));
    // console.log(newt);
}
