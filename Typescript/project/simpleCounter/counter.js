"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
let resetBtn = document.getElementById('reset');
let count = 0;
function updateCounter() {
    counter.textContent = count.toString();
}
incrementBtn.addEventListener('click', function () {
    count++;
    updateCounter();
});
decrementBtn.addEventListener('click', function () {
    if (count > 0) {
        count--;
        updateCounter();
    }
});
resetBtn.addEventListener('click', function () {
    count = 0;
    updateCounter();
});
//# sourceMappingURL=counter.js.map