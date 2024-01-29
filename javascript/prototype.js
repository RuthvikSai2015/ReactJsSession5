let data = {
    name : 'kumar',
    age : 32,
    calculateAge : function(){
        console.log("current age is --- "+(2024 - this.birthYear));
    }
}
function user(email,name){
    this.email = email;
    this.name = name ;
    this.birthYear = birthYear;
}
user.prototype.calculateAge = function(){
    console.log("current age is --- "+(2024 - this.birthYear));
}
