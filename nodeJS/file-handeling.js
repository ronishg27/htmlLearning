const fs = require("fs");

// synchronous read and write

// let content = "Hello world!";
// fs.writeFileSync("hello.txt", content);

// let read = fs.readFileSync("hello.txt", "utf-8");
// console.log(read);

// asynchronous file read
fs.readFile(".\\nodeJS\\hello.txt", "utf-8", (err, data) => {
  if (!err) console.log(data);
  else console.log("error opening file");
});
console.log("before displaying file content");
