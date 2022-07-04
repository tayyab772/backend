import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8000
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://tayyabBro:3gG25CUxJwXXS8Wv@blog-app.5kzko.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log(`Blog-App listen on port: ${port}, DataBase Connected`)
  )
  .catch((err) => console.log(err));