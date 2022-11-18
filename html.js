let array = new Array(1, 3, 5, 4, 9, 6);


function Run(value, index) {
    for (let i = array.length; i > index; i--) {
        array[i] = array[i - 1];
    }
    array[index] = value;
}
console.log(Run)