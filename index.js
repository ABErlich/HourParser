const fileManager = require('./fileManager');
const parser = require('./parser');
const em = require('./eventManager');
const api = require('./apiManager');
const configs = require('./config');
const Hours = require('./models/hours');
const excelManager = require('./excelManager');


api.login(configs.USER, configs.PASS).then((token) => {

    
    
    var lineNumber = 2;
    while(!excelManager.lineIsEmpty(configs.EXCEL_NAME, "Julio", lineNumber)){

        var line = excelManager.readLine(configs.EXCEL_NAME, "Julio", lineNumber);

        var comment = parser.processLine(line.req);
        
        console.log("LOGGEADO CORRECTAMENTE");
        var h = new Hours(new Date(line.year, line.month - 1, line.day), line.hours, line.app, comment)
        api.loadHours(h, token).then((res) => {
    
        });


        lineNumber++;
    }

    
});



// em.registerListener('lineRead', function(data){
//     var outputline = parser.processLine(data);

//     fileManager.writeToFile("output.txt", outputline);
// })

// fileManager.readFileLines("input.txt")
