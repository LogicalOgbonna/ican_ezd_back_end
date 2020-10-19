const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const cors = require('cors');


const authRoute = require("./routes/v1/auth");
const AdminRoute = require("./routes/v1/admin");
const userRoute = require("./routes/v1/user");
const api = require("./routes/v1/angels");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);
app.use(cors())
app.use("/api/user", authRoute);
app.use("/api/admin", AdminRoute);
app.use("/api/attendant", userRoute);
app.use("/api", api);
const port = process.env.PORT || 5000;
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGODBURI, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(port, () => console.log("App Running on Port " + port));