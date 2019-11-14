function lazy_sum(arr) {
    var sum = function() {
        return arr.reduce(function (x,y) {
            return x+y;
        })
    }

    return sum;
}
var arr = [1,1,2,3,4]
var f = lazy_sum(arr)
console.log(f) //返回一个函数

//调用f()函数
console.log(f())  

//注意，当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数

var f1 = lazy_sum(arr)

console.log(f === f1); ///false

