require('chromedriver')//创建浏览器
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();//创建一个
driver.get("http://www.baidu.com");//打开百度网页
driver.findElement({id:"kw"}).sendKeys("F1");
driver.findElement({id:"su"}).click();
driver.quit();//关闭浏览器
driver.findElement({id:"kw"}).sendKeys("F1");
driver.findElement({id:"su"}).click();
driver.quit();//关闭浏览器