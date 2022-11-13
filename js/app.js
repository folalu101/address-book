// Construtor
// function Contact (firstName, lastName, phoneNumber, email, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
//     this.address = address;
// };

// Create instance of constrctor
// let contact1 = new Contact("Adeyemi", "Abolaji", "+234", "kingfolalu@gmail.com", "Ogba");

// Create prototype method to add firstName and lastname
// Contact.prototype.addName = function(){
//     return this.firstName + " " + this.lastName
// };

// Create prototype method to concat PhoneNmber
// Contact.prototype.addPhone = function(){
//     return this.phoneNumber + "09060186087"
// };

// add prototype to find a contact by name ( Hint: contact)
// Contact.prototype.findContact = function(name){
//     if ( this.Contant[name] != undefined){
//         return this.Contact[name];
//     } else {
//         return false;
//     }
    
// }
// console.log(contact1.findContact());

// add prototype to find a contact to edit contact

// new address book constrctor





//  Business Logic for AddressBook ---------
// function AddressBook() {
//   this.contacts = {};
// }

// prototype to save a new contact
// AddressBook.prototype.addContact = function(contact) {
//     this.contacts[contact.firstName] = contact;
//   };

// Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

// full name prototype
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };

// unique ogject id
// Business Logic for AddressBook ---------
function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
  }

//   prototype tp assign a unique id to each contact
AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };


  // Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

//   fullname prototype
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };