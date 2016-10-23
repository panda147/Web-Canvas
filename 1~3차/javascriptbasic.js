// function varTest() {
//   var x = 1
//   if(true) {
//     var x = 2 //원래 값
//     console.log(x)
//   }
//   console.log(x)
// }
//
// function letTest() {
//   let x = 1
//   if(true) {
//     let x = 2 //원래 값 아님
//     console.log(x)
//   }
//   console.log(x)
// }
// varTest()
// letTest()






let arr = [1,2,3,4,5]; // 리터럴 literal
let obj = {
  'x':1,
  'y':2
} // 연관 배열(map, table라고도 함), Dictionary

let str = "abc"

// // obj['x']
// // obj.x //1 위랑 같음

console.log(arr)
console.log(obj)
console.log(str)

   //가비지 컬렉터(GC)
  // obj = null
  // int* p = null
  // new malloc
  // delete free

// for (var variable in obj) {
//   if (obj.hasOwnProperty(variable)) {
//     console.log(variable)
//     obj[variable]
//   }
// }
//
// for (var variable in arr) {
//   if (arr.hasOwnProperty(variable)) {
//     console.log(variable)
//     arr[variable]
//   }
// }
for (variable of arr) {
    console.log(variable)
}
