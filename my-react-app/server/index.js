const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

const photoData = path.resolve(__dirname, './data/photo-data.json');
const friendsData = path.resolve(__dirname, './data/friends-data.json');
const usersData = path.resolve(__dirname, './data/users-data.json');
const dialogsData = path.resolve(__dirname, './data/dialogs-data.json');

app.get('/photos', (req, res) => {
  res.sendFile(photoData);
});

app.get('/friends', (req, res) => {
  res.sendFile(friendsData);
});

app.get('/users', (req, res) => {
  res.sendFile(usersData);
});

app.get('/dialogs', (req, res) => {
  res.sendFile(dialogsData);
});

app.get('*', (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
