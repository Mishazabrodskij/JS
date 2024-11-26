//створити функцію яка приймає масив та виводить кожен його елемент//



function printArrayElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let numbers = [1, 2, 3, 4, 5];
let words = ['hello', 'okten', 'JavaScript', 'is', 'awesome'];

printArrayElements(numbers);
printArrayElements(words);
