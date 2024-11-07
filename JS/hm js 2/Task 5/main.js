
//описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу


let weeklyTemperatures = [
    { day: "Monday", morning: 15, afternoon: 22, evening: 18 },
    { day: "Tuesday", morning: 14, afternoon: 20, evening: 17 },
    { day: "Wednesday", morning: 13, afternoon: 21, evening: 16 },
    { day: "Thursday", morning: 12, afternoon: 19, evening: 15 },
    { day: "Friday", morning: 14, afternoon: 23, evening: 17 },
    { day: "Saturday", morning: 16, afternoon: 24, evening: 19 },
    { day: "Sunday", morning: 17, afternoon: 25, evening: 20 }
];


console.log(weeklyTemperatures[0].morning);
