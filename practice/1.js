require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver;
let By = webdriver.By;
let fs = require('fs');
let path = require('path')
let rootpath = getRootPath();



function getRootPath() {
    let rootPath = path.resolve(__dirname);
    while (rootPath) {
        if (fs.existsSync(rootPath + '/package.json')) {
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

describe('登录', function () {
    this.timeout(60000);

    describe('用例1：发布分享话题', function () {
        before(async function () {
            driver = new webdriver.Builder().forBrowser('chrome').build();
            await driver.get('http://127.0.0.1:3000/signin');
            await driver.findElement(By.id('name')).sendKeys('imzack');
            await driver.findElement(By.id('pass')).sendKeys('123456');
            await driver.findElement(By.className('span-primary')).click();
        });
        after(async function () {
            let user = new Date().valueOf();
            await driver.takeScreenshot().then(function (imagedata) {
                fs.writeFileSync(rootpath + "/jietu/" + user + '.png', imagedata, 'base64')
            })
            await driver.quit();
        });
        it('点击发布话题按钮', async function () {
            await driver.findElement(By.id('create_topic_btn')).click();
        });
        it('选择板块', async function () {
            await driver.findElement(By.id('tab-value')).click();
        });
        it('选择分享', async function () {
            await driver.findElement(By.xpath('//*[@id="tab-value"]/option[2]')).click();
        });
        it('输入标题', async function () {
            await driver.findElement(By.id('title')).sendKeys('黑泽明')
        });
        it('点击输入框输入内容', async function () {
            await driver.findElement(By.className('CodeMirror-scroll')).click();
            await driver.actions().mouseMove(driver.findElement(By.className('CodeMirror-scroll'))).sendKeys('他不姓黑，不怕黑，选了光').perform();
        });
    });
    describe('用例1：发布分享话题', function () {
        before(async function () {
            driver = new webdriver.Builder().forBrowser('chrome').build();
            await driver.get('http://127.0.0.1:3000/signin');
            await driver.findElement(By.id('name')).sendKeys('imzack');
            await driver.findElement(By.id('pass')).sendKeys('123456');
            await driver.findElement(By.className('span-primary')).click();
        });
        after(async function () {
            let user = new Date().valueOf();
            await driver.takeScreenshot().then(function (imagedata) {
                fs.writeFileSync(rootpath + "/jietu/" + user + '.png', imagedata, 'base64')
            })
            await driver.quit();
        });
        it('点击发布话题按钮', async function () {
            await driver.findElement(By.id('create_topic_btn')).click();
        });
        it('选择板块', async function () {
            await driver.findElement(By.id('tab-value')).click();
        });
        it('选择分享', async function () {
            await driver.findElement(By.xpath('//*[@id="tab-value"]/option[3]')).click();
        });
        it('输入标题', async function () {
            await driver.findElement(By.id('title')).sendKeys('她')
        });
        it('点击输入框输入内容', async function () {
            await driver.findElement(By.className('CodeMirror-scroll')).click();
            await driver.actions().mouseMove(driver.findElement(By.className('CodeMirror-scroll'))).sendKeys('他放假也一个人放').perform();
        });
    });
});