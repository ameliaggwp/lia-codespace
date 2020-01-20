var express = require ("express"); 
var app = express();



// Homepage
app.get("/", function(req,res){
  res.send("Hi there, welcome to my assignment");
});

//Speak pages
app.get("/speak/memegene", function(req, res){
  res.send("The Memegene says 'Pretty good'");
});

app.get("/speak/babby", function(req, res){
  res.send("The babby says 'uwu'");
});

app.get("/speak/jj", function(req, res){
  res.send("The JJ says 'Snorf'");
});

// Speak pages: shorter version
app.get("/speak/:animal", function (req, res){
  var sounds={
    pig: "Oink",
    cow:"Moo",
    bat:"Skree"
  }
var animal = req.params.animal;
var sound = sounds[animal];
res.send("The " + animal + "says " + sound);
});

//Repeats
app.get("/repeat/:word/:num", function(req, res){
  var words = req.params.word;
  var nums = req.params.num * 1;
  var str =" ";
  for(var i = 0; i < nums; i++){
    //var str = (str + " " + words);
	str += words + " "
	 //str = str + words
  }
	res.send(str);
});

// Non-pages
app.get("/*", function(req, res){
  res.send("Sorry, page not found");
});

app.listen(3000, function(){
	console.log ("App is up");
});
