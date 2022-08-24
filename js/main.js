var text = "Hello World, , ,                       ";

// console.log(text.length);
// console.log(text.includes("rld", 8));
// console.log(text.charAt(6));
// console.log(text.charCodeAt(0));


// var aciiText = ""
// for(let i=0; i < text.length; i ++){
//     aciiText+=text.charCodeAt(i)+" "
// }

// console.log(aciiText);
// console.log(text);
// console.log(text.trim());

// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// console.log(text.startsWith("Hello", 1));



function isNumerable(a){
    // let a = arguments[0];
    if(typeof a !== 'number' && isNaN(a - 0))
        return false;
    return true;
}


function add(a, b, c){
    // let a = arguments[0];
    // let b = arguments[1];
    if(isNumerable(a))
        a-=0;
    else 
        throw new Error("Birinchi o'zgaruvchi raqam emas")

    if(isNumerable(b))
        b-=0;
    else 
       throw new Error("Ikkinchi o'zgaruvchi raqam emas")

    return a + b;
}
// console.log(add(12, "13a"))


// function birNechtaSonniQushish(){
//     let myArgs = Array(...arguments);
//     console.log(myArgs);
//     let sum = 0;

//     for(let i=0; i < myArgs.length; i++){
//         sum+=myArgs[i]; 
//     }
//     return sum;
// }

// let result = birNechtaSonniQushish(12,"11", 1, 4, 25, 56);

// console.log(result)

// let date = new Date("06-21-2001 15:04:01");

// console.log(Date.now())


// let nowDate = new Date();


// let zeroDate = new Date();
// zeroDate.setMilliseconds(nowDate.getMilliseconds() - Date.now());

// console.log(zeroDate);
// console.log(date.getHours());

// console.log(Date.now())


// let nowDate = new Date();


// let zeroDate = new Date();
// zeroDate.setMilliseconds(nowDate.getMilliseconds() - Date.now());

// console.log(zeroDate);


// function getMyAge(birthYear = 2002){
//     console.log(birthYear)
//     let year = new Date().getFullYear()
//     return year - birthYear
// }
// console.log(getMyAge(12))

// console.log(getMyName)
// getMyName()
// getMyName2()


// Function expression
// var getMyName = function (){
//     console.log("Alice");
// }
// // getMyName = 12

// // function declaration
// function getMyName2(){
//     console.log( "Cortana");
// }

// getMyName()
// getMyName2()
// let a;
// // let switch


// function fizzBuzz(a){
//     if(a%3==0 && a%5==0) 
//         return "FizzBuzz";

//     if(a%3 ==0)
//         return "Fizz";
//     if(a%5 ==0 )
//         return "Buzz";
//     return "Bo'linmaydi"
// }

// console.log(fizzBuzz(30));
// console.log(fizzBuzz(33));
// console.log(fizzBuzz(35));
// console.log(fizzBuzz(31));

const PASSWORD = "1234";
const account = {
    firstname:"Bob",
    lastname:"George",
    age:34
}

function login(password){
    if(password === PASSWORD)return account;
}
// let profile = login(prompt("Parol kiriting:"))
// if(profile){
//     console.log(profile)
// }else{
//     console.error("Parol notog'ri")
// }
let var1 = [];

// console.log(Number(var1))
// console.log(Boolean(var1))
// if(var1){
//     console.log(true);
// }else{
//     console.log(false);
// }



// Truthy values
// Istalgan satrli bo'sh bo'lmagan ma'lumot, 
// 0 dan tashqari istalgan raqam
// [], {}

// Falsy values
//   "" bo'sh string
//  0 raqami 
// NaN qiymati
// undefined
// null


const text1 = 0;

console.log(text1 && "Siz Adminsiz");
