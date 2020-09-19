const Users = require('../controllers/UserControllers');

module.exports = (router) => {
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);

  return router; 
}