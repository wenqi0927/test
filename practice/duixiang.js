//声明对象
const user = {
      name: "wangnima",
      age : 23,
      email: "wangnima@123.com",
}


//访问对象
console.log("name",user.name)
console.log("email",user["email"])
console.log("age",user.age)

//修改对象
user.name ="zhangquandan"
user.age =24
user.email="zhangquandan@123.com"
console.log(user)