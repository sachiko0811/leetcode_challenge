console.log("Hello world");

/* .filter() */
let arr1 = [1,2,3,4,5,6];
let res1 = arr1.filter(ele => {
  return ele % 2 === 0;
});
console.log(res1); // [2, 4, 6]

/* .includes() */
let arr2 = [1,2,3,4,5,6,7,8,9,10];
// let res2 = arr2.includes(1); // true
// let res2 = arr2.includes(2, 1); // true
let res2 = arr2.includes(4, 4); // false
console.log(res2); // true

