const parser = require('./parser');
const api = require('./apiManager');
const configs = require('./configs/config');
const Hours = require('./models/hours');
const excelManager = require('./excelManager');


// Me logeo y obtengo un token
api.login(configs.USER, configs.PASS).then((token) => {

    console.log("LOGGEADO CORRECTAMENTE");

    // La primera linea es el header de la tabla
    var lineNumber = 2;
    while(!excelManager.lineIsEmpty(configs.EXCEL_NAME, "Julio", lineNumber)){

        var line = excelManager.readLine(configs.EXCEL_NAME, "Julio", lineNumber);

        var comment = parser.processLine(line.req);
        
        var h = new Hours(new Date(line.year, line.month - 1, line.day), line.hours, line.app, comment)
        api.loadHours(h, token).then((res) => {
            
        });


        lineNumber++;
    }

    
});
