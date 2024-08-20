// Node.js SINGLE THREAD

// array listni indexidan javobni olyapdi
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "ozingizga ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga savmoya kiriting", // 50-60
//   "endi dam oling,  foydasi yoq endi", // 60
// ];

// callback functionida qilamiz va uning  2 ta parametri boladi => a & callback
// a diganda yosh narzarda tutiladi va biz yoshni past qilishiimiz kerak.

// if(typeof a !== "number") agar kiriltilgan narsani type number bolmasa bizga  error bersin
// callback("Insert a number", null); callbackga har xil qolatda har xil  qiymatlarni yukladik
// callbackni 1-qismi error 2-qismi: biz qayatmoqchi bolgan  data tegishli
// agar:  => a  number bolmasa bizga error beradi.

// CALLBACK function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// call qismi

// callback functionni chaqirishda parametr sifatida function ishga tushadi va parametr ichida ish koramiz
// else: agar xotilik bolsa null chiqishi shart emas deb elseni ichida log qildik.

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 2");

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "ozingizga ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga savmoya kiriting", // 50-60
//   "endi dam oling,  foydasi yoq endi", // 60
// ];

// agar a qiymatiga number kiritilmasa bizga qiymatni throw qildi
// Async function ichida setTimeout ishlamaydi orniga Promise

// ASYNC funtion

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// call qismi
// catch: => Tutib olish

// call via then/catch

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// call via asyn/await
// async function run() {
//   let javob = await maslahatBering(75);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(42);
//   console.log(javob);
// }
// run();

/** A-TASK: 
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
 */

function countLetter(a, word) {
  return word.split(a).length - 1;
}
console.log(countLetter("e", "engineer"));
console.log(countLetter("n", "engineer"));
console.log(countLetter("g", "engineer"));
