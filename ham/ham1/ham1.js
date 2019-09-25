function ex1() {
    alert('Hello')
}

function ex2() {
    let num = document.getElementById('number');
    sum = num.value + 1;
    document.getElementById('demo').innerHTML = sum;
}

function ex3() {
    let firstNumber = +document.getElementById('number1').value;
    let secondNumber = +document.getElementById('number2').value;
    if (firstNumber > secondNumber){
        document.getElementById('demo2').innerHTML = "ko cong day thi lam sao";
    } else {
        let sum = firstNumber + secondNumber;
        document.getElementById('demo2').innerHTML = sum;
    }
}

function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
// result = 0;
// result = addNumbers();
// document.getElementById('demo3').innerText = result;



function findYourStar() {
    let firstStars = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe' , 'Regulus'];
    let secondStars = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major' , 'Leo'];
    let nameStar = document.getElementById('yourStar').value;
    for (let i = 0; i < firstStars.length ; i++){
        if (nameStar === firstStars[i]){
            document.getElementById('demo4').innerHTML = secondStars[i];
            break;
        } else {
            document.getElementById('demo4').innerHTML = "Can not find";
        }
    }
}