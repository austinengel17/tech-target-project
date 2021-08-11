//loading local modules
const englishController = require("./controllers/englishController");
const spanishController = require("./controllers/spanishController");
const frenchController = require("./controllers/frenchController");
const germanController = require("./controllers/germanController");
const italianController = require("./controllers/italianController");


//Loading third party modules
const express = require('express');

//Set up express app
const app = express();

//setting template engine
app.set('view engine', 'ejs');



app.get('/', function(req,res){
    res.render('home');
})

app.use('/public', express.static('public'));

englishController(app);
spanishController(app);
frenchController(app);
germanController(app);
italianController(app);


app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});