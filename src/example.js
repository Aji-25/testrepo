// This is intentionally bad code with multiple issues
function calculateTotal(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

// Bad variable naming and missing error handling
function processUserData(user) {
    var name = user.name;
    var age = user.age;
    var email = user.email;
    
    // No validation
    if (name && age && email) {
        console.log("User data processed");
        return true;
    }
}

// Unused variables and poor function structure
function badFunction() {
    var unusedVar = "This is never used";
    var anotherUnused = 42;
    
    // Missing return statement
    console.log("This function does nothing useful");
}

// Global variable pollution
window.globalVar = "This pollutes global scope";

// Inconsistent code style
function anotherBadFunction( param1,param2 ){
    if(param1==param2){
        return true;
    }else{
        return false;
    }
}

// Missing semicolons and poor formatting
var obj = {
    prop1: "value1"
    ,prop2: "value2"
    ,prop3: "value3"
}

// Call functions without proper error handling
calculateTotal([{price: 10}, {price: 20}]);
processUserData({name: "John", age: 30, email: "john@example.com"});
badFunction();
anotherBadFunction(1, 1);
