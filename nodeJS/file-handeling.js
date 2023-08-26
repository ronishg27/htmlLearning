const fs = require("fs");
let content = "Hello world!";
fs.writeFileSync("hello.txt", content);

let read = fs.readFileSync("hello.txt", "utf-8");
console.log(read);
