const ReadController = require('../controllers/ReadController');
const CreateController = require('../controllers/CreateController');
const DeleteController = require('../controllers/DeleteController');
const UpdateController = require('../controllers/UpdateController');
const OBFlowController = require('../controllers/OBFlowController');

const routes = require('express').Router();

/**
 *
 */
routes.get('/read', ReadController.read);

routes.post('/create', CreateController.create);

routes.post('/delete', DeleteController.delete);

routes.post('/updateGet', UpdateController.update);

routes.post('/obflowUpdate', OBFlowController.updateWorkPreference);

module.exports = routes;
