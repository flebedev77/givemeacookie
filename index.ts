import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("YESS!!");
  console.log(req.body);
  res.json({ ok: true });
});

app.get("/:info", (req, res) => {
  console.log(req.params.info);
  res.send("ok");
});

//@ts-ignore
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
