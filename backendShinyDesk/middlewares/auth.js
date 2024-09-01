const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models');
const blacklistedTokens = require('../utils/blackListed');


const authenticateUser = async (email, password) => {
    const secret = process.env.JWT_SECRET;
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
        throw new Error('No existe un usuario con este correo electrónico');
    }
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Contraseña incorrecta');
    }
    const userName = user.name + " " + user.lastName;
    //generate new token and return it
    const token = jwt.sign({ id: user.id, role: user.role, userName, email: user.email, iat: Math.floor(Date.now() / 1000) }, secret, { expiresIn: '30h' });
    return token;
};

const  authenticateJWT = (req, res, next)=> {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (blacklistedTokens.includes(token)) {
            return res.status(403).json({message: 'Debes iniciar sesión de nuevo'});
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json({message: 'Authentication required'});
    }
}

const authorize = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).send({ message: 'Authentication required' });
        }
        console.log('user', req.user);
        // console.log(req.user);
        const hasRole = allowedRoles.includes(req.user.role);
        if (!hasRole) {
            return res.status(403).send({ message: 'You do not have access to this route.' });
        }
        next();
    };
};
module.exports = { authenticateUser, authorize, authenticateJWT };