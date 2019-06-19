"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_SYLLABUS_URI; 
// mongodb+srv://atlasAdmin:f1rstpass@cluster0-vush7.mongodb.net/test?retryWrites=true&w=majority or Atlas connection string
// mongodb+srv://sharan:1234abcd@cluster0-1tdgp.mongodb.net/test?retryWrites=true&w=majority

let cachedDb = null;


function connectToDatabase (uri) {

  console.log('=> connect to database');



  if (cachedDb) {

    console.log('=> using cached database instance');

    return Promise.resolve(cachedDb);

  }



  return MongoClient.connect(uri, { useNewUrlParser: true })

    .then(db => {

      cachedDb = db;

      return cachedDb;

    });

}


function queryDatabase (d) {
  console.log('=> query database');
  var dbo = d.db('bmsce');
  return dbo.collection('syllabus').find({}).limit(1).toArray()
    .then((res) => { return { statusCode: 200, body: res }; })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      return { statusCode: 500, body: 'error' };
    });
}

module.exports.handler = (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;


  console.log('event: ', event);

  connectToDatabase(MONGODB_URI)
    .then(db => queryDatabase(db))
    .then(result => {
      console.log('=> returning result: ', result);
      callback(null, result);
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};