var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var Beer = new Schema({
  name: String,
  type: String,
  abv: Number
});


mongoose.connect(process.env.MONGO_URI);

module.exports = mongoose.model('beers', Beer);
