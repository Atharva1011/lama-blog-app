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

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
});
