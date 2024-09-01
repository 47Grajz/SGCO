const { Router } = require('express')
const secretaryController = require('../../../controller/secretaryController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')
const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), secretaryController.getAll)
router.get('/:secretaryId', authenticateJWT, authorize([roles["DENTIST"], roles["SECRETARY"], roles["ADMIN"]]), secretaryController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), secretaryController.create)
router.put('/:secretaryId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), secretaryController.update)
router.delete('/:secretaryId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), secretaryController.destroy)

module.exports = router;