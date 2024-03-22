const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: false, //process.env.NODE_ENV === 'development',
        sameSite: 'strict',
        maxAge: 12 * 60 * 60 * 1000
    })
}

module.exports = generateToken;