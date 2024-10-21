import jwt from 'jsonwebtoken'; 
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// cung cấp cách xác thực bảo mật cho ứng dụng của bạn bằng cách sử dụng JWT

const secret = process.env.JWT_SECRET; // set the secret to the environment variable
const expiration = '2h'; // set the expiration time

// This will sign the token with the user's username, email, and _id properties.
const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

// This will verify the token and attach the user's data to the request object.
const authMiddleware = ({ req }) => {
  // allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // separate "Bearer" from "<tokenvalue>"
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  // if no token, return request object as is
  if (!token) {
    return req;
  }

  try {
    // decode and attach user data to request object
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  // return updated request object
  return req;
};

export { signToken, authMiddleware };