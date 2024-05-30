function flatten(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}