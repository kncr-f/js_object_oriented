// Object.create

let personProto = {
    calculateAge : function (){
        return 2020 - this.yearOfBirth;    }
}

let fatih = Object.create(personProto);


fatih.name='fatih';
fatih.yearOfBirth=1986;
fatih.job='student';
console.log(fatih);
console.log(fatih.calculateAge());

let zels = Object.create(personProto,{
name: {value : 'zels'},
yearOfBirth: {value :1990},
job:{value :"doctor"}

});

console.log(zels);
console.log(zels.calculateAge());