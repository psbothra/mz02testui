var {google} = require('googleapis');
var blogger = google.blogger('v3');

exports.getblog = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    blogger.posts.list({
      key: 'AIzaSyBSn7xW6XcK9HiOjO7iJJ5FnZyEZmQbhE8',
      blogId: '2442885476607155003'
    }, (err, result) => {
      if (err) {
        console.error(err);
      }
      res.send(result.data.items)
    });
}
