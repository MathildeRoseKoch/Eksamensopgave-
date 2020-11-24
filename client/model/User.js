class User {
    constructor(firstname, lastname, age, location, gender, interest, email, password){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.location = location
    this.gender = gender;
    this.interest = interest;
    this.email = email;
    this.password = password;
    
    }
}

module.export = { 
    User : User, 
}

