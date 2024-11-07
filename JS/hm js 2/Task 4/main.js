//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача//

let users = [
    { name: 'Олексій', username: 'olexiy01', password: 'pass1234' },
    { name: 'Марія', username: 'mariya02', password: 'password5678' },
    { name: 'Іван', username: 'ivan03', password: 'qwerty123' },
    { name: 'Анна', username: 'anna04', password: 'zxcvbn789' },
    { name: 'Сергій', username: 'sergiy05', password: 'sergiy_pass' },
    { name: 'Ольга', username: 'olga06', password: 'olga2022' },
    { name: 'Дмитро', username: 'dmytro07', password: 'passwordDm' },
    { name: 'Наталія', username: 'nataliya08', password: 'natPass' },
    { name: 'Андрій', username: 'andriy09', password: 'andriy123' },
    { name: 'Юлія', username: 'yuliya10', password: 'yuliya_pass' }
];

console.log(users.map(user => user.password));

