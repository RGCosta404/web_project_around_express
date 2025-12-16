const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

app.use(express.json());
app.use('/api', usersRouter);
app.use('/api', cardsRouter);


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
