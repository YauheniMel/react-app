const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

const photoData = path.resolve(__dirname, './data/photo-data.json');
const friendsData = path.resolve(__dirname, './data/friends-data.json');
const usersData = path.resolve(__dirname, './data/users-data.json');
const dialogsData = path.resolve(__dirname, './data/dialogs-data.json');

//Photo page

app.get('/photos/:pageNumber', (req, res) => {
  const { pageNumber } = req.params;

  fs.readFile(photoData, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).splice(
      (pageNumber - 1) * 5,
      pageNumber * 5
    );

    res.send(resData);
  });
});

app.get('/photo/:photoId', (req, res) => {
  const { photoId } = req.params;

  fs.readFile(photoData, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).filter((item) => item.id == photoId);

    res.send(resData);
  });
});

//Friends Page

app.get('/friends/:pageNumber', (req, res) => {
  const { pageNumber } = req.params;

  fs.readFile(friendsData, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).splice(
      (pageNumber - 1) * 5,
      pageNumber * 5
    );

    res.send(resData);
  });
});

app.get('/friend/:friendId', (req, res) => {
  const { friendId } = req.params;

  fs.readFile(friendsData, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).filter((item) => item.id == friendId);

    res.send(resData);
  });
});

// Users Page

app.get('/users/:pageNumber', (req, res) => {
  const { pageNumber } = req.params;
  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).splice(
      (pageNumber - 1) * 5,
      pageNumber * 5
    );

    res.send(resData);
  });
});

app.get('/user/:targetUser', (req, res) => {
  const { targetUser } = req.params;

  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).filter((item) => item.id == targetUser);

    res.send(resData);
  });
});

//Dialogs Page

app.get('/dialogs', (req, res) => {
  res.sendFile(dialogsData);
});

app.get('*', (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
