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


// let persons = [
//     {firstName: "Tanimur", lastName: "Abir"},
//     {firstName: "Amzad", lastName: "Rahat"}
// ]
// function createPerson(newPerson, callback) {
//     setTimeout(function() {
//         persons.push(newPerson);
//         callback();
//     }, 1000);
// }
// function getPerson(params) {
//     setTimeout(function () {
//         let output = '';
//         persons.forEach(function(personName){
//             output += `<li>${personName.firstName} ${personName.lastName}</li>`
//         });
//         document.getElementById('output').innerHTML = output;

//     }, 500)
// }

// createPerson({firstName:"SH", lastName:"Badhon"}, getPerson);
//------------------------ooo----------ooo-------------oooo----------------


//promises
//.then

// let persons = [
//         {firstName: "Tanimur", lastName: "Abir"},
//         {firstName: "Amzad", lastName: "Rahat"}
//     ]
//     function createPerson(newPerson, ) {
//         let prom = new Promise(function (resolve, reject) {
//             persons.push(newPerson);
//             let error = false;

//             if (!error){
//                 resolve();
//             }
//             else{
//                 reject('error! Somthing wrong!');
//             }
//         })
//        return prom;
//     }
//     function getPerson(params) {
//         setTimeout(function () {
//             let output = '';
//             persons.forEach(function(personName){
//                 output += `<li>${personName.firstName} ${personName.lastName}</li>`
//             });
//             document.getElementById('output').innerHTML = output;

//         }, 500)
//     }

//     createPerson({firstName:"SH", lastName:"Badhon"}).then(getPerson)
//     .catch(function(err){
//         console.log(err);
//     })

//----------------------------- Fatch API ---------------------
// console.log(window);
//without arrow---------
// document.getElementById("get_data").addEventListener('click', getData);

// xhr.open('GET', 'http://api.icndb.com/jokes/random/', true);

// function getData() {
//     fetch('https://randomuser.me/api/')
//     .then(function(res){
//         console.log(res.json());
//         // return res.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
// }


//with arrow function ------------

document.getElementById("get_data").addEventListener('click', getData);

// let test = () => {};


function getData() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        // return res.json();

        .then(data => { console.log(data); })
        .catch(err => { console.log(err); })

}







