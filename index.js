const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));


app.use('/images', express.static(path.join(__dirname, 'images')));


app.get('/', (req, res) => {
  res.render('home1', { getRandomPrice });
});


function getRandomPrice() {
  return (Math.random() * (100 - 10) + 10).toFixed(2);
}

app.get("/custlog", function(req,res){

  res.render("customerlogin");

})
app.get("/signup", function(req,res){

  res.render("customersignup");

})

app.get("/checkout", function(req,res){

  res.render("checkout");

})
  
app.post("/payment", function(req,res){

  res.render("payment");

})
app.get("/delivery", function(req,res){

    res.render("deliv");
  
})


app.post("/paymentsucc", function(req,res){

  res.render("ordsuc");

})
app.get("/backhome", function(req,res){

  res.render("home1");

})
app.get("/mainhome", function(req,res){

  res.redirect("/");

})
app.get("/home2", function(req,res){

  res.redirect("/");

})
app.get("/loginre", function(req,res){
 
  res.redirect("/custlog");
})


app.get("/viewlist", function(req,res){

  res.render("viewwhishlist");

})
app.get("/orderhistory", function(req,res){
 
  res.render("orderhistory");
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
