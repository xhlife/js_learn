function loadImageAsnyc(url){
    return new Promise(function(resolve,reject){
        const image = new Image();

        image.onload = function(){
            resolve(image)
        }
        image.onerror = function(){
            reject(new Error("could not load image at " + url))
        }
        image.src = url;
    })
}

//上面的代码使用Promise包装一个图片加载的异步操作。如果成功就调用resolve方法，否则就调用/reject方法