//asking app to listen on port 3001 -in the terminal it should say now listening on port... if it worked correctly 
//https://www.npmjs.com/package/dotenv dotenv is a great way to keep important items like passwords or api keys safe for
const PORT = process.env.PORT || 3002;

const express = require('express');
const app = express();


const fs = require('fs');
const path = require('path');


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
app.use(express.urlencoded({
    extended: true
}));

//static files - specifies the root directory from which to serve static assets https://expressjs.com/en/starter/static-files.html
//adds a middleware - To serve static files such as images, CSS files, and JavaScript file
// https: //www.google.com/search?q=app.use(express.static&rlz=1C5CHFA_enUS956US956&oq=app.use(express.static&aqs=chrome..69i57j0i512l9.1090j0j15&sourceid=chrome&ie=UTF-8
app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    //debugging
    console.log(`API server now on port ${PORT}!`);
});



