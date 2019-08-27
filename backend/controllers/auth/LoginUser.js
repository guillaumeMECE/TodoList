const bcrypt = require('bcrypt');
const { AuthModel, UserModel } = require('@models');
const { secureInput, formatChecker } = require('@core');

/**
 * Request structure
 */
// req = { body: { email: 'xxx', password: 'xxxxxxxxx' } };

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {

    const inputs = {};
    
    if (req.body.email === undefined || req.body.email === null) {
        throw new Error('Email undefined/null');
    } else if (!formatChecker.isEmail(req.body.email)) {
        throw new Error('Email don\'t follow rules');
    }
    inputs.email = req.body.email;

    if (req.body.password === undefined || req.body.password === null) {
        throw new Error('Password undefined/null');
    } else if (!formatChecker.isPassword(req.body.password)) {
        throw new Error('Password don\'t follow rules');
    }
    inputs.password = req.body.password;

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (inputs) => {
    try {
        const auth = await AuthModel.findOne({ email: inputs.email });
        if (auth === null || auth === undefined) {
            throw new Error('Auth : Email not find');
        }

        const user = await UserModel.findOne({ email: inputs.email });
        if (user === null || user === undefined) {
            throw new Error('User : Email not find');
        }

        const isGoodPassword = await bcrypt.compare(inputs.password, auth.password);
        if (!isGoodPassword) {
            throw new Error('Wrong Password');
        }

        auth.password = undefined;
        
        return { auth, user };
    } catch (error) {
        throw new Error('Error login'.concat(' > ', error.message));
    }
};

const registerUser = async (req, res) => {
    try {
        const inputs = await secure(req);
        
        const resultsData = await process(inputs);

        res.status(200).json(resultsData);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};

module.exports = registerUser;
