const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/cards', (req, res) => {
  fs.readFile(path.join(__dirname,'..' ,'data', 'moved_cards.json'), (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o arquivo');
      return;
    }
    const cards = JSON.parse(data);
    res.json(cards);
  });
});

module.exports = router;
