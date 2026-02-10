const accountID = 14523
let accountEmail = "anand2google.com"
var accountPassword = "123456"
accountCity = "Jaipur"

let accountState ;
// accountID = 2 // Not allowed

accountEmail = "anand"
accountPassword = "2212121"
accountCity = "varanasi"

console.log(accountID);

/* prefer not to use var 
because of issue in block scope and functional scope*/

console.table([accountID ,accountEmail ,accountPassword ,accountCity ,accountState]);
