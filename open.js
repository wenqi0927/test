/*require('chromedriver');
var webdriver =  require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser('chrome').build();  //创建一个chrome 浏览器

function openbrower(url){
    driver.get(url)
}
openbrower("http://www.baidu.com")
openbrower("http://www.bing.com")
driver.quit()
*/

require("chromedriver");
var webdriver=require('selenium-webdriver');
var driver =new webdriver.Builder().forBrowser("chrome").build();
let By=webdriver.By

driver.get('https://www.baidu.com/')
driver.manage().window().maximize()
driver.actions().mouseMove(driver.findElement(By.name('tj_briicon'))).perform();
//driver.findElement(By.name('tj_briicon')).click();
driver.findElement(By.name('tj_mp3')).click();
driver.sleep(20000);
driver.close()