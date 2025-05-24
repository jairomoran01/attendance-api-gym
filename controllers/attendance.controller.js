const Asistencia = require('../models/attendance.model');
const axios = require('axios');

exports.registrarAsistencia = async (req, res) => {
  try {
    const { user_id, activity_id, fecha, asistio } = req.body;

    const userRes = await axios.get(`https://attendance-api-gym.vercel.app/users/${user_id}`);
    const user = userRes.data;
    const hoy = new Date().toISOString().split('T')[0];
    if (user.fecha_caducidad_plan < hoy) {
      return res.status(400).json({ mensaje: 'El usuario no tiene un plan activo' });
    }

    const actividadRes = await axios.get(`https://attendance-api-gym.vercel.app/activities/${activity_id}`);
    const actividad = actividadRes.data;
    const asistentesRes = await axios.get(`https://attendance-api-gym.vercel.app/activities/${activity_id}/attendees`);
    if (asistentesRes.data.length >= actividad.cupos_maximos) {
      return res.status(400).json({ mensaje: 'No hay cupos disponibles' });
    }

    const asistencia = new Asistencia({ user_id, activity_id, fecha, asistio });
    await asistencia.save();
    res.status(201).json(asistencia);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar asistencia', error: error.message });
  }
};

exports.getAsistenciaPorUsuario = async (req, res) => {
  try {
    const asistencias = await Asistencia.find({ user_id: req.params.userId });
    res.json(asistencias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener asistencias por usuario' });
  }
};

exports.getAsistenciaPorActividad = async (req, res) => {
  try {
    const asistencias = await Asistencia.find({ activity_id: req.params.activityId });
    res.json(asistencias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener asistencias por actividad' });
  }
};

exports.getAsistenciaPorFecha = async (req, res) => {
  try {
    const asistencias = await Asistencia.find({ fecha: req.params.fecha });
    res.json(asistencias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener asistencias por fecha' });
  }
};