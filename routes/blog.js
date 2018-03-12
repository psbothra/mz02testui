var {google} = require('googleapis');
var blogger = google.blogger('v3');
var configVariables = require('../src/variables/config')

exports.getblog = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    blogger.posts.list({
      key: configVariables.BlogConfig.key,
      blogId: configVariables.BlogConfig.blogId,
    }, (err, result) => {
      if (err) {
        console.error(err);
      }
      res.send(result.data.items)
    });
}
