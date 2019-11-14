function count() {
    var arr = []
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i; //返回一个函数表达式
        })
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1(), f2(), f3());
//期待输出  1，4，9  实际输出：16，16，16
//如果采用ES6的let来定义i则会输出1，4，9
//使用var导致这样的结果的原因：返回函数引用了变量i,但它并非立刻执行函数。等到3个函数都返回时，他们所引用的变量i已经变成了4，因此最终结果为16

//返回闭包时牢记：返回函数不要引用任何的循环变量，或者后续会发生变化的变量。
//如果一定要引用循环变量呢？方法是重新再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何变化，已绑定的函数参数的值不变。

//如下：
function count1() {
    var arr = []
    for (var i = 1; i <= 3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n
            }
        })(i));
    }
    return arr;
}

var results = count1()
var f1 = results[0]
var f2 = results[1]
var f3 = results[2]
console.log(f1());
console.log(f2());
console.log(f3());

//上面用到了立刻执行函数 --i的值会立刻计算。
(function(x) {
    console.log('这是一个立刻执行函数，结果为：' + x*x) 
})(3);  //9
