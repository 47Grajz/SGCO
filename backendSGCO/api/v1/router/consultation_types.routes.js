const { Router } = require('express')
const consultationTypeController = require('../../../controller/consultationTypeController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')
const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), consultationTypeController.getAll)
router.get('/:consultationTypeId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), consultationTypeController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), consultationTypeController.create)
router.put('/:consultationTypeId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), consultationTypeController.update)
router.delete('/:consultationTypeId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), consultationTypeController.destroy)

module.exports = router;