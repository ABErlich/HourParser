const fs = require('fs');
const em = require('./eventManager');

module.exports = function(){

    readFileLines = function(filename){
 
        var lines = [];

        var lineReader = require('readline').createInterface({
            input: fs.createReadStream(filename)
        });
        
        lineReader.on('line', function (line, err) {
            em.emitEvent('lineRead', line);
        });
 
    }

    writeToFile = function(filename, data) {

        data += "\n";

        fs.appendFileSync(filename, data, (err) => {
            if (err) {
                console.log(err);
            }
        });

    }
    
    return {
        readFileLines: readFileLines,
        writeToFile: writeToFile
    }

}()