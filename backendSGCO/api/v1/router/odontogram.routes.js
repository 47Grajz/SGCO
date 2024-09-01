const { Router } = require('express')
const odontogramController = require('../../../controller/odontogramController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), odontogramController.getAll)
router.get('/:patientId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), odontogramController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), odontogramController.create)
router.put('/:patientId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), odontogramController.update)
router.delete('/:patientId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), odontogramController.destroy)
module.exports = router;