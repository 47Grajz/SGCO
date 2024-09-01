const { Router } = require('express')
const supplyController = require('../../../controller/supplyController')
const roles = require('../../../utils/roles')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')

const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), supplyController.getAll)
router.get('/:supplyId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), supplyController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), supplyController.create)
router.put('/:supplyId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), supplyController.update)
router.delete('/:supplyId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), supplyController.destroy)



module.exports = router;