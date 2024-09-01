const { Router } = require('express')
const conventionController = require('../../../controller/conventionController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), conventionController.getAll)
router.get('/:conventionId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), conventionController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), conventionController.create)
router.put('/:conventionId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), conventionController.update)
router.delete('/:conventionId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), conventionController.destroy)

module.exports = router;