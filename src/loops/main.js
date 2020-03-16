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

            // for (const employee of employees) {
            //     rows += (`<tr class="listItem"><td>${employee.employee_name}</td><td>${employee.employee_salary}</td></tr>`);
            // }

            rows = employees.map(employee => `<tr class="listItem"><td>${employee.employee_name}</td><td>${employee.employee_salary}</td></tr>`).join(' ');

            document.getElementById('for_loop').innerHTML = rows;
        }
    }
    oReq.open("GET", "http://dummy.restapiexample.com/api/v1/employees");
    oReq.send();
}

