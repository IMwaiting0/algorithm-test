// const arr = [];
// // 生成[0, 100000]之间的随机数
// for (let i = 0; i < 100000; i++) {
//   arr.push(0 + Math.floor((100000 - 0 + 1) * Math.random()))
// }

const arr = [1, 1, '1', '1', 0, 0, '0', '0', undefined, undefined, null, null, NaN, NaN, {}, {}, [], [], /a/, /a/];

// //双重循环
// Array.prototype.unique = function () {
//   const newArray = [];
  
//   for (let i = 0; i < this.length; i++) {
//     for (let j = i + 1; j < this.length; j++) {
//       if (this[i] === this[j]) {
//         j = ++i;
//       }
//     }
//     newArray.push(this[i]);
//   }
//   return newArray;
// }

// //Array.prototype.indexOf()
// Array.prototype.unique = function () {
//   const newArray = [];
//   this.forEach(item => {
//     if (newArray.indexOf(item) === -1) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// }

// //Array.prototype.sort()
// Array.prototype.unique = function () {
//   const newArray = [];
//   this.sort();
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] !== newArray[newArray.length - 1]) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// }

// //Array.prototype.includes()
// Array.prototype.unique = function () {
//   const newArray = [];
//   this.forEach(item => {
//     if (!newArray.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// }

// //Array.prototype.reduce()
// Array.prototype.unique = function () {
//   return this.sort().reduce((init, current) => {
//     if(init.length === 0 || init[init.length - 1] !== current){
//       init.push(current);
//     }
//     return init;
//   }, []);
// }

// //对象属性不能重复一
// Array.prototype.unique = function () {
//   const newArray = [];
//   const tmp = {};
//   for (let i = 0; i < this.length; i++) {
//     if (!tmp[typeof this[i] + this[i]]) {
//       tmp[typeof this[i] + this[i]] = 1;
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// }

// //对象属性不能重复二
// Array.prototype.unique = function () {
//   const newArray = [];
//   const tmp = {};
//   for (let i = 0; i < this.length; i++) {
//     // 使用JSON.stringify()进行序列化
//     if (!tmp[typeof this[i] + JSON.stringify(this[i])]) {
//       // 将对象序列化之后作为key来使用
//       tmp[typeof this[i] + JSON.stringify(this[i])] = 1;
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// }

// Map
Array.prototype.unique = function () {
  const tmp = new Map();
  return this.filter(item => {
    return !tmp.has(item) && tmp.set(item, 1);
  })
}

// //set
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// }

console.time("test");
var result = arr.unique();
console.timeEnd("test");