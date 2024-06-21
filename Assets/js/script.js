// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to collect employee data
const collectEmployees = function() {
  const employees = []; // Array to store employee objects
  let addMore = true; // Control variable to continue adding employees

  while (addMore) {
    const firstName = prompt("Enter the employee's first name:"); // Prompt for first name
    const lastName = prompt("Enter the employee's last name:"); // Prompt for last name
    const salary = parseFloat(prompt("Enter the employee's salary:")); // Prompt for salary and convert to a float

    // Validate input and add employee to the array
    if (firstName && lastName && !isNaN(salary)) {
      employees.push({ firstName, lastName, salary }); // Add employee object to the array
    } else {
      alert("Invalid input. Please try again."); // Alert user for invalid input
      continue; // Restart the loop for valid input
    }

    addMore = confirm("Do you want to add another employee?"); // Confirm if the user wants to add more employees
  }

  return employees; // Return the array of employees
};

// Function to display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0); // Calculate total salary
  const averageSalary = totalSalary / employeesArray.length; // Calculate average salary
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`); // Log average salary to the console
};

// Function to select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length); // Generate a random index
  const randomEmployee = employeesArray[randomIndex]; // Get the employee at the random index
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`); // Log the random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Function to display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr"); // Create a new table row

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName; // Set first name cell content
    newTableRow.append(firstNameCell); // Append cell to row

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName; // Set last name cell content
    newTableRow.append(lastNameCell); // Append cell to row

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell); // Append salary cell to row

    employeeTable.append(newTableRow); // Append row to table
  }
};

// Main function to handle employee data tracking
const trackEmployeeData = function() {
  const employees = collectEmployees(); // Collect employees from user input

  console.table(employees); // Log employees in a table format

  displayAverageSalary(employees); // Display average salary

  console.log('==============================');

  getRandomEmployee(employees); // Select and log a random employee

  // Sort employees by last name
  employees.sort(function(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees); // Display employees in the HTML table
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData); // Trigger trackEmployeeData function on button click
