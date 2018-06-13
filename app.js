const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// Create exrpess server (add it to a const)
const app = express();

// Sandbox values
friends =  [
    ['Halim','El Maalem'],
    ['Julien', 'Bareaud'],
    ['Fabien','Jacques'],
    ['Vivien', 'Le Neez'],
    ['Cécile', 'Perier']
];

// Set view renderer engine
app.set('view engine', 'pug');
// Initialize usage of body-parser module
app.use(bodyParser.urlencoded({extended: false}));
// Initialize usage of cookie-parser module
app.use(cookieParser());

// Create routes
app.get('/', (req, res) => {
    res.render('index', {title: 'Flash Cards Index'});
});

app.get('/card', (req, res) => {
    res.render('card', {prompt: 'Who is buried in Grant\'s tomb ?', hint: 'Remembar blah, blah,blah', title: 'Flash Card'});
});

app.get('/sandbox', (req, res) => {
    res.render('sandbox', {friends, title: 'Sandbox'});
});

app.get('/hello', (req, res) => {
    res.render('hello', {title: 'Hello'});
});

app.post('/hello', (req, res) => {
    res.cookie('name', req.body.username)
    res.render('hello', {name: req.body.username});
});

// Listen to port 3000
app.listen(3000, () => {
    console.log('the application is running now on localhost:3000');
});

// Go to 127.0.0.1:3000, server is ready !