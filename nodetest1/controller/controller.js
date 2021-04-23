
exports.verfiyToken = (req, res, next) => {
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

exports.profile = (req, res) => {
    const profile = req.dataValue;
    res.status(200).send(profile);
  });
exports.uesrcheck = (req, res, next) => {
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