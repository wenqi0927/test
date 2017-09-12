var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

require('chromedriver')
let webdriver = require('selenium-webdriver')
let By = webdriver.By;
let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("http://192.168.238.128:3000")
driver.findElement(By.css('a[href="/signup"]')).click();
driver.findElement(By.id('loginname')).sendKeys("h2")
driver.findElement(By.id('pass')).sendKeys('123456')
driver.findElement(By.id('re_pass')).sendKeys('123456')
driver.findElement(By.id('email')).sendKeys('helloworld2@domain.com')
driver.findElement(By.css('.span-primary')).click().then(function () {
    // Connection URL 
    var url = 'mongodb://http://192.168.238.128:27017/node_club_dev';
    // Use connect method to connect to the Server 
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        let collection = db.collection('users')
        collection.find().toArray(function (err, docs) {
            assert.equal(null, err)
            console.log(docs);
        })

        db.close();
    });
});
