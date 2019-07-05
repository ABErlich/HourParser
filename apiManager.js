const https = require('https');
const Hours = require('./models/hours');
const configs = require('./configs/config');

module.exports = function() {

    login = async function(username, password){
        
        
        const data = JSON.stringify({
            userName: username,
            password: password
        })
          
        const options = {
            host: configs.HOST,
            path: configs.LOGIN_ENDPOINT,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': data.length
            }
        }

        return new Promise(function(resolve, reject){
            const req = https.request(options, (res) => {
                console.log(`statusCode: ${res.statusCode}`)
                var data = '';
            
                res.on('data', (chunk) => {
                    data += chunk;
                })
            
                res.on('end',function(){
                    var obj = JSON.parse(data);

                    resolve(obj.data.accessToken);
                })
            });
            
            req.on('error', (error) => {
                reject(error);
            });
            
            req.write(data);
            req.end();

        })
        
    }


    loadHours = async function(hours, token) {

        // Armo el payload
        const data = JSON.stringify({
            analyticId: hours.analitica,
            categoryId: hours.categoria,
            date: hours.fecha.toISOString(),
            hours: hours.hours,
            id: 0,
            reference: hours.referencia,
            status: 0,
            taskId: hours.tarea,
            userComment: hours.comentario
        });
          
        // Request
        const options = {
            host: configs.HOST,
            path: configs.HOURS_ENDPOINT,
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

        // Hago el request y lo meto en una promesa
        return new Promise(function(resolve, reject) {
            const req = https.request(options, (res) => {
                
                var data = '';
            
                res.on('data', (chunk) => {
                    data += chunk;
                })
            
                res.on('end',function(){
                    var obj = JSON.parse(data);

                    if(res.statusCode == 200){
                        console.log(`Horas del dia: ${hours.fecha.toLocaleDateString()} cargadas con exito`);
                    }
                    
                    resolve(obj);
                })
            });
            
            req.on('error', (error) => {
                reject(error);
            });
            
            req.write(data);
            req.end();
            
        });
    }

    return {
        login: login,
        loadHours: loadHours
    }

}();