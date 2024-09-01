const userService = require('../services/UserService')
const { authenticateUser } = require('../middlewares/auth');
const jwt = require('jsonwebtoken');
const blacklistedTokens = require('../utils/blackListed');

const { sendVerificationEmail } = require('../utils/email');

const signup = async (req, res) => {
    const { name, lastName, email, password, profilePicture, role, status, phoneNumber, idCardNumber } = req.body;
    const secret = process.env.JWT_SECRET;
    try {
        const newUser = await userService.create(name, lastName, email, password, profilePicture, role, status, phoneNumber, idCardNumber);
        if (newUser) {
            sendVerificationEmail(newUser);
            const token = jwt.sign({ id: newUser.id, role: newUser.role }, secret, { expiresIn: '30h' });
            //save token in cookie and serialize using cookie express method
            res.status(200).send({ status: 200, data: newUser, token: token });
        }

    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message });
    }
};
const verifyEmail = async (req, res) => {
    const { token } = req.body;
    const secret = process.env.JWT_SECRET;
    try {
        const payload = jwt.verify(token, secret);
        console.log({payload: payload});
        const user = await userService.get(payload.userId);
        if (user) {
            await userService.verifyEmail(user.id, true);
            res.status(200).send({ status: 200, data: user });
        }
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message });
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    const secret = process.env.JWT_SECRET;

    try {
        const token = await authenticateUser(email, password);
        const payload = jwt.verify(token, secret)
        res.status(200).send({ status: 200, data: token, user: payload });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message });
    }
}
const logout = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token) {
            console.log(token);
            blacklistedTokens.push(token);
            res.status(200).send({ status: 200, message: 'Logged out' });
        }
        else {
            res.status(401).send({ status: 401, message: 'Token required' });
        }
    }
    else if (!authHeader) {
        res.status(401).send({ status: 401, message: 'Authorization header required' });
    }

};

module.exports = {
    signup,
    login,
    logout,
    verifyEmail
}
