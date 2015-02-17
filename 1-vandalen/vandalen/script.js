"use strict";

var makePerson = function(persArr){

    var arr = persArr.slice();

    arr.sort(function(a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    var result = {
        minAge: arr[0]["age"],
        maxAge: arr[0]["age"],
        names: arr[0]["name"]
    };

    var sumAge = arr[0]["age"];

    for (var i = 1; i < arr.length; i = i + 1) {
        if (result.minAge > arr[i]["age"])
        {
            result.minAge = arr[i]["age"];
        }
        else if (result.maxAge < arr[i]["age"])
        {
            result.maxAge = arr[i]["age"];
        }

        result.names += ", " + arr[i]["name"];
        sumAge  += arr[i]["age"];
    }

    result.averageAge = Math.round(sumAge / arr.length);

    return result;
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
