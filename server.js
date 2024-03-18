const express = require("express");
const upload = require("./middlewares/uploadImage");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload-image", upload.single("image"), async (req, res) => {
  if (req.file) {
    return res.json({
      erro: false,
      mensagem: "Upload realizado com sucesso!",
    });
  }
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000!");
});
