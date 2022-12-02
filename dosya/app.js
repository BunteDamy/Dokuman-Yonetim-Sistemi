/* --- express modülü kullandığım için bu istek silindi ---
var http = require("http");
*/
var fs = require("fs");

var express = require("express");
var path = require("path");
var app = express();
var ejsLayouts = require("express-ejs-layouts");
var bodyParser = require("body-parser");
var db = require('./app_server/models/db');

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./app_server/views"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(ejsLayouts);
app.use("/public", express.static(path.join(__dirname, "public")));

//yönlendiricilerin eklenmesi routeManagaer'dan yapılmasını sağladım.
require("./app_server/routes/routeManager")(app);

var Kullanici = require('./app_server/models/kullanici');

var yeniKullanici = new Kullanici({
    ad: "Ahmet",
    soyad: "Veli",
    belge: "ahmetveli"
});

yeniKullanici.save(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("dokumanlar kaydedildi.");
    }
});



/* -- Bu bölüm express modülü kullandığım için işlevsiz hâle geldi.

var server = http.createServer(function(req, res){
    if(req.url in yonlendirici){
        yonlendirici[req.url](req, res);
    }
});

*/

app.listen(8000);




