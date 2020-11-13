let Person = function (name){
    this.name=name;
}
Person.prototype.Introduce = function(){
    console.log('Hello my name is ' + this.name); 
}

let p1 = new Person('fatih');

p1.Introduce();




let Teacher = function (name,branch){
    Person.call(this,name);
    this.branch=branch;
}
Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;
Teacher.prototype.teach=function(){
    console.log('I teach '+this.branch)
}

let t1 = new Teacher('Selim','math');
t1.Introduce();
t1.teach();

let Student = function (name,number){
    Person.call(this,name);
    this.number=number;
}

Student.prototype=Object.create (Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.study= function(){
    console.log('My student number is '+this.number + 'I have already studied hard')
}
let s1 = new Student('Ela',310);


s1.Introduce();
s1.study();

let Headmaster = function(name,branch){
  
    Teacher.call(this,name,branch);
}

Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype.console=Headmaster;
Headmaster.prototype.shareTask=function(){
    console.log('I have already shared all the work ')
}

let Hm= new Headmaster('zel','physic');
Hm.Introduce();
Hm.teach();
Hm.shareTask();