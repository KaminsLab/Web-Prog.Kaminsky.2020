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
     var table = document.querySelector("tbody");
     var element = document.createElement("tr");
     element.className = "body_row";

     var age = document.createElement("td");
     age.className = "element";
     var firstName = document.createElement("td");
     firstName.className = "element";
     var lastName = document.createElement("td");
     lastName.className = "element";
     var mark = document.createElement("td");
     mark.className = "element";
     var removeButton = document.createElement("div");
     removeButton.className = "remove";

     removeButton.addEventListener("click", (e) =>{
        var removeButtonElement = e.target;
        row = removeButtonElement.closest("tr");
        row.parentElement.removeChild(row);
        students.pop(student);
        var el = document.querySelector("h2.average-mark");
        el.parentNode.removeChild(el);
        var average = averageMark();
        addAverageMark(average);
    });
    
     firstName.textContent = student.getFirstName();
     lastName.textContent = student.getLastName();
     age.textContent = student.getAge();
     mark.textContent  = student.getMark();

     element.appendChild(lastName);
     element.appendChild(firstName);
     element.appendChild(age);
     element.appendChild(mark);
     element.appendChild(removeButton);
     table.appendChild(element);
     students.push(student);
 }

 var primalObjects = () =>{
    var buffer = [];
    for (let i = 0; i < 4; i++) {
        buffer[i] = new Student();
    }

    setStudent(buffer[0], "Ivan", "Ivanov", 20, 9);
    setStudent(buffer[1], "Petr", "Petrov", 23, 7);
    setStudent(buffer[2], "Sidor", "Sidorov", 22, 10);
    setStudent(buffer[3], "Mihail", "Blgakov", 18, 4);

    return buffer;
 }

 var averageMark = () =>{
    var tdElements = document.getElementsByTagName("td");
    var average = 0;
    
    for (var i = 3; i < tdElements.length; i+=4) {
        average += Number(tdElements[i].innerText);
    }
    average /= tdElements.length / 4;
    return average;
 }

 function addAverageMark(mark){
    var body = document.querySelector("body");
    var element = document.createElement("h2");
    element.className = "average-mark";
    element.textContent = "Cредний балл по всем студентам: " + mark;
    body.appendChild(element);
 }

(function(){

    var buffer = primalObjects();
    
    var students = [];

    for (let i = 0; i < 4; i++) {
        addToDocument(buffer[i], students);
    }

    var average = averageMark();
    addAverageMark(average);

    var student1 = new Student();

    var formShow = document.show;

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


    var printButton = formShow.print;
    printButton.addEventListener("click", () =>{
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
        var el = document.querySelector("h2.average-mark");
        el.parentNode.removeChild(el);
        average = averageMark();
        addAverageMark(average);
        }
    });
}())