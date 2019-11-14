var scope = "global scope"  //全局变量
function checkcope() {
    var that = this;
    var scope = 'local scope' //局部变量
    function f() {
        return scope;
    }
    //console.log(this)
    return f();   //这里返回的是函数f的执行结果
}

console.log(checkcope());    //=》打印局部的 "local scope"
//很清楚上面为什么返回local scope  ,变量是往上寻找的，如果本地没有，则在window上找

//对上面的代码进行改动
function Checkscope1() {
    var scope = 'local scope'
    function f() {
        return scope;
    }
    return f;   //这里我们返回函数体本身，即该函数还没有被执行
}
//下面执行该函数
var x = Checkscope1()()   //checkscope1()得到了f这个函数。再加一个()执行f
console.log(x);       //=》》》这里也是输出local scope

var uniqueInteger = (function () {
    var counter = 0;
    return function () {
        return counter++;
    }
})();

console.log(uniqueInteger());  ///0
console.log(uniqueInteger());  ///1
//上面的代码，当外部函数返回之后，其他的任何代码都无法访问counter变量，只有内部的函数才能访问到它。

//如果我们需要对这个counter不单单是给uniqueinteger使用，我们可以返回一个包含多个方法的对象
console.log('---------');

function counter() {
    var n = 0;
    return {
        count: function () {
            return n++;
        },
        reset: function () {
            return n = 0;
        }
    }
}

var c=counter(),d=counter()
console.log(c.count());  //0
console.log(d.count());  //0
console.log(c.reset());  //重置n //输出0  
console.log(c.count());  //0   //因为count和reset方法共享状态
console.log(d.count());  //1


/* function Person(){
}
var person = new Person()
console.log(person.__proto__ === Person.prototype); */
function f(){
    console.log(this)  //输出=》{}   即是这个函数本身，函数也是一个对象
    console.log('aa')
}
f.apply(this)


