//创建一个数组
const fruits=["apple","banana","1",'2',true]
console.log(fruits)


//通过索引访问
console.log(fruits[1])


//遍历一个数组
for(let f of fruits){
   console.log(f)
}

for (let index in fruits){
    console.log(index)
}

fruits.forEach(function(item,index,array){
    console.log(item,index)
})

//添加元素到数组末尾
fruits.push("orange")
console.log(fruits)

//删除数组末尾的元素
let newfruits = fruits.pop()
console.log("newfruit:",newfruits,fruits)

//删除数组最前面的元素
let headf = fruits.shift()
console.log("headf",headf,fruits)

//添加数组到最前面
fruits.unshift("cucumber")
console.log("fruits")

//找到某个元素在数组中的索引
let index = fruits.indexOf("banana")
console.log("banana index",index)

//通过索引删除某个元素
fruits.splice(0,1)
console.log("fruit",fruits)

//从一个索引位置删除多个元素
let arr =["apple","banana","cucumber","orange"]
arr.splice(1,2)
console.log("arr",arr)

//复制一个数组
let a = arr.slice()
console.log("a",a)

//连接一个数组
let b = a.concat(["b"])
console.log("fruit",fruits)