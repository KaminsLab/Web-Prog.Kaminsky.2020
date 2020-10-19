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

 function addToDocument(student){
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

     firstName.textContent = student.getFirstName();
     lastName.textContent = student.getLastName();
     age.textContent = student.getAge();
     mark.textContent  = student.getMark();

     element.appendChild(lastName);
     element.appendChild(firstName);
     element.appendChild(age);
     element.appendChild(mark);
     table.appendChild(element);
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
    var students = [];
    for (let i = 0; i < 4; i++) {
        students[i] = new Student();
    }

    setStudent(students[0], "Ivanov", "Ivan", 20, 9);
    setStudent(students[1], "Petr", "Petrov", 23, 7);
    setStudent(students[2], "Sidor", "Sidorov", 22, 10);
    setStudent(students[3], "Mihail", "Mishkin", 18, 4);

    for (let i = 0; i < 4; i++) {
        addToDocument(students[i]);
    }

    var student1 = new Student();

    var firstNameBox = document.show.firstName1;
    firstNameBox.addEventListener("change", (e) =>{
        let value = e.target.value;
        student1.setFirstName(value);
    })
    firstNameBox.addEventListener("blur", (e) =>{
        var text = firstNameBox.value.trim();
        if(text==="")
            firstNameBox.style.borderColor = "red";
        else
            firstNameBox.style.borderColor = "green";
    });

    var lastNameBox = document.show.lastName1;
    lastNameBox.addEventListener("change", (e) =>{
        let value = e.target.value;
        student1.setLastName(value);
    })
    lastNameBox.addEventListener("blur", (e) =>{
        var text = lastNameBox.value.trim();
        if(text==="")
            lastNameBox.style.borderColor = "red";
        else
            lastNameBox.style.borderColor = "green";
    });
    
    var ageBox = document.show.age1;
    ageBox.addEventListener("change", (e) =>{
        let value = Number(e.target.value);
        student1.setAge(value);
    })
    ageBox.addEventListener("blur", (e) =>{
        var text = ageBox.value.trim();
        if(text==="")
            ageBox.style.borderColor = "red";
        else
            ageBox.style.borderColor = "green";
    });

    var markBox = document.show.mark1;
    markBox.addEventListener("change", (e) =>{
        let value = Number(e.target.value);
        student1.setMark(value);
    })
    markBox.addEventListener("blur", (e) =>{
        var text = markBox.value.trim();
        if(text==="")
            markBox.style.borderColor = "red";
        else
            markBox.style.borderColor = "green";
    });

    var printButton = document.show.print;
    printButton.addEventListener("click", () =>{
        if(student1.getFirstName()!="" )
        addToDocument(student1);
        var average = averageMark();
        addAverageMark(average);
    });
}())