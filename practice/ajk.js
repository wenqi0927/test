require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
let By=webdriver.By
driver.get("https://login.anjuke.com/login/form");
driver.switchTo().frame('iframeLoginIfm').then(function(){    
driver.findElement(By.id('phoneIpt')).sendKeys('18762671598');
driver.findElement(By.id('smsIpt')).sendKeys("1234");
})
