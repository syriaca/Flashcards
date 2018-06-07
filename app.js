const express = require('express');
// Create exrpess server (add it to a const)
const app = express();
// Create routes
app.get('/', (request, response) => {
    response.send('I love coding !');
});
// Listen to port 3000
app.listen(3000);
// Go to 127.0.0.1:3000, server is ready !