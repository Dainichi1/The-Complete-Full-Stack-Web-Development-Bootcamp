import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>Hello world!!!!</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1><p>My name is Marco</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>My Contact</h1><p>My phone number is 555-5555</p>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
