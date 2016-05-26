function objectValues(obj) {
    var array = [];
    for (var key in obj) {
        array.push(obj[key]);
    }
    return array;
}


function keysToString(obj) {
    return Object.keys(obj).join(" ");
}

function valuesToString(obj){
    var string = [];
    for (var key in obj){
        if (typeof obj[key] === 'string'){
        string.push(obj[key]);}
    } 
    return string.join(" ");
}

// 4
function arrayOrObject(param){
    if (Array.isArray(param)){
        return "array";
    }
    return 'object';
}

//5
function capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1) ;
}

//6
function capitalizeAllWords(str) {
    var stringSplit = str.split(" ");
    for (var i = 0; i < stringSplit.length; i++){
        stringSplit[i] = capitalizeWord(stringSplit[i]);
    }
    return stringSplit.join(" ");
}


//7
function welcomeMessage(obj){
    return "Welcome" + " " +capitalizeWord(obj.name) +"!";
}

//8
function profileInfo(obj){ 
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}

//9
function maybeNoises(obj){
    if (Array.isArray(obj.noises) && obj.noises.length > 0){
        return obj.noises.join(" ");
    } 
    return 'there are no noises';
}


function hasWord(string, word){
        if (string.indexOf(word) >= 0){
            return true;
        } return false;
    }    

function addFriend (name, object){
    object.friends.push(name);
    return object
}

function isFriend(name, object){
    for (var i = 0; i < object.friends.length; i++){
       if (name === object.friends[i]){
           return true
        }   return false;
    }
}    

//Should take a name and a list of people, 
//and return a list of all the names that <name> is not friends with"
//first checking that is not in an array, use indexOf

function nonFriend(name, people){
    //see who is not in the named person's friends list
    //make sure not to add the named person to the outgoing list
    //spit it back out
    var namedPerson
    for (var i = 0; i < people.length; i++){
        if(name === people[i].name){
            namedPerson = people[i];
        }
    }
    var out = []; 
    for (var j = 0; j < people.length; j++){
      if (people[j].name === name) continue;
    }
    if (namedPerson.friends.indexOf(people[j].name) === -1){
        out.push(namedPerson.friends.indexOf(people[j].name))
    } 
    return out;
    
}