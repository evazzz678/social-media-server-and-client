import express from "express";
import bodyParser from "body-parser";
// import dbConnect from './config/dbconfig.js';
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import mongoos from "mongoose";
import {register} from "./controllers/auth.js"
import { createPost } from "./controllers/post.js";
import { verifyToken } from "./middleware/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";


/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();


const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));


/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });


  
/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);



/* MONGOOSE SETUP */
mongoos.connect('mongodb://localhost:27017/socialmediaapp').then(() => {
    console.log("mongodb connect");
}).catch((err) => {
    console.log(err);
})

/* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);


    
// Root route
app.post('/', (req, res) => {
        res.send('connected');
      });
      


    // const port = process.env.PORT || 3001;
    // app.listen(port, () => console.log(`Server running on port ${port}`));
    