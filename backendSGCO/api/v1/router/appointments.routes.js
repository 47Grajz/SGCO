const { Router } = require('express')
const appointmentController = require('../../../controller/appointmentController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()
//?patientId || ?dentistId
router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"], roles["PATIENT"]]), appointmentController.getAll)
//?status || ?date
router.get('/filter', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"], roles["PATIENT"]]), appointmentController.filter)

//scheduled appointments 
router.get('/available', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"], roles["PATIENT"]]), appointmentController.getAvailable)
//available schedule
router.get('/getAppointmentAvailable', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"], roles["PATIENT"]]), appointmentController.getAppoinmentAvailable)

router.get('/:appointmentId', authenticateJWT, authorize([roles["ADMIN"], roles["DENTIST"], roles["PATIENT"]]), appointmentController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"], roles["PATIENT"]]), appointmentController.create)
router.put('/:appointmentId', authenticateJWT, authorize([roles["DENTIST"], roles["PATIENT"], roles["ADMIN"]]), appointmentController.update)
router.delete('/:appointmentId', authenticateJWT, authorize([roles["ADMIN"], roles["DENTIST"]]), appointmentController.destroy)

module.exports = router;