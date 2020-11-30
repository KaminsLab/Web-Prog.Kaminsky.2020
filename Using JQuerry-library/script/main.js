
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

function addToDocument(student, students){
    var element = document.createElement("tr");
    element.className = "body_row";

    var age = document.createElement("td");
    age.className = "element";
    var firstName = document.createElement("td");
    firstName.className = "element";
    var lastName = document.createElement("td");
    lastName.className = "element";
    var mark = document.createElement("td");
    mark.className = "mark";
    var removeButton = document.createElement("div");
    removeButton.className = "remove";

    firstName.textContent = student.getFirstName();
    lastName.textContent = student.getLastName();
    age.textContent = student.getAge();
    mark.textContent  = student.getMark();

    element.appendChild(lastName);
    element.appendChild(firstName);
    element.appendChild(age);
    element.appendChild(mark);
    element.appendChild(removeButton);
    $("tbody").append(element);
    students.push(student);
}
 
var getStudentsFromJSON = (data) => {
    var buffer = [];
    for(var i = 0; i < data.students.length; i++){
        buffer[i] = new Student();
        setStudent(buffer[i], data.students[i]['firstName'], data.students[i]['lastName'], Number(data.students[i]['age']), Number(data.students[i]['mark']));
    }
    return buffer;
}

var averageMark = () =>{
    var average = 0;

    $(".mark").each(function(index, element){
        average += Number(element.innerText);
    })
    return average/$(".mark").length;
}

function addAverageMark(mark){
    var element = document.createElement("h2");
    element.className = "average-mark";
    element.textContent = "Average mark among students: " + mark;

    $("body").append(element);
}

$(function(){
    var students = [];

    var average;

    var requestUrl = "https://raw.githubusercontent.com/KaminsLab/Web-Prog.Kaminsky.2020/master/Using%20JQuerry-library/students.json";
    $.getJSON(requestUrl, function(data){
        var buffer = getStudentsFromJSON(data);

        for (let i = 0; i < data.students.length; i++) {
            addToDocument(buffer[i], students);
        }
        average = averageMark();
        addAverageMark(average);
    })

    var student1 = new Student();

    var formShow = document.show;

    $('.table').on('click', '.remove', function(){
        $(this).closest('tr').remove();
        $('.average-mark').remove();
        average = averageMark();
        addAverageMark(average);
    })

    var firstNameBox = formShow.firstName1;
    firstNameBox.addEventListener("change", (e) =>{
        let value = e.target.value;
         student1.setFirstName(value);
    })

    var lastNameBox = formShow.lastName1;
    lastNameBox.addEventListener("change", (e) =>{
        let value = e.target.value;
         student1.setLastName(value);
    })
    
    var ageBox = formShow.age1;
    ageBox.addEventListener("change", (e) =>{
        let value = Number(e.target.value);
        student1.setAge(value);
    })
    
    var markBox = formShow.mark1;
    markBox.addEventListener("change", (e) =>{
        let value = Number(e.target.value);
        student1.setMark(value);
    })


    $(".button1").on('click', function(){
        if (!firstNameBox.value){
            swal("Incorrect input!", "Input student's first name again.", "error");
        }
        if (!lastNameBox.value){
            swal("Incorrect input!", "Input student's first name again.", "error");
        }
        if (!ageBox.value) {
            swal("Incorrect input!", "Input student's age again.", "error");
        }
        if (!markBox.value) {
            swal("Incorrect input!", "Input student's age again.", "error");   
        }
        else{
        addToDocument(student1, students);
        $('.average-mark').remove();
        average = averageMark();
        addAverageMark(average);
        }
    });
})