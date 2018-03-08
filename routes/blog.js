const {google} = require('googleapis');
const blogger = google.blogger('v3');

exports.getblog = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('hi')
    blogger.posts.list({
      key: 'AIzaSyBSn7xW6XcK9HiOjO7iJJ5FnZyEZmQbhE8',
      blogId: '2442885476607155003'
    }, (err, result) => {
      if (err) {
        console.error(err);
      }
      for (let i in result.data.items) {
        console.log(result.data.items[i].title)
        console.log(result.data.items[i].content)
      }
      res.send(result.data.items)
    });
}
