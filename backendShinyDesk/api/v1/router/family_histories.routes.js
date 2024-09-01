const { Router } = require('express')
const familyHistoryController = require('../../../controller/familyHistoryController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()

router.get('/', authenticateJWT, authorize([roles["DENTIST"], roles["ADMIN"]]), familyHistoryController.getAll)
router.get('/:familyHistoryId', authenticateJWT, authorize([roles["ADMIN"], roles["PATIENT"], roles["DENTIST"]]), familyHistoryController.get)
router.post('/', authenticateJWT, authorize([roles["PATIENT"], roles["DENTIST"], roles["ADMIN"]]), familyHistoryController.create)
router.put('/:familyHistoryId', authorize([roles["PATIENT"], roles["DENTIST"], roles["ADMIN"]]), familyHistoryController.update)
router.delete('/:familyHistoryId', authorize([roles["DENTIST"], roles["ADMIN"]]), familyHistoryController.destroy)

module.exports = router;