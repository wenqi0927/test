require('chromedriver');
var webdriver=require('selenium-webdriver');
let fs = require('fs');
let path =require('path')
var driver=new webdriver.Builder().forBrowser('chrome').build();
let By = webdriver.By;
driver.get('https://www.baidu.com/');
driver.manage().window().maximize();
var gengduo=driver.findElement({name:'tj_briicon'});
driver.actions().mouseMove(gengduo).perform();
driver.takeScreenshot().then(function(imagedata){    // 截图
    fs.writeFileSync('baidu.png',imagedata,'base64')
})


driver.findElement(By.className('soutu-btn')).click();
let pngpath = path.join(__dirname,'baidu.png');
driver.findElement(By.className('upload-pic')).sendKeys(pngpath)  // 上传文件