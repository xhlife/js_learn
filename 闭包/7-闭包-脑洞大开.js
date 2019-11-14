/* 很久很久以前，有个叫阿隆佐·邱奇的帅哥，发现只需要用函数，就可以用计算机实现运算，而不需要0、1、2、3这些数字和 +、-、*、/这些符号。 */

//实现
//定义数字零
var zero = function(f){
    return function(x){
        return x;
    }
}
//定义数字1
var one = function(f){
    return function(x){
        return f(x)
    }
}

//定义加法
function add(n,m){
    return function(f){
        return function(x){
            return m(f)(n(f)(x))
        }
    }
}


