
require('chromedriver')
var webdriver = require('selenium-webdriver');
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');


// Connection URL 
const url = 'mongodb://192.168.238.128:27017/node_club_dev';

let By = webdriver.By;
//
let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("http://192.168.238.128:3000/")
let user = new Date().valueOf()

driver.findElement(By.css('[href="/signup"]')).click();
driver.findElement(By.id('loginname')).sendKeys(user)
driver.findElement(By.id('pass')).sendKeys('123456')
driver.findElement(By.id('re_pass')).sendKeys('123456')
driver.findElement(By.id('email')).sendKeys(`${user}@domain.com`)  // user+"@domain.com"
driver.findElement(By.css('.span-primary')).click().then(function () {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        let collection = db.collection("users")

        collection.find().toArray(
            function (err, docs) {
                assert.equal(null, err);
                // console.log(docs)
            }
        )

        collection.findOne({name: `${user}`},function(err,docs){
            console.log(docs.name)
            assert.equal(err, null)
            assert.equal(`${user}`,docs.name)
        })
        collection.updateOne({ name: `${user}` }, { $set: { "active": true } }, function (err, docs) {
            assert.equal(null, err);
            // console.log(docs)
        })
        db.close();
    });
})