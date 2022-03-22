const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
const encrypt = require('./encrypt');

app.use(express.json());
app.use(express.urlencoded());

const photoData = path.resolve(__dirname, './data/photo-data.json');
const usersData = path.resolve(__dirname, './data/users-data.json');
const dialogsData = path.resolve(__dirname, './data/dialogs-data.json');

//Photo page

app.get('/photos/id:id/:pageNumber', (req, res) => {
  const { pageNumber, id } = req.params;
  fs.readFile(photoData, (err, data) => {
    if (err) throw new Error(err);

    let resData = JSON.parse(data).filter((item) => item.userId == id);
    const totalPages = Math.ceil(resData[0].photos.length / 5); // hard code
    resData = {
      data: resData[0].photos.splice((pageNumber - 1) * 5, 5),
      totalPages
    };

    res.send(resData);
  });
});

//Friends Page

app.get('/friends/id:id/:pageNumber', (req, res) => {
  const { pageNumber, id } = req.params;

  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    const arrFriendId = JSON.parse(data).filter((item) => item.id == id)[0]
      .friends;

    const friends = [];

    arrFriendId.forEach((item) => {
      JSON.parse(data).forEach((item2) => {
        if (item2.id == item) friends.push(item2);
      });
    });

    const resData = friends.splice((pageNumber - 1) * 5, 5);

    res.send(resData);
  });
});

app.get('/friend/:friendId', (req, res) => {
  const { friendId } = req.params;

  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).filter((item) => item.id == friendId);

    res.send(resData);
  });
});

// Users Page

app.get('/users/:id/:pageNumber', (req, res) => {
  const { pageNumber, id } = req.params;

  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    let users = JSON.parse(data).filter((item) => item.id != id);

    const usersId = JSON.parse(data).filter((item) => item.id == id)[0].friends;

    usersId.forEach((item) => {
      users.forEach((item2) => {
        if (item2.id == item) {
          item2.isFriend = true;
          return;
        }
      });
    });

    const resData = users.splice((pageNumber - 1) * 5, 5);

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

// follow/unfollow
app.post('/user/id:id/:userId', (req, res) => {
  const { id, userId } = req.params;

  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    const users = JSON.parse(data).map((item) => {
      if (item.id == id) {
        item.friends.push(+userId);
      }

      return item;
    });

    fs.writeFile(usersData, JSON.stringify(users), (err) => {
      if (err) throw new Error(err);

      res.send('Done');
    });
  });
});

app.delete('/user/id:id/:userId', (req, res) => {
  const { id, userId } = req.params;

  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    const users = JSON.parse(data).map((item) => {
      if (item.id == id) {
        item.friends = item.friends.filter((item) => item != userId);
      }

      return item;
    });

    fs.writeFile(usersData, JSON.stringify(users), (err) => {
      if (err) throw new Error(err);

      res.send('Done');
    });
  });
});

//Dialogs Page

app.get('/dialogs/:id', (req, res) => {
  const id = req.params.id;

  fs.readFile(dialogsData, (err, data) => {
    if (err) throw new Error(err);

    const arrId = [];
    JSON.parse(data).forEach((item) => {
      if (item.userId == id) {
        const id = item.dialogs.map((item) => item.userId);

        arrId.push(...id);
      }
    });

    fs.readFile(usersData, (err, data) => {
      if (err) throw new Error(err);

      let usersName = [];

      arrId.forEach((item) => {
        JSON.parse(data).forEach((item2) => {
          if (item2.id == item) {
            const userName = {
              firstName: item2.firstName,
              lastName: item2.lastName,
              id: item2.id
            };

            usersName.push(userName);
          }
        });
      });

      res.send(usersName);
    });
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Resource not found');
});

//Security Page

app.post('/login', (req, res) => {
  const data = req.body.body;
  const authData = JSON.parse(data);
  const token = encrypt(authData.login, authData.password);

  fs.readFile(usersData, (err, data) => {
    if (err) throw new Error(err);

    let users = JSON.parse(data);
    const user = users.filter((item) => item.token == token)[0];

    if (user) {
      // check login
      res.status(200).send({
        ...user
      });
    } else {
      res.status(300).send('Fail'); // what kind of error?
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
