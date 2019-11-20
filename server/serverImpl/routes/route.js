const ReadController = require('../controllers/ReadController');
const CreateController = require('../controllers/CreateController');
const DeleteController = require('../controllers/DeleteController');
const UpdateController = require('../controllers/UpdateController');
const OBFlowController = require('../controllers/OBFlowController');

const routes = require('express').Router();

/**
 *  
 */
routes.get('/readGet', ReadController.readGet);

routes.post('/readPost', ReadController.readPost)

routes.get('/createGet',CreateController.createGet);

routes.post('/createPost', CreateController.createPost);

routes.get('/deleteGet', DeleteController.deleteGet);

routes.get('/updateGet', UpdateController.updateGet);

routes.post('/obflowUpdate', OBFlowController.updateWorkPreference);

module.exports = routes;