

function http(url, method) {
    let promise = new Promise(function (resovle, reject) {
        setTimeout(function () {
            var data = "new data"
            if (data) {
                resovle(data);
            } else {
                reject("Error: No Data")
            }
        }, 1000);
    })
    return promise
}

http("baidu.com", "Get").then(function (successData) {
    return successData
}).then(function(result){
    console.log(result)
})
.catch(function (err) {
    console.log(err)
})