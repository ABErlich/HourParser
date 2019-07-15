

getLineType = function(line){
    return line.split(" ")[0];
}

getTicketNumber = function(line){
    var number = line.split(" ")[1];

    return number.substring(0, number.length - 1);
}

getDescription = function(line){
    return line.split(" ").slice(2).join(" ");
}

mapType = function(type){
    if(type === "Requirement" || type === "Task"){
        return "{EVOLUTIVO}"
    }else if (type === "Bug"){
        return "{SOPORTE}"
    }else{
        throw new Error("Tipo desconocido");
    }
}

mapNumber = function(number){
    return "{" + number + "}";
}

mapDescription = function(desc){
    return "{" + desc + "}";
}

module.exports = function(){

    processLine = function(line){
        try{
    
            var type = getLineType(line);
            var number = getTicketNumber(line);
            var description = getDescription(line);


            type = mapType(type);
            number = mapNumber(number);
            description = mapDescription(description);

            return type + "-" + number + "-" + description;

        }catch(error){
            console.log("No se pudo parsear la linea:", line);

            // Formato por defecto
            return "{SOPORTE}-{ST}-{" + line + "}";
        }
    }

    return {
        processLine: processLine
    }

}();