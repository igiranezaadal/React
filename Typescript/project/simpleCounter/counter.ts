
let counter = document.getElementById('counter') as HTMLElement;
let incrementBtn = document.getElementById('increment') as HTMLElement;
let decrementBtn = document.getElementById('decrement') as HTMLElement;
let resetBtn = document.getElementById('reset')as HTMLElement;
let count= 0;


function updateCounter() {
    counter.textContent = count.toString();
}
incrementBtn.addEventListener('click', function (): void {
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