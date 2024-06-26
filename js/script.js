
let count = 10;
const h1 = document.querySelector('h1');

const interval = setInterval(function () {
    count--;

    h1.innerText = 'Count:' + count; 

    if (count === 0) {
        clearInterval(interval);
    }

}, 1 * 1000);

/*setTimeout(function () {
    console.log('time is up!');
}, 3000);*/

