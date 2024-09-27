// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     res.json({
//       "hello": "clasona"
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require("express");
const { Client } = require("pg");
const redis = require("redis");
const cors = require("cors");


const app = express();
const port = 3000;

app.use(cors());  // Enable CORS for all routes

// PostgreSQL connection
const db = new Client({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "myappdb",
});

db.connect()
  .then(() => console.log("Connected to Postgres"))
  .catch((err) => console.error("Connection error", err));

// Redis connection
const redisClient = redis.createClient({
  url: "redis://redis:6379",
});

redisClient
  .connect()
  .then(() => console.log("Connected to Redis"))
  .catch((err) => console.error("Redis error", err));

// Basic route
app.get("/", async (req, res) => {
  const redisKey = "message yves";
  const cachedMessage = await redisClient.get(redisKey);

  if (cachedMessage) {
    return res.json({ message: cachedMessage });
  }

  const result = await db.query("SELECT NOW()");
  const message = `Hello from the backend! Time is: ${result.rows[0].now}`;

  await redisClient.set(redisKey, message);
  res.json({ message });
});

//products routs
app.get("/products", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.json(result.rows); // Send products data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error from products");
  }
});


//users route
app.get("/users", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows); // Send products data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error from users");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
