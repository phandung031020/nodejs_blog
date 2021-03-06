const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hds = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect to DB

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
//HTTP logger
//app.use(morgan('combined'));

// teplate engine
app.engine(
    '.hbs',
    hds.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(app);

//127.0.0.1 -> localhost
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
