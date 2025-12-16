const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/users', (req, res) => {
  fs.readFile(path.join(__dirname,'..' ,'data', 'moved_users.json'), (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o arquivo');
      return;
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  fs.readFile(path.join(__dirname, '..', 'data', 'moved_users.json'), (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o arquivo');
      return;
    }
    const users = JSON.parse(data);
    const user = users.find(u => u._id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  });
});

module.exports = router;
