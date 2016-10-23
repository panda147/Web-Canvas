/*
console.log("Hello World!")
console.error("Error Idina Hui!")
var i,j
for (i=2;i<=9;i++){
for (j=1;j<=9;j++){
console.log(i+"*"+j+"="+i*j)
}
}*/

var arr = ["A","B","C","D"];

/* 변수형
arr = 1 //number
arr = true // boolean
arr = null //비어있다 (void* 0)
arr = underfined //없다

   연준 객체형
arr = "a" // string .length charAt(0)
arr = [] //배열 .length [0]
arr = {
"type":"A"
"1":"B"
"2":"c"
} //객체 object
arr = function() {} //함수
*/

//arr.type
//arr["type"]

console.log(arr[1]);
console.log(arr);

// for (var i=0; i<arr.length;i++)
for (var i in arr)
console.log(arr[i]);
