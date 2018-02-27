var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://mz02test:kI7bgRc05v4A3NuN@cluster0-shard-00-00-hbfug.mongodb.net:27017,cluster0-shard-00-01-hbfug.mongodb.net:27017,cluster0-shard-00-02-hbfug.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";


exports.dbconnection = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let name = req.query.name
    let description = req.query.description
    let docUrl = req.query.docUrl

  /*clientPromise.then(client => {
      const db = client.service('mongodb', 'mongodb-atlas').db('mz02test');
      client.login().then(() =>
      db.collection('test').updateOne({owner_id: client.authedId()},{$set:{name: name,
        description: description,
        docUrl: docUrl,
        from: 'ankit'
        }}, {upsert:true})
      ).then(() =>
        db.collection('test').findOne({name: name})
      ).then(docs => {
        console.log("Found docs", docs)
        res.send(docs)
      }).catch(err => {
        console.error(err)
      });
    }); */
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
          let x 
          MongoClient.connect(uri, function(err, client) {
            client.db('mz02test').collection('testing').find({Type: 'Training'}).toArray().then(docs => {
              console.log(docs)
              client.close();
              res.send(docs)
            });
          });
        }
