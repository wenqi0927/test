require('chromedriver')
const webdriver =  require("selenium-webdriver")
const assert = require('assert')

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("https://www.taobao.com/")  // open baidu 
driver.getTitle().then(function(title){
    console.log(title)
    return assert.notdeepEqual(title,"百度一下，你就知道")
})