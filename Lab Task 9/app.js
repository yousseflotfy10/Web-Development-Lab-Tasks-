const express = require("express");
const mongoose = require("mongoose");
const courseRouter = require("./routes/courseRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://yousseflotfy10_db_user:youssef123@cluster0.7nkyfqf.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log(err));

app.use("/courses", courseRouter);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
