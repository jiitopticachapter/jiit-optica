let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function sqrt() {
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById('display').value = displayValue;
}

function power() {
    displayValue = Math.pow(eval(displayValue.split('^')[0]), eval(displayValue.split('^')[1]));
    document.getElementById('display').value = displayValue;
}

function sin() {
    displayValue = Math.sin(eval(displayValue));
    document.getElementById('display').value = displayValue;
}

function cos() {
    displayValue = Math.cos(eval(displayValue));
    document.getElementById('display').value = displayValue;
}

function tan() {
    displayValue = Math.tan(eval(displayValue));
    document.getElementById('display').value = displayValue;
}
