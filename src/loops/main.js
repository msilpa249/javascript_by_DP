function loadData() {
    getEmployees();
}

function  getEmployees() {
    let oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function() {
        if (oReq.readyState == XMLHttpRequest.DONE) {
            const employees = oReq.responseText ? JSON.parse(oReq.responseText).data : [];

            /**
             * FOR LOOP
             */
            let rows = '';
            rows += '<tr><td>Name</td><td>Salary</td></tr>'
            // for (let i=0; i < employees.length; i++) {
            //     rows += (`<tr class="listItem"><td>${employees[i].employee_name}</td><td>${employees[i].employee_salary}</td></tr>`);
            // }

            // for(let index in employees) {
            //     rows += (`<tr class="listItem"><td>${employees[index].employee_name}</td><td>${employees[index].employee_salary}</td></tr>`);
            // }

            // let newEmployee = [];
            // for (const employee of employees) {
            //     if(employee.employee_salary > 200000) {
            //         newEmployee.push(employee)
            //     }
            //     rows += (`<tr class="listItem"><td>${employee.employee_name}</td><td>${employee.employee_salary}</td></tr>`);
            // }
            // console.log(newEmployee);
            // let newEmp = employees.filter(employee => employee.employee_salary > 200000);
            // console.log(newEmp);

            console.log(employees);
            let myMap = new Map();
            for (const employee of employees) {
                const data = {
                    employee_age: employee.employee_age,
                    employee_salary: employee.employee_salary
                }

                myMap.set(employee.employee_name, data);
            }

            console.log(myMap);

            const newMapFromMap = employees.map(employee => new Map().set(employee.employee_name, {employee_age: employee.employee_age, employee_salary: employee.employee_salary}));
            console.log(newMapFromMap);

            rows = employees.map(employee => `<tr class="listItem"><td>${employee.employee_name}</td><td>${employee.employee_salary}</td></tr>`).join(' ');

            document.getElementById('for_loop').innerHTML = rows;


            callSwitch();
        }
    }
    oReq.open("GET", "http://dummy.restapiexample.com/api/v1/employees");
    oReq.send();
}

function callSwitch(value) {
    switch (value) {
        case "a":
            console.log("Printing A data value : ", value);
            break;
        case "b":
            console.log("Printing B data value : ", value);
            break;
        case "c":
            console.log("Printing C data value : ", value);
            break;
        default:
            console.log("Not Matching : ", value);
            break;
    }
}

