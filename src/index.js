import express from "express";

const app = express();

const PORT = 8080;

app.use("/hello", (req, res) => {
  res.status(200).json({data: "hello world"})
});

app.use("/", (req, res) => {
  res.json("Hello Baby")
})

app.listen(PORT, () => console.log(`Server start at http://localhost:${PORT}`));
