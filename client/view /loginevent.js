function loginEvent(){
    var firstname = document.getElementById("firstname");
        if(firstname.value < 1){
            alert("Firstname skal være længere end et bogstav")
        };

    var lastname = document.getElementById("lastname");
        if(lastname.value < 1){
            alert("Lastname skal være længere end et bogstav")
        };
    
    var email = document.getElementById("email");
        if(email.value == ""){
            alert ("Mangler at blive udfyldt")
        };
    
    var password = document.getElementById("password");
        if(password.value < 7 ){
            alert("Password skal være længere end 7 bogstaver")
        };
    }


    function check() {

        // stored data from the register-form
        var storedName = localStorage.getItem('name');
        var storedPw = localStorage.getItem('pw');
    
        // entered data from the login-form
        var userName = document.getElementById('userName');
        var userPw = document.getElementById('userPw');
    
        // check if stored data from register-form is equal to data from login form
        if(userName.value !== storedName || userPw.value !== storedPw) {
            alert('ERROR');
        }else {
            alert('You are loged in.');
        }
    }