const fileManager = require('./fileManager');
const parser = require('./parser');
const em = require('./eventManager');
const api = require('./apiManager');
const configs = require('./config')

api.login(configs.USER, configs.PASS);


// em.registerListener('lineRead', function(data){
//     var outputline = parser.processLine(data);

//     fileManager.writeToFile("output.txt", outputline);
// })

// fileManager.readFileLines("input.txt")

