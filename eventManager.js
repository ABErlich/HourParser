var events = require('events');
var emmiter = new events.EventEmitter();

module.exports = function () {
    
    registerListener = function(event, callback){
        emmiter.on(event, function(data){
            callback(data);
        });
    }

    emitEvent = function(event, data){
        emmiter.emit(event, data);
    }
    

    return {
        registerListener: registerListener,
        emitEvent: emitEvent
    }
}()