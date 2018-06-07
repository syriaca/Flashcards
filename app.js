const express = require('express');
// Create exrpess server (add it to a const)
const app = express();
// Create routes
app.get('/', (req, res) => {
    res.send('<h1>I love coding !</h1>');
});
app.get('/hello', (req, res) => {
    res.send('<h1>Hello Javascript Developper !</h1>');
});
// Listen to port 3000
app.listen(3000, () => {
    console.log('the application is running now on localhost:3000');
});
// Go to 127.0.0.1:3000, server is ready !