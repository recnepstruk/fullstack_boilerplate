angular.module("MyExampls", [])
    .controller("ExamplesController", ExampleCtrl);

ExampleCtrl.$inject = ["$http"];

function ExampleCtrl($http){
    var eCtrl = this;

    eCtrl.newExample1 = {};
    eCtrl.newExample2 = {};
    eCtrl.example1List = [];
    eCtrl.example2List = [];
    eCtrl.greeting = "Welcome to My Examples!";

    eCtrl.createExample1 = function() {
        //this control will all arrays to be entered on the form
        // eCtrl.newExample1.propertyName = eCtrl.newExample1.propertyName.split(", ");

        $http.post("/example1/url/", eCtrl.newExample1)
            .then(function(success){
                console.log("Created Example1: ", success.data);
                eCtrl.newExample1 = {}; // clear form
                eCtrl.example1List.push(success.data); // add the new example1 to the displayed list of Examples1
            }, function(error){
                console.log("Error creating new example1: ", error);
            });
    }

    eCtrl.getExamples1 = function() {
         $http.get("example1/anotherUrl/")
            .then(function(success){
                console.log("Got all Examples1: ", success.data);
                eCtrl.heroList = success.data;
            }, function(error){
                console.log("Error getting Examples1: ", error);
            });
    }

    eCtrl.deleteExample1 = function(id, index){

        bootbox.confirm("Are you sure you want to delete the Example1?", function(result){
            if(result) {
                console.log("Deleting example1: ", id);

                $http.delete('example2/thirdUrl/'+id)
                    .then(function(success){
                        console.log("Deleted example1: ", success.data);
                        eCtrl.heroList.splice(index, 1); // remove the example1 from the displayed list of Examples1
                    }, function(error){
                        console.log("Error deleting example1: ", error);
                    });
            }
        });
    }

    eCtrl.createExample2 = function() {
        $http.post("example2/url/", eCtrl.newExample2)
            .then(function(success){
                console.log("Created Example2: ", success.data);
                eCtrl.newExample2 = {}; // clear form
                eCtrl.example2List.push(success.data); // add the new hero to the displayed list of examples1
            }, function(error){
                console.log("Error creating new Example2: ", error);
            });
    }

    eCtrl.getExamples2 = function() {
         $http.get("example2/anotherUrl/")
            .then(function(success){
                console.log("Got Examples2: ", success.data);
                eCtrl.example2List = success.data;
            }, function(error){
                console.log("Error getting Examples2: ", error);
            });
    }

    eCtrl.deleteExample2 = function(id, index){

        bootbox.confirm("Are you sure you want to delete the Example2?", function(result){
            if(result) {
                console.log("Deleting example2: ", id);

                $http.delete('example2/thirdUrl/'+id)
                    .then(function(success){
                        console.log("Deleted example2: ", success.data);
                        eCtrl.example2List.splice(index, 1); // remove the example2 from the displayed list of examples1
                    }, function(error){
                        console.log("Error deleting example2: ", error);
                    });
            }
        });
    }
}