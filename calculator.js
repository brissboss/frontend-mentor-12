function updateRes(str) {
    document.getElementById('res').innerText = str;
}

function addNumber(num) {
    res = res + num
    updateRes(res)
}

function checkBefore(num) {
    if (res[res.length - 1] === '*' || 
        res[res.length - 1] === '/' || 
        res[res.length - 1] === '-' ||
        res[res.length - 1 ] === '+' ||
        res[res.length - 1] === '.') {
            res = res.slice(0, -1) + num
            updateRes(res);
    }
    else {
        if (res !== '')
            addNumber(num)
    }
}

function checkDot() {
    temp = res;

    var yes = true;

    for (var i = temp.length; i !== 0; i--) {
        if (temp[i] == '.')
            yes = false;
        if (temp[i] === '*' || temp[i] === '/' || temp[i] === '+' || temp[i] === '-')
            break;
    }

    if (yes) {
        if (res[res.length - 1] === '*' || 
            res[res.length - 1] === '/' || 
            res[res.length - 1] === '-' ||
            res[res.length - 1 ] === '+') {
                return false
            }
            addNumber('.');
    }
}

function calcMult(result) {
    var temp = result;
    var tempRes = 0
    for (var i = 0; i < temp.length; i++) {
        if (temp[i + 1] === '*') {
            tempRes = temp[i] * temp[i + 2];
            temp.splice(i, 3);
            temp.splice(i, 0, String(tempRes));
            i = 0;
            console.log(temp);
        }
    }
    return temp
}   

function calcDiv(result) {
    var temp = result;
    var tempRes = 0
    for (var i = 0; i < temp.length; i++) {
        if (temp[i + 1] === '/') {
            tempRes = temp[i] / temp[i + 2];
            temp.splice(i, 3);
            temp.splice(i, 0, String(tempRes));
            i = 0;
            console.log(temp);
        }
    }
    return temp
}   

function calcAdd(result, i) {
    var calc = parseFloat(result[i]) + parseFloat(result[i + 2]);
    result.splice(i, 3);
    result.splice(i, 0, String(calc));

    return result
}

function calcSous(result, i) {
    var calc = parseFloat(result[i]) - parseFloat(result[i + 2]);
    result.splice(i, 3);
    result.splice(i, 0, String(calc));

    return result
}

function calculate(result) {
    var div  = calcDiv(result)
    var mult = calcMult(div)

    while (mult.length != 1) {
        for (var i = 0; i < mult.length; i++) {
            if (mult[i + 1] === '+') {
                mult = calcAdd(mult, i);
                console.log(mult);
                break
            }
            if (mult[i + 1] === '-') {
                mult = calcSous(mult, i);
                console.log(mult);
                break
            }
        }

    }

    if (mult[0] === 'NaN')
        updateRes('Error');
    else {
        if ((mult[0] % 1) === 0)
            updateRes(mult);
        else
            updateRes(parseFloat(mult).toFixed(14));

    }
}

function splitRes() {
    var result = [];
    var temp = ''

    for (var i = 0; i < res.length; i++) {
        if (res[i] === '*' || 
        res[i] === '/' || 
        res[i] === '-' ||
        res[i ] === '+') {
            result.push(temp);
            result.push(res[i])
            temp = ''
        }
        else {
            temp = temp + res[i]
        }
    }

    temp !== '' ? result.push(temp) : null;

    console.log("-------------------------RESULT-------------------------")
    console.log(result)
    console.log("-------------------------RESULT-------------------------")

    calculate(result)
}

var res = ''

document.getElementById('res').innerText = '0'

document.getElementById('0').addEventListener('click', () => {addNumber('0')})
document.getElementById('1').addEventListener('click', () => {addNumber('1')})
document.getElementById('2').addEventListener('click', () => {addNumber('2')})
document.getElementById('3').addEventListener('click', () => {addNumber('3')})
document.getElementById('4').addEventListener('click', () => {addNumber('4')})
document.getElementById('5').addEventListener('click', () => {addNumber('5')})
document.getElementById('6').addEventListener('click', () => {addNumber('6')})
document.getElementById('7').addEventListener('click', () => {addNumber('7')})
document.getElementById('8').addEventListener('click', () => {addNumber('8')})
document.getElementById('9').addEventListener('click', () => {addNumber('9')})
document.getElementById('+').addEventListener('click', () => {checkBefore('+')})
document.getElementById('-').addEventListener('click', () => {checkBefore('-')})
document.getElementById('/').addEventListener('click', () => {checkBefore('/')})
document.getElementById('x').addEventListener('click', () => {checkBefore('*')})
document.getElementById('.').addEventListener('click', () => {checkDot()})


document.getElementById('=').addEventListener('click', () => {
    splitRes();
})

document.getElementById('del').addEventListener('click', () => {
    res = res.slice(0, res.length - 1)
    res === '' ? updateRes('0') : updateRes(res)
})

document.getElementById('reset').addEventListener('click', () => {
    res = '';
    updateRes('0');
})