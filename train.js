// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function findDoublers(str) {
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charMap[char]) {
      return true;
    } else {
      charMap[char] = true;
    }
  }
  return false;
}

// Misol uchun:
console.log(findDoublers("hello")); // true
console.log(findDoublers("world")); // false

/** D-TASK: 
Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// function checkContent(str1, str2) {
//   let sortedStr1 = str1.split("").sort().join("");
//   let sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2;
// }
// console.log(checkContent("mitgroup", "gmtiprou")); // true
// console.log(checkContent("hello", "world")); // false

/** MITASK-C 
Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non,
5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
 */

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola,
//     };
//   }

//   logMessage(message) {
//     const currentTime = new Date().toLocaleTimeString();
//     console.log(`Hozir ${currentTime}da ${message}`);
//   }

//   qoldiq() {
//     const { non, lagmon, cola } = this.products;
//     return `Hozir ${new Date().toLocaleTimeString()}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
//   }

//   sotish(product, quantity) {
//     if (
//       this.products[product] !== undefined &&
//       this.products[product] >= quantity
//     ) {
//       this.products[product] -= quantity;
//       this.logMessage(`${quantity}ta ${product} sotildi!`);
//     } else {
//       this.logMessage(
//         `${product} uchun yetarli miqdor yo'q yoki mahsulot topilmadi!`
//       );
//     }
//   }

//   qabul(product, quantity) {
//     if (this.products[product] !== undefined) {
//       this.products[product] += quantity;
//       this.logMessage(`${quantity}ta ${product} qabul qilindi!`);
//     } else {
//       this.logMessage(`${product} mahsuloti topilmadi!`);
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);
// console.log(shop.qoldiq());
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// console.log(shop.qoldiq());

/** B-TASK:
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
 */

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i] !== " ") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("ad2a54y79wet0sfgb92")); // 8 ta son  bor

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
// else {
//   setInterval(function () {
//     callback(null, list[5]);
//   }, 1000);
// }
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
// catch/Eror => Tutib olish
// then/data

// call via then/catch
//

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

// function countLetter(a, word) {
//   return word.split(a).length - 1;
// }
// console.log(countLetter("e", "engineer"));
// console.log(countLetter("n", "engineer"));
// console.log(countLetter("g", "engineer"));
