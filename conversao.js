// Converte uma string para um número inteiro
function convertToInt(string) {
    const number = parseInt(string);
    return number;
}

// Converte um número inteiro para uma string
function convertToString(number) {
    const stringNumero = number.toString();
    return stringNumero;
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    if (value === 0) {
        return false;
    } else if (value === "true") {
        return true;
    } else {
        return Boolean(value);
    }
}

module.exports = { convertToInt, convertToString, convertToBoolean };