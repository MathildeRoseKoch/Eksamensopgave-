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

class image {
    constructor(filename, upload){
        this.filename = filename
        this.upload = upload
    }
}

class match {
    constructor(user1, user2){
        this.user1 = user1
        this.user2 = user2
    }
}

module.export = { 
    User : User, 
}

