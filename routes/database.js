const stitch = require('mongodb-stitch')

exports.dbconnection = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let name = req.query.name
    let description = req.query.description
    let docUrl = req.query.docUrl
    const clientPromise = stitch.StitchClientFactory.create('mz02test-vijbf')
    clientPromise.then(client => {
      const db = client.service('mongodb', 'mongodb-atlas').db('mz02test');
      client.login().then(() =>
      db.collection('test').updateOne({owner_id: client.authedId()},{$set:{name: name,
        description: description,
        docUrl: docUrl,
        }}, {upsert:true})
      ).then(() =>
        db.collection('test').find()
      ).then(docs => {
        console.log("Found docs", docs)
        res.send(docs)
      }).catch(err => {
        console.error(err)
      });
    });
    }
