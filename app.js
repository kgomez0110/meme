const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))

const port = 8080

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
