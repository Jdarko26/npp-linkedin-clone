const jwt = require('jsonwebtoken');


module.exports.generateToken = (user) => {
    return jwt.sign({...user,
    }, process.env.JWT_SECRET || 'entersomethingsecret', {
        expiresIn: '30d',
    });
};


module.exports.isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (authorization) {
        const token = authorization.slice(7, authorization.lenth);
        jwt.verify(token, process.env.JWT_SECRET || 'entersomethingsecret', (err, decode) => {
            if (err) {
                res.status(401).send({ message: 'Invalid Token' });
            } else { 
                req.user = decode;
                next();
                                 
            }
        });
        
    } else {
         res.status(401).send({ message: 'No Token' });
    }
};

module.exports.isAdmin = (req, res, next) => {


    if (req.user && req.user.isAdmin) {
        next();
    } else {
         res.status(401).send({ message: 'Invalid Admin Token' });
    }
};