// Name Input
const myButton = document.getElementById ('myButton');
const myName = document.getElementById ('myName');
const myInput = document.getElementById ('myInput');

myButton.addEventListener('click', () => {
    myName.textContent = myInput.value;
    myInput.value = '';
}); 

// Color Buttons 
const pink = document.getElementById ('pinkBtn');
const blue = document.getElementById ('blueBtn');
const green = document.getElementById ('greenBtn');
const box1 = document.getElementById ('myBox1');
const box3 = document.getElementById ('myBox3');

pink.addEventListener('click', () => {
    box1.style.background = 'rgb(230, 169, 199)';
    box3.style.background = 'rgb(230, 169, 199)';
}); 

blue.addEventListener('click', () => {
    box1.style.background = 'rgb(153, 217, 238)';
    box3.style.background = 'rgb(153, 217, 238)';
});

green.addEventListener('click', () => {
    box1.style.background = 'rgb(170, 240, 170)';
    box3.style.background = 'rgb(170, 240, 170)';
});
