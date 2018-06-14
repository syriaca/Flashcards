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
// Initialize middleware usage of body-parser module
app.use(bodyParser.urlencoded({extended: false}));
// Initialize middleware usage of cookie-parser module
app.use(cookieParser());

// Create routes
app.get('/', (req, res) => {
    const name = req.cookies.username;
    if(name)  {
        res.render('index', {title: 'Flash Cards Index', name});
    } else {
        res.redirect('/hello');
    }
});

app.get('/card', (req, res) => {
    res.render('card', {prompt: 'Who is buried in Grant\'s tomb ?', hint: 'Remembar blah, blah,blah', title: 'Flash Card'});
});

app.get('/sandbox', (req, res) => {
    res.render('sandbox', {friends, title: 'Sandbox'});
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if(name) {
        res.redirect('/');
    } else {
        res.render('hello', {title: 'Hello'});
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    const name = req.cookies.username;
    if(name) {
        res.clearCookie('username');
        res.redirect('/hello');
    }
});

app.use((req, res, next)=> {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);    
});

// Listen to port 3000
app.listen(3000, () => {
    console.log('the application is running now on localhost:3000');
});

// Go to 127.0.0.1:3000, server is ready !