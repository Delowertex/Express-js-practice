var express = require("express");

app = express();

app.get("/", function(req, res){
    res.send("Hellow express js");
});
app.post("/about", function(req, res){
    res.send("Hellow about");
});
app.put("/contact", function(req, res){
    res.send("Hellow contact");
});
app.delete("/terms", function(req, res){
    res.send("Hellow terms");
});

//simple response
app.get("/one", function(req, res){
    res.send("simple string respond");
});

//status code 
app.post("/two", function(req, res){
    res.status(555).end("response status code");
});

//json response
app.get("/three", function(req, res){
    var jesonData = [
        {
            "name":  "Delower",
            "age": "36",
            "class" : "ten"
        }
    ]
    res.send(jesonData);
});

//response downlaod
app.post("/four", function(req, res){
    res.download("./image/images.jpg");
});

//response redirect
app.post("/bangladesh", function(req, res){
    res.redirect("http://localhost:8000/india");
});

app.post("/india", function(req, res){
    res.send("This is india");
});

//response header
app.post("/five", function(req, res){
    res.append("name", "Delower");
    res.append("city", "Comilla");
    res.append("age", "38");
    res.status(202).end("Helow append header");
});


app.listen(8000, function(){
    console.log("server run success");
});