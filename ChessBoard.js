let length = 16;
let large = 16;
for (let i = 0; i < length; i++) {
    let output = "";
    for (let j = 0; j < large; j++) {
        if ((i + j) % 2 === 0) {
            output += " ";
        } else {
            output += "#";
        }
    }
    console.log(output);
}