require('dotenv').config();

const isEmail = (email) => {
    return email.includes('@');
};

const isPassword = (password) => {
    return password.length >= process.env.LENGTH_PASSWORD;
};

module.exports = {
    isEmail,
    isPassword,
};
