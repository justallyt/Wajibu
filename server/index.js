const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const connectToDatabase = require("./dbconfig/db.js");
const clientRoutes = require("./routes/clientRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
//Initialize dotenv for usage
dotenv.config();

//Create port for server
const port = process.env.SERVER_PORT || 8000;

//Initialize express for use
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const corsConfig = {
    credentials: true,
    origin: `${process.env.CLIENT_APP_URL}`,
};
app.use(cors(corsConfig))

/* Routes */
app.use("/api/client", clientRoutes)
app.use("/api/user", adminRoutes);

// app.use('/', (req, res) => {
//         res.status(200).send("Welcome to Pazalab")
// } )

app.listen(port, () => console.log(`Server listening at port ${port}`));

/* Connect to Database */
connectToDatabase();