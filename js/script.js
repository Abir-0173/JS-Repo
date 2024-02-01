
/*
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
/*
// Switch
console.log("Select an option:na. Option 1 nb. Option 2 nc. Option 3 ");

choice = prompt();

var text;

switch (choice) {
    case "a": //if(choice=="a")
        text = "Option 1 Selected!";
        break;
    case "b":
        text = "Option 2 Selected!";
        break;
    case "c":
        text = "Option 3 Selected!";
        break;
    default: // else
        text = "No option is selected!";
        break;
}

console.log(text);
*/
/* ##########################------------------------------------- 
var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var seris = "";

for (var i = 1; i <= n; i++) {
    
    sum += i ** 2
    seris += (i ** 2).toString();
    if (i == n) { continue; }
    seris += " + ";


}
console.log(`${seris} = ${sum}`);
*/
/* ##########################------------------------------------- 

var foods = ["tea", "biskit", "big", "it..!"];
var num = [1, 2, 4, 5, 6, 7, 8];

function abir(a) {//Parameters 
    return `This is ${a}`;
    // console.log(a );
}

let khana = foods.map(abir);
console.log(khana);
let newvar = num.forEach(abir);
console.log(newvar);
// console.log(abir(10, 14),);//argument
// console.log(abir(110, 14),);
// console.log(abir(15210, 14),);
// console.log(abir(10, 1654514),);
*/
/*-----------------------------------------------------------------------------
// Object Method 
let person = {
    firstname: "abir",
    lastname: "rahman",
    dob: "12-03-2000", //number, string, date, array, object

    fullname: function () { //Method
        return `${this.firstname} ${this.lastname} & his birth-day ${this.dob}`;// {"this"} work only inside object.
    }

}

console.log(person.firstname);
console.log(person.fullname());

let str = "Bohubrihi";
console.log(str.length);
console.log(str.split());

*/
/*---------------------------------------------------------------------------

// let fun =()=>{let a =6;console.log(a);}

let a = (name) => { return (age) => console.log(name, age) }
a("rahim")(23);
--*/



// document.getElementById();





