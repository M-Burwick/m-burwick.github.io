//step 1
var animal = {};
animal.species = "Cat";
animal["name"] = "gage";
animal.noises = [];
console.log(animal);

//step 2
var noises = [];
noises[0] = "meow";
noises.push("ruff");
noises.unshift("ogabuga");
noises[noises.length]= "roar";
console.log(noises.length);
console.log(noises[3]);
console.log(noises);

//step 3
animal['noises'] = noises;
noises[2] = "arrggghhhh";
console.log(animal);

// step 6
var animals = [];
animals.push(animal);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: "quack " + "honk " + "sneeze " + "woosh",
}
animals.push(duck);
var tiger = {
    species: "Cat",
    name: "Tigger",
    noises: "Angry Meow" + "Sad Meow",
};
var Giraffe = {
    species: "Psuedo-Horse",
    name: "Long-Neck Randolf",
    noises: "Loud wet chewwing" + "something phenotically difficult",
};
animals.push(Giraffe);
animals.push(tiger);
animals.length;

//step 7
/* I would choose an object to store the list.
In reality I would set it up as a factory function where 
The keys would represent the friends name an certain characteristics
associated with the friend */
var friends =[];
function randomness(animals){
    var randomAnimal = Math.floor(Math.random(animals.length - 1));
    return animals[randomAnimal];
}
var randomAssAnimal = randomness(animals);
friends.push(randomAssAnimal.name);
animals[2].friends = friends;

// step 8

//search
function search(nameOfAnimal) {
    for (var i = 0; i < animals.length; i++ ) {
        if (nameOfAnimal === animals[i].name) {
            return animals[i];
        }
    }    
    return null;
};

//edit
function edit(animalName, animalObject){
    
    for (var i = 0; i < animals.length; i++){
        if (animalName === animals[i].name){
            return animals[i] = animalObject ;
        }
    }
};

//remove
function remove(removeAnimalName){
    for (var i = 0; i < animals.length; i++) {
        if ( removeAnimalName === animals[i].name){
            animals.splice(i, 1);
            return animals;
        }
    }
};

//create
function create(createAnimal){
    for (var i = 0; i < animals.length; i++) {
        if (!createAnimal.name.length || !createAnimal.species.length
        || createAnimal.name === animals[i].name){
            return null;
        }
    }    
        animals.push(createAnimal);
        return animals;
};

