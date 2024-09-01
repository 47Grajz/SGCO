const { Router } = require('express')
const treatmentController = require('../../../controller/treatmentController')
const router = Router()
const roles = require('../../../utils/roles')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), treatmentController.getAll)
router.get('/:treatmentId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), treatmentController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), treatmentController.create)
router.put('/:treatmentId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), treatmentController.update)
router.delete('/:treatmentId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), treatmentController.destroy)

module.exports = router;