# Pub-Sub redis
## Create app
```bash
npm init -y
```
## Install express, redis
### redis version 3.1.2
```bash
npm i express redis --save
```
### Run redis
```bash
redis-server
```
### Run app
```bash
node order.js
node payment.js
node sendmail.js
```

## Send request
```bash
curl --location 'http://localhost:3000/order'
```