var tableApp = angular.module('tableApp');

function Student() {
    var _firstName;
    var _lastName;
    var _age;
    var _mark;

    this.getFirstName = function(){
        return _firstName;
    }
    this.getLastName = function(){
        return _lastName;
    }
    this.getAge = function() {
        return _age;
    }
    this.getMark = function(){
        return _mark;
    }

    this.setAge = function(age) {
        if(age < 0){
            throw new Error("Man's age must be more zero");
        }
        if (typeof age != "number" ) {
            throw new TypeError("Parametr \"age\" is not a number.");
        }
            _age = age;
    }
    this.setFirstName = function(firstName) {
        if(firstName == null){
            throw new Error("Parametr points to null.");
        }
        if (typeof firstName != "string" ) {
            throw new TypeError("Parametr \"firstName\" is not a string.");
        }
            _firstName = firstName;
    }
    this.setLastName = function(lastName) {
        if(lastName == null){
            throw new Error("Parametr points to null.");
        }
        if (typeof lastName != "string" ) {
            throw new TypeError("Parametr \"lastName\" is not a number.");
        }
            _lastName = lastName;
    }
    this.setMark = function(mark) {
        if(mark < 0 || mark > 10){
            throw new Error("Mark must be more zero and less than 10.");
        }
        if (typeof mark != "number" ) {
            throw new TypeError("Parametr \"mark\" is not a number.");
        }
            _mark = mark;
    }
 };

function setStudent(student, firstName, lastName, age, mark){
    student.setFirstName(firstName);
    student.setLastName(lastName);
    student.setAge(age);
    student.setMark(mark);
}

var arrayOfStudents = [];