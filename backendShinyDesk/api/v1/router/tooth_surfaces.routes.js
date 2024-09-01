const { Router } = require('express')
const toothFaceController = require('../../../controller/toothSurfaceController')
const roles = require('../../../utils/roles')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')

const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), toothFaceController.getAll)
router.get('/:toothFaceId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), toothFaceController.get)
router.post('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), toothFaceController.create)
router.put('/:toothFaceId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), toothFaceController.update)
router.delete('/:toothFaceId', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), toothFaceController.destroy)

module.exports = router;