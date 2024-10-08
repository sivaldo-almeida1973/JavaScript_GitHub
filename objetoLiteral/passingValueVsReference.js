// function sum(a, b) {
//   a = a+ b;
//   return a;
// }

// let parcela1 = 2;
// let parcela2 = 3;

// console.log(sum(parcela1, parcela2));




function sum2(obj1 , obj2) {
  obj1.value = obj1.value +obj2.value;
  return obj1;
}

let obj1 = {
  value: 2
};


let obj2 = {
  value: 3
};


console.log(sum2(obj1, obj2));
console.log(obj1);