import cors from "cors";
import "dotenv/config";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import "../passportConfig";
import changePasswordRouter from "./routes/changePassword";
import fetchContentDataLoginRouter from "./routes/fetchContentDataLoginRouter";
import getContentRouter, {getContentExampRouter} from "./routes/getContentRouter";
import getCrystalParallaxRouter from "./routes/getCrystalParallaxRouter";
import loginRouter from "./routes/login";
import postCrystalParallaxRouter from "./routes/postCrystalParallaxRouter";
import registerRouter from "./routes/register";
import updateContentRouter from "./routes/updateContent";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.MONGO_URI,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  "/",
  registerRouter,
  loginRouter,
  changePasswordRouter,
  updateContentRouter,
  fetchContentDataLoginRouter,
  getContentRouter,
  postCrystalParallaxRouter,
  getCrystalParallaxRouter,
  getContentExampRouter,
);

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("connection successful"))
  .on("error", (error) => console.log(error, "connection successful"));

app.listen(port, () =>
  console.log("server running", `running on http://localhost:${port}`)
);
