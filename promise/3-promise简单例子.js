function timeout(ms) {
    return new Promise((resolve,reject) =>{
        setTimeout(resolve,ms,'done');
    })
}

timeout(100).then((value) => {
    console.log(value);
})

//上述代码中，timeout方法饭返回一个Promise实例，表示一段时间后才会发生的结果。过了指定时间Promise实例状态变为resolved,就会触发then方法绑定的回调函数。


//Promise新建后就会立刻执行
let promise = new Promise(function(resolve,reject){
    console.log('Promise');
    resolve()
})

promise.then(function(){
    console.log('resolved.');
})
console.log('Hi!');

//Promise  Hi!  resolved
//Promise建立后立刻执行，所以首先输出的是Promise.然后。then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以/resolve最后输出。
