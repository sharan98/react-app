const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://atlasAdmin:f1rstpass@cluster0-vush7.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sample_airbnb");
  dbo.collection('listingsAndReviews')
  .find({}, {projection: {'name': 1}})
  .limit(1).
  toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    return;
  });
});

exports.handler = async (event) => {
  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda! How are you?'),
  };
  return response;
};
