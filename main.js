const submitButton = document.getElementById('submitButton');
submitButton.addEventListener("click", submitInput);

function submitInput() {
    document.getElementById('rating').style.display = "none";
    document.getElementById('thanks').style.display = "block";
}

let numberOneValue = 1;

const numberOne = document.getElementById('number1');
numberOne.addEventListener("click", numberOne);

function styleNumberOne() {
        numberOne.style.backgroundColor = 'lightslategray';
        document.getElementById('rating').textContent += numberOneValue;
}