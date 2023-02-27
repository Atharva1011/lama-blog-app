const express = require("express");

const cookieParser = require("cookie-parser");
const multer = require("multer");

const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

const app = express();

const PORT = process.env.PORT || 8800;

app.use(express.json());
app.use(cookieParser());

const upload = multer({ dest: "./upload/" });

app.post("/api/upload", upload.single("file"), function (req, res) {
  res.status(200).json("Image Has been uploaded");
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
});
