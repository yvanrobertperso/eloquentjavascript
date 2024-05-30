function myloop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}
myloop(0, (i) => i < 10, (i) => i + 1, (i) => {
    console.log(i);
});
