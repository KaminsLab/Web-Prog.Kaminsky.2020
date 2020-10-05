//Creating array, sorting, finding min/max values, sum.
function insertionSort(array){
    let tmp, previous;
    for (let i = 1; i < array.length; i++) {
        tmp = array[i];
        previous = i - 1;
        while (previous >= 0 && array[previous] > tmp) {
            array[previous+1] = array[previous];
            array[previous] = tmp;
            previous--;
        }
    }
    console.log('Sorted array:');
    display(array);
}

let display = (array) => {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
    }
}

let sum = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum+=element;
    }
    console.log('Sum of elements: ' + sum);
    return sum;
}

let min = (array) => {
    let min = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element < min)
        min = element;
    }
    console.log('Min value among elements: ' + min);
    return min;
}

let max = (array) => {
    let max = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element > max)
        max = element;
    }
    console.log('Max value among elements: ' + max);
    return max;
}

function arrayToDocument(array){

    let arrayToHtml = document.createElement('div');
    arrayToHtml.className = "array";
    array.forEach(e => arrayToHtml.innerHTML += "<div class = \"item\" >" + e + "</div>" );
    document.body.append(arrayToHtml);
}

(function(){
    var numbers = new Array();
    var tmp;

do{
  tmp = prompt('Введите число', '');
  if(tmp === '' || tmp === null || isNaN(tmp)) break;
  numbers.push(+tmp);
} while(true);

    display(numbers);
    insertionSort(numbers);
    sum(numbers);
    min(numbers);
    max(numbers);
}())