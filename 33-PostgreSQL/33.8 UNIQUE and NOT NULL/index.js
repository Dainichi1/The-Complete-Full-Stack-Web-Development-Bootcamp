import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "marco",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];

  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body.country; // prendo il valore scritto nell'input

  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1", // $1 prendo il primo valore dell'array => se in [input] ho Italy allora $1 è Italy
    [input],
  );

  if (result.rows.length !== 0) {
    const data = result.rows[0]; // prima riga del risultato es. { country_code: "IT" }
    const countryCode = data.country_code; // "IT"

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);

    res.redirect("/"); //“non restare su /add, torna alla home /”
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
