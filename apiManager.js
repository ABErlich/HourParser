const https = require('https');
const Hours = require('./models/hours');

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
                'Content-Type': 'application/json',
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
                console.error(error)
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
            date: "2019-07-01T03:00:00.000Z",//hours.fecha,
            hours: hours.hours,
            id: 0,
            reference: hours.referencia,
            status: 0,
            taskId: hours.tarea,
            userComment: hours.comentario
        });
          
        const options = {
            host: 'azgap01wp-web.azurewebsites.net',
            path: '/api/worktimes',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
                'Authorization': 'Bearer ' + token
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

                    console.log(obj.data);
                    resolve(obj.data);
                })
            });
            
            req.on('error', (error) => {
                console.error(error)
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