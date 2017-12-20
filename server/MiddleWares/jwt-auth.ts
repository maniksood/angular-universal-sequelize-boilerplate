import * as jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  const token = req.body.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, 'idl_idoolocal_idl', (err, decoded) => {
      if (err) {
        console.error('JWT Verification Error', err);
        return res.status(403).send(err);
      }else {
        return next();
      }
    });
  } else {
    res.status(403).send({error: 'Token not provided'});
  }
};
