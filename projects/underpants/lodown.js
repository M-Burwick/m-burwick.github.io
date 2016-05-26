/* global $ */
(() => {
    $.ajax("customers.json")
    .done((customers) => {
        // WRITE YOUR CODE BELOW HERE
        console.log("customers: ",customers);    
            //#1
            let females = _.filter(customers, (c, i, list) => {
                return c.gender === "female";
            });
            
            let males = _.filter(customers, (c, i, list) => {
                return c.gender === "male";
            }); 
            
            console.log(`females: ${females.length}`);
            console.log(`males: ${males.length}` );
            
            
            //#2
            //oldest Age
            let oldest = _.pluck(customers, "age")
            let oldestAge = Math.max.apply(Math, oldest);
            let indexOfOldestAge = _.indexOf(oldest, oldestAge);
            let oldestName = customers[indexOfOldestAge].name;
            
            //YoungestAge
             let youngestAge = Math.min.apply(Math, oldest);
             let indexOfYoungestAge = _.indexOf(oldest, youngestAge);
             let youngestName = customers[indexOfYoungestAge].name;
             console.log(`oldest: ${oldestName}`);
             console.log(`youngest: ${youngestName}` );
            
            
            //#3
            let customerBalance = _.pluck(customers, "balance");
            let divisor = customers.length;
            
            //stores removed dolllar signs
            var resultDollar = [];
            var removeDollar = _.each(customerBalance, function (balan, i) {
                resultDollar.push(balan.slice(1 , balan.length).split(",").join(''));
            })
            
            //turns result dollar into intergers
            var intResultDollar = [];
            var numToInt = _.map(resultDollar, function (balan, i) {
                  intResultDollar.push(parseInt(balan, 10))
            });
          
            //does the math
            let sum = 0;
            let averageSum = _.map(intResultDollar, function (balance, i) {
                let newSum = sum + balance;
                sum = newSum
                
            });
            let average = sum/customers.length;
            
             console.log(`Average: ${average}` );
        
        
            //4 Names Starting with a Letter
            let startWithLetterN = "B";
            let namesStatWithLetter =[];
            
            
            let nameFunc = _.map(customers, function(cust, i) {
                if (cust.name[0] === startWithLetterN) {
                    namesStatWithLetter.push(cust.name)};
            } )
            
            let numberOfNames = namesStatWithLetter.length
            console.log(`Number of Names: ${numberOfNames}` )
            
            //#5 Friends names Begin with letter
            let friendsNamesStartLetter = "B";
            let friendsArrayOfNames = [];
            
            let friendNameStart = _.map(customers, function (cust, i) {
                    let starterLetter = []
                    let friendLoop = _.map (customers.friends, function (friend, i){
                        starterLetter.push(friend.friends.name)
                    });
                console.log(starterLetter)
               // if (cust.friends.name[0] === friendsNamesStartLetter) {
                 //   friendsArrayOfNames.push(cust.friends.name)
               // }
            })
            console.log(friendsArrayOfNames)
        // WRITE YOUR CODE ABOVE HERE
    })
    .fail((r) => console.error(r));
})();
