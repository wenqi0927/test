// /**
//  * JavaScript async
//  * 
//  * 注意使用 此语法升级node.js 到最新版本
//  */

// function http(url, method) {
//     let promise = new Promise(function (resovle, reject) {
//         setTimeout(function () {
//             var data ="new data"
//             if (data) {
//                 resovle(data);
//             } else {
//                 reject("Error: No Data")
//             }
//         }, 1000);
//     })
//     return promise
// }


// async function getHttp(){
//     let res = await http()
//     console.log(res)
//     return res
// }

// getHttp().then(function(val){
//     console.log("Then:",val)
// })
// async function result(){
//     await getHttp()
// }


require('chromedriver')
let webdriver = require('selenium-webdriver')
let By = webdriver.By;
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get("http://www.baidu.com")
var assert = require('assert')

// driver.getTitle().then(function(title){
//     console.log(title)
// })


async function title(){
    let title =await driver.getTitle();
    console.log(title);
    assert.equal('百度一下，你就知道',title)
}

title();