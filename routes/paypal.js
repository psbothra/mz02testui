var paypal = require('paypal-rest-sdk')

var configVariables = require('../src/variables/config')

paypal.configure({
  'mode': configVariables.PaypalConfig.mode, //sandbox or live
  'client_id': configVariables.PaypalConfig.client_id,
  'client_secret': configVariables.PaypalConfig.client_secret
});

exports.paypalpayment = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://127.0.0.1:5000/",
        "cancel_url": "http://127.0.0.1:5000/"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};


paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});

}
