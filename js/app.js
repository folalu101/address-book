// Construtor
function Contact (firstName, lastName, phoneNumber, email, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
};

// Create instance of constrctor
let contact1 = new Contact("Adeyemi", "Abolaji", "+234", "kingfolalu@gmail.com", "Ogba");

// Create prototype method to add firstName and lastname
Contact.prototype.addName = function(){
    return this.firstName + " " + this.lastName
};

// Create prototype method to concat PhoneNmber
Contact.prototype.addPhone = function(){
    return this.phoneNumber + "09060186087"
};