var paypal = require('paypal-rest-sdk')
var request = require('request')
var configVariables = require('../src/variables/config')

paypal.configure({
  'mode': configVariables.PaypalConfig.mode, //sandbox or live
  'client_id': configVariables.PaypalConfig.client_id,
  'client_secret': configVariables.PaypalConfig.client_secret
});

exports.paypalpayment = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  let amount = req.query.amount
  let approval_url = ''
  let payment_executeurl = ''
  let return_url = configVariables.ServerUrl.url + '/Orders'
  var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": return_url,
        "cancel_url": configVariables.ServerUrl.url
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": amount,
                "currency": "INR",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "INR",
            "total": amount
        },
        "description": "This is the payment description."
    }]
};

/*  var headers = { 'Username': configVariables.PaypalConfig.client_id, 'Password': configVariables.PaypalConfig.client_secret}

request.post('https://api.sandbox.paypal.com/v1/oauth2/token',
  {form: create_payment_json,  headers: headers}, function(error, response, body) {

  console.log(body)

    if(!error && response.statusCode == 201){
   //   console.log(body)
      var x = JSON.parse(body)
      console.log("sucesss => " + response);
    //  console.log(x.payment_request.longurl)
//        response.redirect('https://www.instamojo.com/api/1.1/payment-requests/'+x.payment_request.longurl)
      res.redirect('http://www.google.com')
  //   res.redirect(x.payment_request.longurl)

    }else{
      res.end("error => " + error)
    }
})*/


paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
        for(let i in payment.links) {
          if ( payment.links[i].rel == 'approval_url') {
            approval_url = payment.links[i].href
          } else if (payment.links[i].rel == 'execute') {
            payment_executeurl = payment.links[i].href
          }
        }
        res.send(approval_url)
    }
});

}
