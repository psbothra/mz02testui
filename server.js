var history = require('connect-history-api-fallback');
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();
app.use(history());
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;

var vimeolocation = require('./routes/vimeoAPI')
var dblocation = require('./routes/database')
// var doclocation = require('./routes/firebasestorage')

  // create upload request to vimeo
  app.get('/uploadvideo', vimeolocation.createuploadVideoRequest)

  // get all uploaded uploaded videos
  app.get('/getvideo', vimeolocation.uploadedvideos)

  // upload documentUrl to database
  app.get('/uploaddata', dblocation.uploaddata)

  //upload videoUrl to database
  app.get('/uploadvideoUrl', dblocation.uploadvideoUrl)

  //retrieve data from database
  app.get('/getdata', dblocation.getdata)

  //retrieve tarining data from database
  app.get('/gettrainingdata', dblocation.gettrainingdata)

  // call upload document
//  app.get('/uploaddoc', doclocation.uploaddocument)

app.listen(port);
console.log('server started '+ port);
