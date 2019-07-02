const dotenv = require('dotenv/config')

module.exports = function(){

    var username = process.env.USER;
    var password = process.env.PASS;


    return {
        USER: username,
        PASS: password
    }
}()