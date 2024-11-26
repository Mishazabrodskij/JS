//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.//

function people(users) {
    for (const user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }

}

people([
    {id:1,name:'lol',age:22},
    {id:2,name:'foe',age:26},
    {id:3,name:'edfg',age:72},
    {id:4,name:'wef',age:62},
    {id:5,name:'wer',age:32},
    {id:6,name:'lkmn',age:37},
])