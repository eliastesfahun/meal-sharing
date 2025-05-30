const express = require('express');
const app = express();
const knex = require('database');

const router = express.Router();

 app.get('/all-meals', async (req, res) => {  
    try {
    const [meal] = await knex.raw('SELECT * FROM meals ORDER BY id ASC');
    res.json(meals);
} catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Failed to fetch meals' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);

app.get('/future-meals', async (req, res) => {
    try {
        const [meals] = await knex.raw('SELECT * FROM meals WHERE `when` > NOW()');
        res.json(meals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'could not fetch future meals' });
    }
});

app.get('/past-meals', async (req, res) => {
    try {
        const [meals] = await knex.raw('SELECT * FROM meals WHERE `when` < NOW()');
        res.json(meals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'could not fetch past meals' });
    }
});

app.get('/first-meal', async (req, res) => {
    try {
        const [meals] = await knex.raw('SELECT * FROM meals ORDER BY id ASC LIMIT 1');
        if (meals.length === 0) {
            return res.status(404).json({ error: 'No meals found' });
        }
        res.json(meals[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'could not fetch first meal' });
    }
});

app.get('/last-meal', async (req, res) => {
    try {
        const [meals] = await knex.raw('SELECT * FROM meals ORDER BY id DESC LIMIT 1');
        if (meals.length === 0) {
            return res.status(404).json({ error: 'No meals found' });
        }
        res.json(meals[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'could not fetch last meal' });
    }
}
);  

module.exports = app;




