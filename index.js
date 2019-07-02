const fileManager = require('./fileManager');
const parser = require('./parser');
const em = require('./eventManager');
const api = require('./apiManager');
const configs = require('./config');
const Hours = require('./models/hours');


api.login(configs.USER, configs.PASS).then((token) => {

    console.log("LOGGEADO CORRECTAMENTE");

    var h = new Hours(43, 5, new Date(), 1, "HRMobile", 35, "comentario");

    api.loadHours(h, token).then((res) => {

    });
});

//

// em.registerListener('lineRead', function(data){
//     var outputline = parser.processLine(data);

//     fileManager.writeToFile("output.txt", outputline);
// })

// fileManager.readFileLines("input.txt")
