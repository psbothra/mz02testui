var Vimeo = require('vimeo').Vimeo

exports.uploadedvideos = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var headers = { 'Authorization': 'fe972adaf375470be9dcb58988ae0034', 'Content-Type': 'application/json'}

  // set credentials
  var client = new Vimeo('51154e93acc1fc74030ddd504f7150e344aa709f',
  '37KAZmfbT1JGzvsISOF3K/yk8GO9YH7/2Hy0lOZdwD5eVpLEC/5crkh5GOHbBDdX/LVlf14WMbTCY3t9WQv4MwI2uWwHGFb6Gl0LQXct/jhjSERtMJPI32tLWSf3b7jW' ,
  'fe972adaf375470be9dcb58988ae0034');

  // call get method to see all uploaded videos
  client.request({path: "/me/videos", method: "GET"}, function (error, body, status_code, headers){
    console.log(body);
  res.end('Body:')
  })
}

exports.createuploadVideoRequest = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var headers = { 'Authorization': '5716aab30da741f33ae51c95d044f354', 'Content-Type': 'application/json'}

  // set credentials
/*  var client = new Vimeo('302b1711ccd9f693e87b531cbafbeb93a0123b3c',
  'rLItS9Efp1vdlXDfBnQGSJ8zhXwvzQ/M2CeS8PG5HT6S8jI5IeFT0iX3HcyH5SuAqQDKwO0dPtEVBzTGV1N0b8e9HASknZ5/cgKdJccrP+84ELimXSYGj2Hkm02/J7at' ,
  '5716aab30da741f33ae51c95d044f354');*/

  var client = new Vimeo('51154e93acc1fc74030ddd504f7150e344aa709f',
  '37KAZmfbT1JGzvsISOF3K/yk8GO9YH7/2Hy0lOZdwD5eVpLEC/5crkh5GOHbBDdX/LVlf14WMbTCY3t9WQv4MwI2uWwHGFb6Gl0LQXct/jhjSERtMJPI32tLWSf3b7jW' ,
  'fe972adaf375470be9dcb58988ae0034');


  // call get method to see all uploaded videos
  client.request(
    {path: "/me/videos", method: "POST", query: {
      upload: {
        "redirect_url" : "http://127.0.0.1:8080"
      }
    }
  }, function (error, body, status_code, headers){
    console.log(body);
    var x = body.upload.upload_link
    res.send(x)
  })
}
