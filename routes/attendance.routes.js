const express = require('express');
const router = express.Router();
const controller = require('../controllers/attendance.controller');

router.post('/', controller.registrarAsistencia);
router.get('/user/:userId', controller.getAsistenciaPorUsuario);
router.get('/activity/:activityId', controller.getAsistenciaPorActividad);
router.get('/date/:fecha', controller.getAsistenciaPorFecha);

module.exports = router;