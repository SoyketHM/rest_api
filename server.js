const express = require('express');
const users = require('./api/routes/user');

const app = express();

app.use('/api/users', users);

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, () => console.log(`Server app listening on port ${PORT}...`));





