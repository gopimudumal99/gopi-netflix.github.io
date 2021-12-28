const express = require("express")
const path = require('path')

let initial_path = path.join(__dirname, "public")

let app = express();
app.use(express.static(initial_path)) //express.static() method to make public folder as a static path

app.get("/", (req, res) => { 
    res.sendFile(path.join(initial_path, "index.html"));
})
app.listen("3000", (req,res) => { 
    console.log("Listening on port ...3000")
})