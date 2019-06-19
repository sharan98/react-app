"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_SYLLABUS_URI; // "mongodb+srv://sharan:1234abcd@cluster0-1tdgp.mongodb.net/test?retryWrites=true&w=majority";

function connectToDatabase (uri) {
  console.log('=> connect to database');

  return MongoClient.connect(uri, { useNewUrlParser: true })
    .then(db => {
      return db;
    });
}

function queryDatabase (d, courseCode) {
  console.log('=> query database');
  var dbo = d.db('bmsce');
  console.log(dbo);
  return dbo.collection('syllabus').find({'courseCode': courseCode}).toArray()
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

  console.log('event: ', event);
  // console.log(event.params.querystring);
  const courseCode = event.courseCode;
  connectToDatabase(MONGODB_URI)
    .then(db => queryDatabase(db, courseCode))
    .then(result => {
      console.log('=> returning result: ', result);
      callback(null, result);
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};