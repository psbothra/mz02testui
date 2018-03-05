var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://mz02test:kI7bgRc05v4A3NuN@cluster0-shard-00-00-hbfug.mongodb.net:27017,cluster0-shard-00-01-hbfug.mongodb.net:27017,cluster0-shard-00-02-hbfug.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";


exports.uploaddata = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let name = req.query.name
    let description = req.query.description
    let docUrl = req.query.docUrl
    let vimeoId = req.query.vimeoId
    let courseFee = req.query.courseFee

    MongoClient.connect(uri, function(err, client) {
      client.db('mz02test').collection('testing').insertOne({
        Type: 'Training',
        Name: name,
        Desc: description,
        Docurl: docUrl,
        Vimeoid: 'https://player.vimeo.com/video/' + vimeoId + '?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0',
        courseFee: courseFee
      }).then(docs => {
        console.log(docs.ops)
        client.close();
        res.send(docs.ops)
      });
    });
    }

    exports.uploadvideoUrl = function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let name = req.query.name
        let videoUrl = req.query.videoUrl
        console.log(videoUrl)

      /*clientPromise.then(client => {
          const db = client.service('mongodb', 'mongodb-atlas').db('mz02test');
          client.login().then(() =>
          db.collection('test').updateOne({owner_id: client.authedId()},{$set:{name: name,
            videoUrl: videoUrl
            }}, {upsert:true})
          ).then(() =>
            db.collection('test').findOne({videoUrl: videoUrl})
          ).then(docs => {
            console.log("Found docs", docs)
            res.send(docs)
          }).catch(err => {
            console.error(err)
          });
        });*/
        }

        exports.getdata = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').find({Type: 'Training'}).toArray().then(docs => {
              // console.log(docs)
              client.close();
              res.send(docs)
            });
          });
        }

        exports.gettrainingdata = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          let name = req.query.name
          console.log(name)
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').findOne({Name: name}).then(docs => {
            //  console.log(docs)
              client.close();
              res.send(docs)
            });
          });
        }

        exports.updatename = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          let name = req.query.name
          let key = req.query.key
          console.log(key + name)
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').updateOne(
              { "Name" : key},
              { $set: {Name: name}}).then(docs => {
              client.db('mz02test').collection('testing').findOne({Name: name}).then(doc =>{
                client.close();
                res.send(doc)
              });
            });
          });
        }

        exports.updatedesc = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          let desc = req.query.desc
          let key = req.query.key
          console.log(key)
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').updateOne(
              { "Name" : key},
              { $set: {Desc: desc}}).then(docs => {
              client.db('mz02test').collection('testing').findOne({Name: key}).then(doc =>{
                client.close();
                res.send(doc)
              });
            });
          });
        }

        exports.updatedocUrl = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          let docUrl = req.query.docUrl
          let key = req.query.key
          console.log(key)
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').updateOne(
              { "Name" : key},
              { $set: {Docurl: docUrl}}).then(docs => {
              client.db('mz02test').collection('testing').findOne({Name: key}).then(doc =>{
                client.close();
                res.send(doc)
              });
            });
          });
        }

        exports.updatevideoUrl = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          let vimeoId = req.query.vimeoId
          let key = req.query.key
          console.log(key)
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').updateOne(
              { "Name" : key},
              { $set: {Vimeoid: 'https://player.vimeo.com/video/' + vimeoId + '?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0'}}).then(docs => {
              client.db('mz02test').collection('testing').findOne({Name: key}).then(doc =>{
                client.close();
                res.send(doc)
              });
            });
          });
        }

        exports.deletedata = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          let name = req.query.name
          console.log(name)
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').deleteOne({Name: name}).then(docs => {
              console.log(docs)
              res.send('Data deleted')
            });
          });
        }

        exports.insertorders = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          let name = req.query.name
          let emailId = req.query.emailId
          let token = req.query.token
          let paymentId = req.query.paymentId
          let PayerID = req.query.PayerID

          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').insertOne({Name: name}).then(docs => {
              console.log(docs)
              res.send('Hello')
            });
          });
        }

        exports.getorders = function (req, res) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').insertOne({Name: name}).then(docs => {
              console.log(docs)
              res.send('Hello')
            });
          });
        }
