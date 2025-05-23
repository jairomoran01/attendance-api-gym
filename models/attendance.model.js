const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  activity_id: { type: String, required: true },
  fecha: { type: String, required: true },
  asistio: { type: Boolean, default: true }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);