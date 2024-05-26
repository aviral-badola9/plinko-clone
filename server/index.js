const express = require('express');
const cors = require('cors');

const app = express();

const routes = require('./routes');

app.use(cors);
app.use('/api', routes);

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})