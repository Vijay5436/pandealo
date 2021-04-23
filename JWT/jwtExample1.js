const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const secretkey = '123456';
const user = [
  {
    username: 'albert12',
    name: 'Albert M',
    password: '123456',
  },
  {
    username: 'ajay123',
    name: 'Ajay K',
    password: '123456',
  },
  {
    username: 'arun321',
    name: 'Arun B',
    password: '123456',
  },
];
const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
const port = 3007;
app.get('/api', (req, res) => {
  res.status(200).json({
    massage: 'welcome ',
  });
});

function verfiyToken(req, res, next) {
  const bearerHead = req.headers.authorization;
  if (bearerHead) {
    jwt.verify(bearerHead, secretkey, (err, data) => {
      if (err) {
        res.status(403).json({
          massage: ' inalid Token ',
        });
      } else {
        req.dataValue = data;
      }
    });
    next();
  } else {
    res.sendStatus(403).end();
  }
}
function uesrcheck(req, res, next) {
  const { userName, password } = req.body;
  const verifiedUser = user.find(
    (element) => element.username === userName && element.password === password,
  );
  const userFilter = user.filter(
    (element) => element.username === userName && element.password === password,
  );
  if (!verifiedUser) {
    res.status(401).json({
      status: 'failure',
      massage: 'Incorret username or password',
    });
  } else if (userFilter.length > 1) {
    res.status(401).json({
      status: 'failure',
      massage: 'server error multiple users',
    });
  } else {
    req.tok = jwt.sign({ user: verifiedUser.username }, secretkey, { expiresIn: '1d' });
    next();
  }
}

app.get('/api/profile', verfiyToken, (req, res) => {
  const profile = req.dataValue;
  res.status(200).send(profile);
});

app.post('/api/login', uesrcheck, (req, res) => {
  const Token = req.tok;
  res.status(200).json({
    status: 'sucess',
    massage: 'Login Successfull',
    Token,
  });
});

const servar = app.listen({
  port,
  host: 'localhost',
  exclusive: true,
});
servar.on('listening', () => {
  console.log('Listening', port);
});
servar.on('error', () => {
  console.log('error', port);
});
