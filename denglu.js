require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
let By=webdriver.By
driver.get("http://192.168.238.128:3000/");
driver.findElement(By.xpath('/html/body/div[1]/div/div/ul/li[6]/a')).click()
driver.sleep(10000)
driver.findElement(By.id('name')).sendKeys('wenqi')
driver.findElement(By.xpath('//*[@id="pass"]')).sendKeys('qw926300')
driver.sleep(5000)
let denglu = driver.findElement(By.xpath('//*[@id="signin_form"]/div[3]/input'))
driver.actions().mouseMove(denglu).perform();
driver.findElement(By.xpath('//*[@id="signin_form"]/div[3]/input')).click()
driver.sleep(2000)
driver.findElement(By.xpath('//*[@id="create_topic_btn"]/span')).click()
driver.sleep(2000)
driver.findElement(By.xpath('//*[@id="tab-value"]')).click()
//let wenda = driver.findElement('//*[@id="tab-value"]/option[3]')
//driver.actions().mouseMove(wenda).perform();
driver.findElement(By.xpath('//*[@id="tab-value"]/option[3]')).click()
driver.sleep(2000)
driver.findElement(By.xpath('//*[@id="title"]')).sendKeys('woeieuuui')
driver.actions().mouseMove(driver.findElement(By.xpath('//*[@id="create_topic_form"]/fieldset/div/div/div[2]/div[6]/div[1]/div/div/div/div[4]'))).click().perform();   // 鼠标移动到文章内容这个地方 click 获取焦点
driver.actions().mouseMove(driver.findElement(By.xpath('//*[@id="create_topic_form"]/fieldset/div/div/div[2]/div[6]/div[1]/div/div/div/div[4]'))).sendKeys("hellowoerod").perform()   // 鼠标移动到这个文章内容处输入文字。