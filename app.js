//requre packages 
//bodyparser will allow us to pass info that we gain from post requests
const express = require("express"); 
const bodyParser = require("body-parser");
const app = express(); //represent express module 
var items =[]; //save as collection rather than using single varible to prevent replacement 

app.set('view engine','ejs');
//use urlencoded mode to parse data come from html form 
//extended allows us to post extended object 
app.use(bodyParser.urlencoded({extended: true}));
//public folder will have static functionallity 
app.use(express.static("public"));

//GET METHOD  
// "/" location of the request is at home root 
app.get("/",function(req,res){
var today = new Date();
var options ={
    weekday : "long",
    day :"numeric",
    month :"long"
};
var day = today.toLocaleDateString("en-US",options);

//use render to send variable to html 
res.render("list",{kindOfDay :day, newlistitems :items});

});


//POST method 
app.post("/",function(req,res){

   var item = req.body.newitem;

   items.push(item);
    
    //redirect to get method 
    res.redirect("/");

});

//use listener method to start the server on local host 3000
app.listen(3000,function(){
    console.log("Serer started on port 3000")
});
