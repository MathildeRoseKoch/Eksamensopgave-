// opstiller variable for hver sign up form og giver dem et kalde navn 
var name1 = document.getElementById('name1');
var pw = document.getElementById('pw');
var email = document.getElementById("email")
var birthday = document.getElementById("birthday")
var genderFemale = document.getElementById("option 1")
var genderMale = document.getElementById("option2")
var genderOther = document.getElementById("option 3")

// kalder localstorage og bruger set funktionen til at sætte keyword til den value
function store() {
    localStorage.setItem('fullname', name1.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem("email", email.value)
    localStorage.setItem("birthday", birthday.value)
    localStorage.setItem("option 1", genderFemale.value)
    localStorage.setItem("option 2", genderMale.value)
    localStorage.setItem("option 3", genderOther. value)
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