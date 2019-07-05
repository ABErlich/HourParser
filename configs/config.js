const dotenv = require('dotenv/config')

module.exports = function(){

    var username = process.env.USER;
    var password = process.env.PASS;
    
    var excelName = "Horas.xlsx";
    var host = 'azgap01wp-web.azurewebsites.net';
    var hours_endpoint = '/api/worktimes';
    var login_endpoint = '/api/login';

    return {
        USER: username,
        PASS: password,
        EXCEL_NAME: excelName,
        HOST: host,
        LOGIN_ENDPOINT: login_endpoint,
        HOURS_ENDPOINT: hours_endpoint
    }
}()