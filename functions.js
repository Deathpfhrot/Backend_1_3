function deadpool(zahl1, zeichen, zahl2) {
    if (zeichen === '+') {
        return zahl1 + zahl2
    } else if (zeichen === '-') {
        return zahl1 - zahl2
    } else if (zeichen === '/') {
        return zahl1 / zahl2
    } else if (zeichen === '*') {
        return zahl1 * zahl2
    } else {
        console.log('Not avialble');
    }
}

module.exports = {
    deadpool
}