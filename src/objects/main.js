let person = new Object();
person.name = "test person name";
person.hourlyPay = 60;
person.isEmployee = true;
person.dayswork = 22;
person.getMonthlySalary = function() {
    console.log("PAY CHECK : ", this.hourlyPay * this.dayswork)
}

console.log(person);

person.getMonthlySalary();


/**
 */


let student = {
    name: "stundent name",
    age: 22,
    monthlyPresent: 15,
    getAnualPresentDays: function () {
        console.log("ANUAL PRESENT : ", this.monthlyPresent * 12);
    }
}

console.log(student);

student.getAnualPresentDays();

student.collegeName = "dfslkdflkasdjflkajsdlf";

console.log(student);
