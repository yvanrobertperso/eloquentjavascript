function range(start, end, step=1) {
    var arr = [start];
    if (step < 0) {
        for (var i = start; i += step, i >= end; arr.push(i));
    }
    else {
    for (var i = start; i += step, i <= end; arr.push(i));
    }
    return arr;
}

function sum(arr) {
    let count = 0;
    for (let num of arr) {
        count += num;
    }
    return count;
}