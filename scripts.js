var a = 8,
    b = 3,
    value = (a * a) - (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
    alert('wynik dodatni');
}
else if (value < 0) {
    console.log('wynik ujemny');
    alert('wynik ujemny');
}
else {
    console.log('wynik równy 0');
    alert('wynik równy 0');
}