function init(){
    let name = 'abc'
    function printName(){
        console.log(name)
    }
    printName();
}

init();

function mkFunc(){
    let user = 'xiaoming';
    function getuser(){
        return user;
    }
    return getuser()
}
let getuser = mkFunc()
console.log(getuser)