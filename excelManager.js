const xlsx = require('xlsx');

module.exports = function() {


    readLine = function(excelName, sheet, line){
        var workbook = xlsx.readFile(excelName);
        var worksheet = workbook.Sheets[sheet];


        var cellYear = worksheet['A' + line];
        var cellMonth = worksheet['B' + line];
        var cellDay = worksheet['C' + line];
        var cellApp = worksheet['D' + line];
        var cellReq = worksheet['E' + line];
        var cellResource = worksheet['F' + line];
        var cellHours = worksheet['G' + line];
        
        return {
            year: cellYear ? cellYear.v : null,
            month: cellMonth ? cellMonth.v : null,
            day: cellDay ? cellDay.v : null,
            app: cellApp ? cellApp.v : null,
            req: cellReq ? cellReq.v : null,
            resource: cellResource ? cellResource.v : null,
            hours: cellHours ? cellHours.v : null,
        }

    }

    lineIsEmpty = function(excelName, sheet, line){
        var workbook = xlsx.readFile(excelName);
        var worksheet = workbook.Sheets[sheet];

        var cell = worksheet['A' + line];
        
        return cell ? false : true;
    }

    return {
        readLine: readLine,
        lineIsEmpty: lineIsEmpty
    }

}();