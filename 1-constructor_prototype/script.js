

let Employee = function(name,salary){

if(!(this instanceof Employee)){
    return new Employee(name,salary);
}

    this.name=name;
    this.salary=salary;

}

Employee.prototype.calculateSalary=function(){

    var month = new Date().getMonth()+1;
    var tax =0; 
    var total =month*this.salary;


    if (total<=20000){
        tax=total * 0.2;

    }else if(total>20000 && total<=30000){
        tax=total * 0.25;
    }else{
        tax=total * 0.3;
    }
    return{
        tax: tax,
        paid: total - tax
    }

}


let fatih =  Employee('fatih','3000');

let fatih_salary=fatih.calculateSalary();

let zels=new Employee('zels','4000');

let zels_salary=zels.calculateSalary();

console.log(`${fatih.name} tax : ${fatih_salary.tax} € and salary : ${fatih_salary.paid} €` );
console.log(`${zels.name} tax : ${zels_salary.tax} € and salary : ${zels_salary.paid } €` )