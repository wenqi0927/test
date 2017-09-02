require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
let By=webdriver.By
driver.get('file:///C:/Users/wenqi/Documents/test/d.html');

driver.switchTo().alert().then(function(alert) {
    driver.sleep(5000)
    return alert.accept();
});