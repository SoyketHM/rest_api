const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const users = require('./api/routes/user');

// connect to mongoose
mongoose.connect('mongodb://soyket:handymama123@ds151452.mlab.com:51452/nodekb', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB Active...');
});

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', users);

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, () => console.log(`Server app listening on port ${PORT}...`));





