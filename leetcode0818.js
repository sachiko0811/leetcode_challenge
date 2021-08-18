console.log("Hello world");

// .filter() method
let arr1 = [1,2,3,4,5,6];
let res1 = arr1.filter(ele => {
  return ele % 2 === 0;
});
console.log(res1); // [2, 4, 6]