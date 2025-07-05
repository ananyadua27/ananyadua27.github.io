const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/research.html', (req, res) => res.sendFile(path.join(__dirname, 'views/research.html')));
app.get('/portfolio.html', (req, res) => res.sendFile(path.join(__dirname, 'views/portfolio.html')));
app.get('/travel.html', (req, res) => res.sendFile(path.join(__dirname, 'views/travel.html')));
app.get('/bookshelf.html', (req, res) => res.sendFile(path.join(__dirname, 'views/bookshelf.html')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
