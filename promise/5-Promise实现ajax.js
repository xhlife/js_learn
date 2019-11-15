const getJSON = function(url){
    const promise = new Promise((resolve,reject) => {
        const handler = () => {
            if (this.readyState !==4) {
                return;
            }
            if (this.status === 200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest()
        client.open('GET',url)
        client.onreadystatechange = handler
        client.responseText = "json"
        client.setRequestHeader('Accept',"application/json")
        client.send()
    })
    return promise;
}

getJSON("/posts.json").then((json) => {
    console.log('Content:' + json);
},(error) => {
    console.error('出错啦',error);
    
})