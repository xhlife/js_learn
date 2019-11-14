function sum(arr){
    return arr.reduce(function(x,y) {
        return x+y;
    })
}

var x = sum([1,2,3,4,5]); //15
console.log(x)

