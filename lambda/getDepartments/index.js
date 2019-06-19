"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_SYLLABUS_URI; //"mongodb+srv://sharan:1234abcd@cluster0-1tdgp.mongodb.net/test?retryWrites=true&w=majority";

function connectToDatabase (uri) {
  console.log('=> connect to database');

  return MongoClient.connect(uri, { useNewUrlParser: true })
    .then(db => {
      return db;
    });
}

function queryDatabase (d) {
  console.log('=> query database');
  var dbo = d.db('bmsce');
  return dbo.collection('syllabus').distinct("department")//.toArray()
    .then((res) => {
      d.close();
      return { statusCode: 200, body: res };
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      d.close();
      return { statusCode: 500, body: 'error' };
    });
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  console.log(event.params.querystring);
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