require('chromedriver')//创建浏览器
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();//创建一个
const By  = webdriver.By;
driver.get("http://www.baidu.com");//打开百度网页


driver.findElement(By.xpath('//*[@id="u1"]/a[3]')).click();
driver.quit();//关闭浏览器
var driver = new webdriver.Builder().forBrowser('chrome').build();//创建一个
driver.get("http://www.baidu.com");//打开百度网页
driver.findElement(By.css('#u1 > a:nth-child(1)')).click();
driver.findElement(By.linkText("时尚")).click();


driver.findElement(By.id('kw')).sendKeys('地图');
driver.findElement({id: "su"}).click();
driver.sleep(10000);
driver.findElement(By.xpath('//*[@id="1"]/div[1]/div/div[2]/div[2]/div/div[1]/form/input[2]')).sendKeys('纽约');
driver.findElement(By.xpath('//*[@id="1"]/div[1]/div/div[2]/div[2]/div/div[1]/form/input[2]')).submit();


driver.findElement({id:"kw"}).sendKeys("F1");
driver.findElement({id:"su"}).click();
driver.quit();//关闭浏览器
driver.findElement({id:"kw"}).sendKeys("F1");
driver.findElement({id:"su"}).click();
driver.quit();//关闭浏览器
