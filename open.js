require('chromedriver');
var webdriver =  require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser('chrome').build();  //创建一个chrome 浏览器

function openbrower(url){
    driver.get(url)
}
openbrower("http://www.baidu.com")
openbrower("http://www.bing.com")
driver.quit()