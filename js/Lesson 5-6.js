/**
 * Created by oem on 22.01.2017.
 */
var link = document.querySelector('a');
console.log(link);

// handler, callback
// link.onclick = function lnkClick() {        //1-st method (bad method)
//     alert ('You are dead man!( I find you!');
// };

// link.addEventListener('mouseover', function () {        //2-nd method (previous method)
//     alert('hello man!');
// });

// function handler(event) {
//     // alert('this is "handler" func!)');
//     console.log('event', event.keyCode);
//     if(event.keyCode === 13) {
//         alert('you pressed Enter');
//     }
// }
//event on all window
// window.addEventListener('keydown', handler);


function handler(event) {
    // alert('this is "handler" func!)');
    console.log('event target', event.target);          //target - DOM elem
    event.preventDefault();                     //stop event process
}

link.addEventListener('click', handler);


// link.addEventListener('click', handler, true);          //with true - действие будет вызываться от большьго ел к малому



//add event
// link.addEventListener('mousedown', handler);        //3-th method - adding event through the function handler
// link.removeEventListener('mousedown', handler);      // remove event
// //IE8-
// link.attachEvent('onclick', handler);        //3-th method - adding event through the function handler
// link.detachEvent('onclick', handler);      // remove event



// //add event through func handler + crossbrowser func
// function addEvent(el, event, callback) {        //crossbrowse-function
//     if(window.attachEvent) {
//         el.attachEvent('on' + event, callback);
//     } else {
//         el.addEventListener(event, callback);
//     }
// }
// addEvent(link, 'click', handler);



/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//variable with querySelectorAll
var list = document.querySelectorAll('li');         //choose all selectors in body
console.log(list[0]);

// handler, callback
// list[0].onclick = function liClick() {         //1-st method (bad method)
//     alert ('Hi!');
// };

// list[0].addEventListener('click', function () {         //2-nd method (previous method)
//     alert('You choose li too!');
// });

// function handler() {
//     alert('this is "handler" func!)');
// };
//
// list[0].addEventListener('mousedown', handler);        //3-th method - adding event through the function handler
// list[0].removeEventListener('mousedown', handler);      // remove event