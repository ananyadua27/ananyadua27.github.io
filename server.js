const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/#ananyadua', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/research', (req, res) => res.sendFile(path.join(__dirname, 'views/research.html')));
app.get('/portfolio', (req, res) => res.sendFile(path.join(__dirname, 'views/portfolio.html')));
app.get('/reflections', (req, res) => res.sendFile(path.join(__dirname, 'views/reflections.html')));
app.get('/bookshelf', (req, res) => res.sendFile(path.join(__dirname, 'views/bookshelf.html')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
