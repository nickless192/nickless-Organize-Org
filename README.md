# Nickless Organize Org

## Description

Our Nickless Organize Org offers a simple yet powerful content management system (CMS) setup for new small businesses looking to maintain a well organized company structure.

This application leverages Inquirer to prompt data from the users, and MySQL to store data as appropriate. The application will allow its users to:

- View and add employees;
- Update employee's role;
- View and add new roles;
- View and add deparments as the company expands.

## User Story

AS A business owner<br />
I WANT to be able to view and manage the departments, roles, and employees in my company<br />
SO THAT I can organize and plan my business<br />

## Acceptance Criteria

GIVEN a command-line application that accepts user input<br />
WHEN I start the application<br />
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role<br />
WHEN I choose to view all departments<br />
THEN I am presented with a formatted table showing department names and department ids<br />
WHEN I choose to view all roles<br />
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br />
WHEN I choose to view all employees<br />
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to <br />
WHEN I choose to add a department<br />
THEN I am prompted to enter the name of the department and that department is added to the database<br />
WHEN I choose to add a role<br />
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br />
WHEN I choose to add an employee<br />
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database<br />
WHEN I choose to update an employee role<br />
THEN I am prompted to select an employee to update and their new role and this information is updated in the database<br />

## Usage

To start the execution of the application local, type 

```npm start```

 which will connect to our MySQL database and will prompt users accordingly.


## Contribute

To contribute to this project, please fork it from the GitHub repository and when the pull request is sent, our team will work on merging the changes as needed/appropriate.

GitHub Repository: https://github.com/nickless192/nickless-Organize-Org

Link to demo: https://drive.google.com/file/d/1yCzIZbIaU6di9EpOp6syjcJJuD74ysct/view

## Testing

At the moment, no testing is set up for this project. Please visit us soon for more updates on testing.

## License

This project is covered under the MIT license agreement.

## Questions

Find my GitHub profile at https://github.com/nickless192.

## Contributors

Made with ❤️ by Nickless192 (Omar Rodriguez)