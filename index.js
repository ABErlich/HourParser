const fileManager = require('./fileManager');
const parser = require('./parser');
const em = require('./eventManager');
const api = require('./apiManager');
const configs = require('./config');
const Hours = require('./models/hours');
const excelManager = require('./excelManager');


var line = excelManager.readLine(configs.EXCEL_NAME, "Julio", 3);
var outputline = parser.processLine(line.req);

// api.login(configs.USER, configs.PASS).then((token) => {

//     console.log("LOGGEADO CORRECTAMENTE");

//     var line = excelManager.readLine(configs.EXCEL_NAME, "Julio", 2);

//     var h = new Hours(43, 5, new Date(), 1, "HRMobile", 35, "comentario");

//     api.loadHours(h, token).then((res) => {

//     });
// });

//

// em.registerListener('lineRead', function(data){
//     var outputline = parser.processLine(data);

//     fileManager.writeToFile("output.txt", outputline);
// })

// fileManager.readFileLines("input.txt")
