const userController = require('../controllers/UserController');

module.exports = api => {
    api.route('/findPost').post(userController.findPost);
    api.route('/generalFindGet').get(userController.generalFindGet);
};