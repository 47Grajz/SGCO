const { Router } = require('express')
const medicalHistoryController = require('../../../controller/medicalHistoryController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), medicalHistoryController.getAll)
router.get('/:medicalHistoryId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), medicalHistoryController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), medicalHistoryController.create)
router.put('/:medicalHistoryId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), medicalHistoryController.update)
router.delete('/:medicalHistoryId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), medicalHistoryController.destroy)
module.exports = router;