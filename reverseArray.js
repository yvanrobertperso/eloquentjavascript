function reverseNewArray(arr){
    let newArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    temparr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        temparr.push(arr[i]);
        arr.pop();
    }
    for (let i = 0; i < temparr.length; i++) {
        arr.push(temparr[i]);
    }
    return arr;
}