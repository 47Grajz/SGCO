const { Router } = require('express')
const dentistController = require('../../../controller/DentistController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')
const router = Router()

router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), dentistController.getAll)
router.get('/:dentistId', authenticateJWT, authorize([roles["ADMIN"]]), dentistController.get)
router.post('/', dentistController.create)
router.put('/:dentistId', authenticateJWT, authorize([roles["ADMIN"], roles["DENTIST"]]), dentistController.update)
router.delete('/:dentistId', authenticateJWT, authorize([roles["ADMIN"]]), dentistController.destroy)

module.exports = router;