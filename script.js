let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Fungsi untuk mengubah angka menjadi persentase
function convertToPercentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (e) {
        display.value = 'Error';
    }
}
