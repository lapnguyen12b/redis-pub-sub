const express = require('express');
const app = express();
const redis = require('redis');
const publish = redis.createClient();

app.get('/order', (req, res) => {
    const order = [
        {
            product: '1',
            price: 3000
        },
        {
            product: '2',
            price: 4000
        }
    ]

    // send to Payment service
    // send to SendMail service
    publish.publish('ordersystem', JSON.stringify(order));

    res.json({
        status: 'success',
        message: 'Thank you!'
    })
})

app.listen(3000, () => {
    console.log('App Order running at 3000');
})