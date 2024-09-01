const { Router } = require('express')
const settingController = require('../../../controller/settingController')
const roles = require('../../../utils/roles')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const router = Router()
//Get dentist settings: /api/v1/settings?dentistId=1
router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), settingController.getAll)
router.get('/:settingId', authenticateJWT, authorize([roles["ADMIN"]]), settingController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"], roles["DENTIST"], roles["PATIENT"]]), settingController.create)
router.put('/:dentistId', authenticateJWT, authorize([roles["ADMIN"], roles["DENTIST"], roles["PATIENT"]]), settingController.update)
router.delete('/:dentistId', authenticateJWT, authorize([roles["ADMIN"]]), settingController.destroy)

module.exports = router;

