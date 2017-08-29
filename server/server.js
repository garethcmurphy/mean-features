var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jetbrains');


var Product = mongoose.model('Product', {name: String});

var product = new Product({name: "Webstorm"});


app.get("/", function (req, res) {
    Product.find(function (err, products) {
        res.send(products);
    })

})


app.listen(3000);