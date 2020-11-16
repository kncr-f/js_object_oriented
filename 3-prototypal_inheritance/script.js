//prototypal inheritance
let Person = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge=function(){
    return 2020 -this.yearOfBirth;
}


let Teacher = function (name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    this.subject=subject;
}




//Inherit the Person prototype methods

Teacher.prototype=Object.create(Person.prototype);
//set teacher instructor
Teacher.prototype.constructor=Teacher;

Teacher.prototype.greeting=function(){
    return 'hello my name is '+ this.name;
}


let zels = new Teacher('zels','1990','teacher','math');

console.log(zels);
console.log(zels.calculateAge());
