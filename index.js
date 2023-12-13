// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'mo']

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLast){
    console.log(firstOrLast)
    return firstOrLast(drivers)
    
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))