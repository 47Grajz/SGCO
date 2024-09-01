const { Router } = require('express')
const diagnosisController = require('../../../controller/diagnosisController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')
const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), diagnosisController.getAll)
router.get('/:diagnosisId', authorize([roles["DENTIST"], roles["PATIENT"], roles["ADMIN"]]), diagnosisController.get)
router.post('/', authorize([roles["DENTIST"], roles["ADMIN"]]), diagnosisController.create)
router.put('/:diagnosisId', authorize([roles["DENTIST"], roles["ADMIN"]]), diagnosisController.update)
router.delete('/:diagnosisId', authorize([roles["DENTIST"], roles["ADMIN"]]), diagnosisController.destroy)

module.exports = router;