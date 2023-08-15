const express = require('express');
const app = express();
const redis = require('redis');
const subcribe = redis.createClient();

//subcribe chanel
subcribe.subscribe('ordersystem');
subcribe.on('message', (chanel, message) => {
    console.log(`The chanel SendMail is ${chanel}`);
    console.log(`The message SendMail is `, JSON.parse(message));
})

app.listen(3002, () => {
    console.log('App SendMail running at 3002');
})