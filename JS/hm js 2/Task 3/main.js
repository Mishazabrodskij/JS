//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.//

let book1 = {
    title: 'Стратегії геніїв',
    pageCount: 360,
    genre: 'Історії успіху',
    authors: [
        {name: 'Автор 1', age: 45},
        {name: 'Автор 2', age: 50}
    ]
};

let book2 = {
    title: '46 секунд',
    pageCount: 440,
    genre: 'Військове право',
    authors: [
        {name: 'Автор 3', age: 40},
        {name: 'Автор 4', age: 55}
    ]
};

let book3 = {
    title: 'Іди туди, де страшно',
    pageCount: 250,
    genre: 'cаморозвиток',
    authors: [
        {name: 'Автор 5', age: 38},
        {name: 'Автор 6', age: 42}
    ]
};

console.log(book1);
console.log(book2);
console.log(book3);
