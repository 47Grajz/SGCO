const { Router } = require('express')
const toothController = require('../../../controller/toothController')
const roles = require('../../../utils/roles')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')

const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"]]), toothController.getAll)
router.get('/:toothId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"], roles["PATIENT"]]), toothController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), toothController.create)
router.put('/:toothId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), toothController.update)
router.delete('/:toothId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), toothController.destroy)

module.exports = router;