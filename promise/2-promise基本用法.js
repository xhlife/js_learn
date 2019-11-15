
//生成实例
const promise = new Promise(function(res, rej){
    //  ...some code
    if(/* 异步操作成功 */true){
        res(value);
    }else{
        rej(error)
    }
})

//实例生成后，可以用then方法分别指定resolved状态和rejected状态的回调函数

promise.then(function(value){
    //success
},function(error){
    //failure
})