/*
//function to JSON & JSON to Function
var student = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka"
};

var student_json = JSON.stringify(student);

console.log(student_json);

var student_new = JSON.parse(student_json);
console.log(student_new); 
--------------------------------------------------*/
// https://jsonlint.com
// String
// Number
// Object (JSON Object)
// Array
// Boolean
// null
/*
// dosen't support undefined, date, function

var person = {
    name: "Rahim", //string 
    age: 25, // Number
    hometown: "Noakhali",
    married: false,//boolean
    dob: 2000-3 - 12,//Date
    text_null: null, //null
    test_undefined: undefined, //undefined
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}
var person_json = JSON.stringify(person);// JAVSCRIPT File er vitore json use korle [stringify] use korte hobe 
console.log(person_json);


//-------------------------------------------------
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "/js/data.json", true);
xmlhttp.send();


function jsonData(json_obj) {
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    //console.log(js_obj);

    for (x in js_obj.persons) {
        //console.log(x);

        var persons = js_obj.persons;
        // console.log(persons[x]);
        for (y in persons[x]) {
            console.log(persons[x][y]);
        }

    }
} 
*/

