const express = require("express");
const connectdb = require("./config/db")
const Player = require("./models/playersModels");
const playerRouter = require("./routes/playerRoutes");
const app = express();

const cors = require('cors')

app.use(express.json());
app.use(cors());

app.use("/api/v1/players", playerRouter)

// app.get("/", async(req,res)=> {
//    const data = await new Player({
//         first_name : "Virat",
//         last_name : "Kohli",
//         email : "Kohli@gmil.com",
//         phone : 986443464,
//         role : "Batsman",
//         available: true,
//    }).save();

//    res.send({
//       data
//    })
// })




app.listen(3000, ()=> {
 console.log("Server is listening on the port 3000")
})


connectdb();











// password - yiQhsKFCGtA67yiG

// mongodb+srv://narashima:<db_password>@cluster0.m95ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0