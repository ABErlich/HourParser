const https = require('https');

module.exports = function() {

    login = function(username, password){
        var accessToken = ''
        var refreshToken = '';
        
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
        
        const req = https.request(options, (res) => {
            console.log(`statusCode: ${res.statusCode}`)
            var data = '';
        
            res.on('data', (chunk) => {
                data += chunk;
            })
        
            res.on('end',function(){
                var obj = JSON.parse(data);
                
                accessToken = obj.data.accessToken;
                refreshToken = obj.data.refreshToken;
        
                console.log(accessToken);
                return accessToken;
            })
        })
        
        req.on('error', (error) => {
            console.error(error)
        })
        
        req.write(data)
        req.end()
    }


    return {
        login: login
    }

}();