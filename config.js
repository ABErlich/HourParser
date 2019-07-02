const dotenv = require('dotenv/config')

module.exports = function(){

    var username = process.env.USER;
    var password = process.env.PASS;
    var excelName = "Horas_Axel.xlsx";


    return {
        USER: username,
        PASS: password,
        EXCEL_NAME: excelName
    }
}()