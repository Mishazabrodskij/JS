//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r//


function cylinderArea(r, h) {

    return 2 * Math.PI * r * (r + h);
}

let s1 = cylinderArea(5, 10);
let s2 = cylinderArea(7, 15);
let s3 = cylinderArea(3, 8);

console.log(s1, s2, s3);