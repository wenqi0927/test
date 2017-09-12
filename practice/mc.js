var app = require('./app')
var assert = require('assert')
describe('app', function () {
    
    describe("sayHello()",function(){
        it('sayHello should be return hello',function(){
            let result =  app.sayHello()
            assert.equal('hello',result)
        })
        it('sayhello should return a string',function(){
            let result =  app.sayHello()
            assert.equal('string',typeof(result))
        })
    })

    describe("add()",function(){
        it('add(1,2) should get the result 3',function(){
            let result = app.add(1,2)
            assert.equal(3,result)
        })
    })
    
});