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


let a = 10
a *= 3
// let result = a+b
console.log(a)

const news_list = ["Jahon", "Milliy", "Sport", "Xujjum"]



for (var i = 0; i < news_list.length; i++) {
    document.querySelector("#news").innerHTML += `<p>${i === 3 ?  "Xujjimchi" : news_list[i]}</p>`
   // ещё какие-то выражения
}


