const outcomes = require('./outcomes');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const TOTAL_DROPS = 17;

const MULTIPLIERS = {
    0: 16,
    1: 9,
    2: 2,
    3: 1.4,
    4: 1.4,
    5: 1.2,
    6: 1.1,
    7: 1,
    8: 0.5,
    9: 1,
    10: 1.1,
    11: 1.2,
    12: 1.4,
    13: 1.4,
    14: 2,
    15: 9,
    16: 16
}

app.post("/playgame", (req, res) => {
    let index = 0;
    const pattern = []
    for (let i = 0; i < TOTAL_DROPS; i++) {
        if (Math.random() > 0.5) {
            pattern.push("R");
            index++;
        } else {
            pattern.push("L");
        }
    }

    const multiplier = MULTIPLIERS[index];
    const possibleOutcomes = outcomes[index];

    res.send({
        point: possibleOutcomes[Math.floor((Math.random() * possibleOutcomes.length || 0)-1)],
        multiplier,
    });
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})