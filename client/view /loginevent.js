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


    