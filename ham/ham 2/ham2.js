function square() {
    let num = +document.getElementById('inputNum').value;
    sum = num * num;
    document.getElementById('demo1').innerText = sum;
}

function caculate() {
    let numa = +document.getElementById('inputa').value;
    let S = numa * 3.14 * numa;
    let P = numa * 2 * 3.14;
    document.getElementById('demo2').innerHTML = "Diện tích là : " + S + "<br>" + " chu vi là : " + P;
}

function giaiThua() {
    let so = +document.getElementById('songuyen').value;
    let sum = 1;
    for (let i = 1; i <= so; i++) {
        sum = sum * i;
        document.getElementById('demo3').innerHTML = sum;
    }
}

function traKyTuSo() {
    let kytu = document.getElementById('nhap').value;
    if (kytu % 1 === 0) {
        document.getElementById('nhap').value = "Đây là ký tự số"
    } else {
        document.getElementById('nhap').value = "Đây là ký tự chữ"
    }
}

function xet() {
    let numbera = +document.getElementById('soa').value;
    let numberb = +document.getElementById('sob').value;
    let numberc = +document.getElementById('soc').value;
    let min = numbera;
    if (min > numberb) {
        min = numberb;
        if (min > numberc) {
            min = numberc;
        }
    } else if (min > numberc) {
        min = numberc
    }
    document.getElementById('demo5').innerHTML = min;
}

function test() {
    let val = +document.getElementById('so').value;
    if (val > 0) {
        document.getElementById('demo6').innerHTML = "Đây là số nguyên dương";
    } else {
        document.getElementById('demo6').innerHTML = "Đây không phải là số nguyên dương";
    }
}

function changeNumber() {
    let val1 = +document.getElementById('sothu1').value;
    let val2 = +document.getElementById('sothu2').value;
    arr = val1;
    val1 = val2;
    val2 = arr;
    document.getElementById('demo7').innerHTML = val1 + "  " + val2;
}

function swap() {
    let mang = [1998, 10, 27, 'Đạt', 'Tấn', 'Lê'];
    mang.reverse();
    document.getElementById('demo8').innerHTML = mang;
}

function checkInputValue() {
    let inputValue = document.getElementById('inputNumber');
    inputValue = Number(inputValue.value);
    let numbers = [1, 6, 9, 9, 9, 5, 4, 2, 9, 1, 3];
    let count = 0;

    for (number of numbers) {
        if (inputValue === number) {
            count++;
        }
    }

    return count > 0?count:-1;
}

function calculateNum() {
    document.getElementById('demo9').innerHTML= checkInputValue();
}