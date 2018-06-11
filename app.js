const express = require('express');

// Create exrpess server (add it to a const)
const app = express();

// Set view renderer engine
app.set('view engine', 'pug');

// Create routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "Who is buried in grant's tomb ?"});
});

// Listen to port 3000
app.listen(3000, () => {
    console.log('the application is running now on localhost:3000');
});

// Go to 127.0.0.1:3000, server is ready !