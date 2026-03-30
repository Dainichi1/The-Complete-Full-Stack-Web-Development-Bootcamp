const fs = require("fs");

fs.writeFile("message.txt", "HELLO!", (err) => {
  if (err) throw err;
  console.log("FILE SALVATO");
});

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
