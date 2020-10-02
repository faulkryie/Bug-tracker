const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { Employee } = require("./db/models");

const { secret, expiresIn } = jwtConfig;

const getUserToken = (user) => {
  // Don't store the user's hashed password
  // in the token data.
  const userDataForToken = {
    id: user.id,
    email: user.email,
    role: user.roleId
  };

  // Create the token.
  const token = jwt.sign(
    { data: userDataForToken },
    secret,
    { expiresIn: parseInt(expiresIn, 10) } // 604,800 seconds = 1 week
  );

  return token;
};

const restoreUser = (req, res, next) => {
  // token being parsed from request's cookies by the cookie-parser middleware
  // function in app.js:
  console.log(req.cookies)
  const { token } = req.cookies;

  if (!token) {
    // Send a "401 Unauthorized" response status code
    return res.status(401).end();
  }
console.log('in restore user token');
  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      return next(err);
    }

    const { id } = jwtPayload.data;

    try {
      const employee = await Employee.findByPk(id);
      req.user = employee
      req.user.role = employee.roleId
    } catch (e) {
      // remove the token cookie
      res.clearCookie("token");
      return next(e);
    }

    if (!req.user) {
      // Send a "401 Unauthorized" response status code
      // along with removing the token cookie
      res.clearCookie("token");
      return res.status(401).end();
    }

    return next();
  });
};

const requireAuth = [restoreUser];

module.exports = { getUserToken, requireAuth };