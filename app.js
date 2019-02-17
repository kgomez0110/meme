const express = require('express');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
