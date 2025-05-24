# Attendance API - GYM Unicatólicos Reloaded

API REST para el módulo de *control de asistencia* del gimnasio Unicatólicos Reloaded GYM.

## 📦 Tecnologías
- Node.js
- Express
- MongoDB (Atlas)
- Vercel (para despliegue)

## 🚀 Rutas disponibles
- POST /attendance - Registrar asistencia (valida plan activo y cupos disponibles)
- GET /attendance/user/:userId - Ver asistencias por usuario
- GET /attendance/activity/:activityId - Ver asistencias por actividad
- GET /attendance/date/:fecha - Ver asistencias por fecha

## 🔧 Instalación local

```bash
git clone https://github.com/jairomoran01/attendance-api-gym
cd attendance-api-gym
npm install
node index.js