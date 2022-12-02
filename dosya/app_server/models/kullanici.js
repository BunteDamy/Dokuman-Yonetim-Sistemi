var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({
    ad: String,
    soyad: String,
    belge: {type: String, required: true, unique: true}
});
var Kullanici = mongoose.model('Kullanici', kullaniciSchema);

module.exports = Kullanici;