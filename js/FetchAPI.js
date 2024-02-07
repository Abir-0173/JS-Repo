// callback function-------------
// setTimeout(function() {
//     console.log("Hello world");
// }, 6000);

// let persons = [
//     {firstName: "Tanimur", lastName: "Abir"},
//     {firstName: "Amzad", lastName: "Rahat"}
// ]
// function createPerson(newPerson) {
//     setTimeout(function() {
//         persons.push(newPerson);
//     }, 4000);
// }
// function getPerson(params) {
//     setTimeout(function () {
//         let output = '';
//         persons.forEach(function(personName){
//             output += `<li>${personName.firstName} ${personName.lastName}</li>`
//         });
//         document.getElementById('output').innerHTML = output;
        
//     }, 1000)
// }
//---------------------


let persons = [
    {firstName: "Tanimur", lastName: "Abir"},
    {firstName: "Amzad", lastName: "Rahat"}
]
function createPerson(newPerson, callback) {
    setTimeout(function() {
        persons.push(newPerson);
        callback();
    }, 1000);
}
function getPerson(params) {
    setTimeout(function () {
        let output = '';
        persons.forEach(function(personName){
            output += `<li>${personName.firstName} ${personName.lastName}</li>`
        });
        document.getElementById('output').innerHTML = output;
        
    }, 500)
}

createPerson({firstName:"SH", lastName:"Badhon"}, getPerson);










