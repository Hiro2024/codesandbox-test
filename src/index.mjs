/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "上書きしました";
// console.log(val1);

// var val1 = "万時";

// const var3 = "aa";
// var3 = "bb";

// const val4 = {
//   name: "じゃけえ",
//   age: 28,
// };

// val4.name = "じゃｋ";
// val4.address = "東京";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// console.log(val5);

// const name = "じゃえ";
// const age = 28;

// const message2 = `私の名前は${name}で、年齢は${age}です。`;
// console.log(message2);

// function func1(str) {
//   return str;
// }
// console.log(func1("万時"));

// const func2 = (str) => str;
// console.log(func2("まんじ"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(1, 99));

// const myProfile = {
//   name: "じゃけ",
//   age: 35,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const myProfile = ["じゃけえ", 35];

// const message3 = `名前は${myProfile[0]}で、年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}で、年齢は${age}歳です。`;
// console.log(message4);

// const sayHello = (name = "guest") => console.log(`こんにちは！${name}さん！`);
// sayHello("まんじ");

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
// };
// console.log(checkSum(10, 100));
