const { Router } = require('express')
const userController = require('../../../controller/userController')
const roles = require('../../../utils/roles')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const router = Router()

router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), userController.getAll)
router.get('/:userId', authenticateJWT, authorize([roles["ADMIN"]]), userController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"], roles["DENTIST"], roles["PATIENT"]]), userController.create)
router.put('/:userId', authenticateJWT, authorize([roles["ADMIN"], roles["DENTIST"], roles["PATIENT"]]), userController.update)
router.delete('/:userId', authenticateJWT, authorize([roles["ADMIN"]]), userController.destroy)
router.get('/:userId/profile-picture', userController.getPicture)


module.exports = router;

