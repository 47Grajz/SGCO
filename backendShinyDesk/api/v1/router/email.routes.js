const express = require('express');
const router = express.Router();
const userService = require('../../../services/UserService');

router.post('/verify-email', async (req, res) => {
    try {
        const { token } = req.body;
        const { userId } = jwt.verify(token, process.env.JWT_SECRET);

        await userService.verifyEmail(userId, true);

        res.send('Correo electrónico verificado con éxito');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al verificar el correo electrónico');
    }
});


module.exports = router;