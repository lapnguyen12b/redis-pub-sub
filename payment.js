const express = require('express');
const app = express();
const redis = require('redis');
const subcribe = redis.createClient();

//subcribe chanel
subcribe.subscribe('ordersystem');
subcribe.on('message', (chanel, message) => {
    console.log(`The chanel Payment is ${chanel}`);
    console.log(`The message Payment is `, JSON.parse(message));
})

app.listen(3001, () => {
    console.log('App Payment running at 3001');
})