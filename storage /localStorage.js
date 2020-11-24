// opstiller variable for hver sign up form og giver dem et kalde navn 

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var password = document.getElementById('password');
var email = document.getElementById("email")
var birthday = document.getElementById("birthday")
var genderFemale = document.getElementById("female")
var genderMale = document.getElementById("male")
var genderOther = document.getElementById("other")
var interestFemale = document.getElementById("female")
var interestMale = document.getElementById("male")
var interestOther = document.getElementById("other")

// kalder localstorage og bruger set funktionen til at sætte keyword til den value
function store() {
    localStorage.setItem('fullname', firstname.value);
    localStorage.setItem("lastname", lastname.value)
    localStorage.setItem('password', password.value);
    localStorage.setItem("email", email.value)
    localStorage.setItem("birthday", birthday.value)
    localStorage.setItem("gender", genderFemale.value)
    localStorage.setItem("gender", genderMale.value)
    localStorage.setItem("gender", genderOther. value)
    localStorage.setItem("interest", genderFemale1.value)
    localStorage.setItem("interest", genderMale1.value)
    localStorage.setItem("interest", genderOther1.value)
}


// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name1');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}