const fs = require("fs");

fs.readFile("./lorem_ipsum.txt", "utf-8", (err, content) => {
    console.log(content);
});

console.log("reading content ...");
