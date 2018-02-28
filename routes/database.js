var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://mz02test:kI7bgRc05v4A3NuN@cluster0-shard-00-00-hbfug.mongodb.net:27017,cluster0-shard-00-01-hbfug.mongodb.net:27017,cluster0-shard-00-02-hbfug.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";


exports.uploaddata = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let name = req.query.name
    let description = req.query.description
    let docUrl = req.query.docUrl

    MongoClient.connect(uri, function(err, client) {
      client.db('mz02test').collection('testing').insertOne({
        Type: 'Training',
        Name: name,
        Desc: description,
        Docurl: docUrl
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
