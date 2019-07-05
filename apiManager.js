const https = require('https');
const Hours = require('./models/hours');
const utf8 = require('utf8');

module.exports = function() {

    login = async function(username, password){
        
        
        const data = JSON.stringify({
            userName: username,
            password: password
        })
          
        const options = {
            host: 'azgap01wp-web.azurewebsites.net',
            path: '/api/login',
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

        console.log(data);
          
        const options = {
            host: 'azgap01wp-web.azurewebsites.net',
            path: '/api/worktimes',
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

        return new Promise(function(resolve, reject) {
            const req = https.request(options, (res) => {
                console.log(`statusCode: ${res.statusCode}`);
                var data = '';
            
                res.on('data', (chunk) => {
                    data += chunk;
                })
            
                res.on('end',function(){
                    var obj = JSON.parse(data);

                    resolve(obj);
                })
            });
            
            req.on('error', (error) => {
                reject(error);
            });
            
            req.write(data);
            req.end();
            
        })
    }

    return {
        login: login,
        loadHours: loadHours
    }

}();