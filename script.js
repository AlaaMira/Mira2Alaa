let myPromise = new Promise((resolveFunction, rejectFunction) => {

    let employees = ["Alaa","Ahmad", "Yaseen", "Samer"];
    if(employees.length === 4) {
        resolveFunction(employees)
    } else {
        rejectFunction(Error("Number of employees is not 4"))
    }

});

myPromise.then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
})
.then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
})
.then((resolveValue) => {
    console.log(`the choosen employee is ${resolveValue}`)
})
.catch((rejectedReason) => console.log(rejectedReason))
.finally(console.log("the Operation is Done"))