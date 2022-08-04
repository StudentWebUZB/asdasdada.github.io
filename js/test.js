// console.log(typeof 1) number
// console.log(typeof "a") string
// console.log(typeof true) boolen
// console.log(typeof undefined) pustoy
// console.log(typeof null) pustoy object


// var a = 1
// const idish = 12312312


// console.log("O'zgaruchi: " + a)
// console.log("O'zgarmas: " + idish)

// Objects

// let object = {
//     name: "Diyor",
//     age: 22,
//     sex_men: true,
//     sex_women: false
// }


// console.log(object) // Object ni o'zini ko'rish
// console.log(object.name) // Object ni qiymatini ko'rish
// console.log(Object.keys(object)) // Object ni hamma kalitini ko'rish
// console.log(Object.values(object)) // Object ni hamma qiymatini ko'rish


// Array
// let array = ["asdasdasd", 1, "aspdjasdkljas", 34213, 21312]

// console.log(array)


// let malumotlarim = {
//     "name": "Diyor",
//     "age": 22,
//     "kasb": "frontend",
//     "ishlari": [
//         "Booknomy",
//         "kapital",
//         "tedbook",
//         "vazirlik",
//         {
//             "shaxsiy": "mybook",
//             "davlat": "qurilish"
//         }
//     ]
// }
//
// console.log(malumotlarim.ishlari[4].davlat)


// let a = 10
// a *= 3
// // let result = a+b
// console.log(a)
//
// const news_list = ["Jahon", "Milliy", "Sport", "Xujjum"]
//
//
//
// for (var i = 0; i < news_list.length; i++) {
//     document.querySelector("#news").innerHTML += `<p>${i === 3 ?  "Xujjimchi" : news_list[i]}</p>`
//    // ещё какие-то выражения
// }
//


var object = {
    name: "Tashkent",
    year: 1999,
    ussd: "sum"
}

console.log(object)

object.name = "Samarqand"


object["people"] = 3000000


// delete object["people"]


console.log(object)


let array = [30000, 20, 400000, 5000, 20, "adasdasdsa", true]
// array.push(8000000)
// array[0] = 200000

// console.log(array.shift()) // boshini olib qoladi qoganlarini ob tashidi
// console.log(array.pop()) // oxirgisini olib qoladi qoganlarini ob tashidi
// console.log(array)

// console.log(array.indexOf(20, -1))
const f = array.entries();

array.map((item, key) => {
    // console.log(key + "\n" + item)
    // document.querySelector("#news").innerHTML += `<p>${item}</p>`
})

for (let x of f) {
    // document.getElementById("news").innerHTML += x + "<br>";
}







// const result = array.filter(item => item === 20);
// document.querySelector("#search").innerHTML += "<hr>" + result
// console.log(result)
// console.log(array.slice(1, 4)) // orqalig'ini kesadi
//
// console.log(typeof array[1].toString())
//
// console.log(Array.isArray(9))
//
//
// let fruits = ["Olma", "Anor", "Banan", 'Kivi']
//
//
// document.querySelector("#news").innerHTML += `<p>${fruits.join("<br>")}</p>`
//
// console.log()


// array.map((item, number) => {
//     console.log(number)
//     console.log(item)
//     document.querySelector("#news").innerHTML += `<p>${item}</p>`
// })

x = 4
y = 4

a = 5
b = 5


// console.log(x == y) // Shunga yaqin
// console.log(x === y) // Bu Aniqlik (Xaqiqat)
// console.log(x != y) // Shunga yaqin 4 = 4 teng bomasa
// console.log(x !== y) // (Xaqiqat) 4 = 4 teng bomasa


// console.log(x >= y) // Katta teng
// console.log(x <= y) // Kichik teng


console.log(x === y && a !== b)
console.log(x === y || a !== b)

