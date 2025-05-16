
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Import API routes
app.use('/api/add-user', require('./api/addUser'));
app.use('/api/create-panel', require('./api/create-panel'));
app.use('/api/delete-panel', require('./api/delete-panel'));
app.use('/api/delete-user', require('./api/delete-user'));
app.use('/api/list-users', require('./api/list-users'));
app.use('/api/login', require('./api/login'));
app.use('/api/panels', require('./api/panels'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/owner', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/owner.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
