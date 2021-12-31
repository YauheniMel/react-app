const express = require('express');
const path = require('path');
const fs = require('fs');
// const cors = require('cors'); // How can I use it?
const app = express();
const port = process.env.PORT || 5000;
const encrypt = require('./encrypt');

app.use(express.json());
app.use(express.urlencoded());
// app.use(cors());

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

//Security Page

app.post('/login', (req, res) => {
  const data = req.body.body;
  const authData = JSON.parse(data);
  const code = encrypt(authData.login, authData.password);

  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    let users = JSON.parse(data);
    const user = users.filter((item) => item.code == code)[0];

    if (user) {
      // check login
      res.status(200).send({
        ...user,
      });
    } else {
      res.status(300).send('Fail'); // what kind of error?
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
