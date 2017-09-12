

//setTimeout(function(){
//   console.log('abc')
//},2000);


/*setTimeout(function(){
    console.log("模拟一个数据执行耗时2s的动作")
},2000);
console.log("another active")
*/
function f1(callback){
setTimeout(function(){
    console.log("模拟一个数据执行耗时2s的动作")
    callback()
},2000);
}
function f2(){
console.log("another active")
}

f1(f2)