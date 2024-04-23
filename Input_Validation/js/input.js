//get Elements
var phone = document.querySelector('.phone');
var email = document.querySelector('.mail');
var postCode = document.querySelector('.post-code');

//Event Listener
document.getElementById('btnphone').addEventListener('click', phoneCheck);
document.getElementById('btn-mail').addEventListener('click', mailCheck);
document.getElementById('btn-post').addEventListener('click', postCheck);

//Function 

function phoneCheck() {
    // console.log(phone.value);
    /*        /^\+8801[0-9]{9}$/;     /^01[0-9]{9}$/   regularExpression of phone Phone number */ 
    const phoneRegex = /^\+8801[0-9]{9}$/;
    if (phoneRegex.test(phone.value)) {
        alert('Valid Phone Number');
    } else {
        alert('not a Valid Phone Number');
    }
}
function mailCheck() {
    // console.log(email.value);
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailRegex.test(email.value)) {
        alert('Valid  mail');
    } else {
        alert('not a Valid mail');
    }
}

function postCheck() {
    // console.log(postCode.value);
    const postRegex = /^[0-9]{4}$/;
    if (postRegex.test(postCode.value)) {
        alert('You enter a valid Post code.');
    } else {
        alert('not a Valid Post code.');
    }
}


