import express from "npm:express@4.18.2";
import imagesIndex from "./images/index.json" assert { type: "json" };

const app = express();

app.use(express.json())

app.get("/api/images", (req, res) => {
  res.send(imagesIndex);
});

app.use("/images", express.static("images"));

app.listen(Deno.env.get("PORT") || 8000);
