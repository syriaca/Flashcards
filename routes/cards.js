const express = require('express');
const router = express.Router();
const { data } = require('../data/flaschardsData.json');
const { cards } = data;

router.get('/', (req, res) => {
    const numberOfCards = cards.length;
    const flashCardId = Math.floor(Math.random() * numberOfCards);
    res.redirect(`/cards/${flashCardId}?side=question`);
});

router.get('/', (req, res) => {
    const { id } = req.params;  
    res.redirect(`/cards/${id}?side=question`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const { hint } = cards[id];
    const text = cards[id][side];
    let sideToShow = 'answer';
    let templateData = { text, id, sideToShow };

    if(side === 'question') {
        templateData.hint = hint;
    } else {
        templateData.sideToShow = 'question';
    }
    res.render('card', templateData);
});

module.exports = router;