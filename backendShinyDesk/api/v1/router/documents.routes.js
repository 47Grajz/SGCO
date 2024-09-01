const { Router } = require('express')
const documentController = require('../../../controller/documentController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()

router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), documentController.getAll)
router.get('/patients/:patientId', authenticateJWT, authorize([roles["PATIENT"], roles["DENTIST"], roles["ADMIN"]]), documentController.getByPatient)
router.get('/:documentId', authenticateJWT, authorize([roles["PATIENT"], roles["DENTIST"], roles["ADMIN"]]), documentController.get)
router.post('/', authenticateJWT, authorize([roles["PATIENT"], roles["DENTIST"]]), documentController.create)
router.put('/:documentId', authenticateJWT, authorize([roles["PATIENT"], roles["DENTIST"], roles["ADMIN"]]), documentController.update)
router.delete('/:documentId', authenticateJWT, authorize([roles["PATIENT"], roles["DENTIST"], roles["ADMIN"]]), documentController.destroy)

module.exports = router;