const express = require('express')

const app = express();

const routes = require('./routes');

app.use('/api', routes);

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})