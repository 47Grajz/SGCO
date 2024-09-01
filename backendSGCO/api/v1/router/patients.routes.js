const { Router } = require('express')
const patientController = require('../../../controller/patientController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const router = Router()
const roles = require('../../../utils/roles')

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), patientController.getAll)
router.get('/patientsByMonth', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), patientController.getPatientsByMonth)
router.get('/:patientId', authenticateJWT, authorize([roles["DENTIST"], roles["PATIENT"], roles["ADMIN"]]), patientController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), patientController.create)
router.put('/:patientId', authenticateJWT, authorize([roles["DENTIST"], roles["PATIENT"], roles["ADMIN"]]), patientController.update)
router.delete('/:patientId', authenticateJWT, authorize([roles["DENTIST"], roles["PATIENT"], roles["ADMIN"]]), patientController.destroy)
router.get('/user/:userId', authenticateJWT, authorize([roles["DENTIST"], roles["PATIENT"], roles["ADMIN"]]), patientController.getByIdUser)
module.exports = router;

