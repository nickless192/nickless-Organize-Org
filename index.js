const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
const Employees = require('./lib/Employees');

let quit = false;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'What would you like to do? (Use arroy keys)',
            choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View all roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
    
        }
    ]);
};

const promptNewDepartment = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'departmentName',
            message: 'What is the name of the department',
            validate: departmentNameInput  => {
                if (departmentNameInput) {
                    return true;
                }
                console.log('Input cannot be empty.');
                return false;
            }
    
        }
    ]);
};



const promptNewRole = (departmentName) => {
    // const departmentArray = viewDepartments().then(response => {
    //     console.log([response.data]);
    //     return response.data;
    // });
    // console.log(departmentArray);
    console.log(departmentName)
    return inquirer.prompt([
        {
            type: 'text',
            name: 'title',
            message: "What is the role's title?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                console.log('Input cannot be empty.');
                return false;
            }
        }, {
            type: 'number',
            name: 'salary',
            message: 'What is the salary for this role?',
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                }
                console.log('Input cannot be empty.');
                return false;
            }
        }, {
            type: 'list',
            name: 'department_id',
            message: 'What department will the role be assigned to?',
            choices: departmentName
        }
    ]);
}



function init() {
    if (!quit) {
        menu();
    } else {
        console.log("Good bye");
        return;
    }
};

const viewEmployees = () => {
    const sql = `SELECT * FROM employees`;
    // console.log(sql);
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
        } else {
            console.table(rows);
        }
        menu();
    });    
};

const viewRoles = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM roles`;
        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message);
                reject(err);
                return;
            } 
            
            resolve({
                ok: true,
                data: rows
            });
            
        });
    });
};

const viewDepartments = async () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM departments`;
        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message);
                reject(err);
                return;
            } 
            
            resolve({
                ok: true,
                data: rows
            });
        });
    });
};

const addDepartment = () => {
    promptNewDepartment()
    .then(({departmentName}) => {
        const sql = `INSERT INTO departments (name) VALUES (?)`;
        const params = departmentName;
        db.query(sql, params, (err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(`Added ${departmentName} to the database.`);
            }
            menu();
        });
    });
};

const addRole = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM departments`;
        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message);
                reject(err);
                return;
            } 
            
            resolve({
                ok: true,
                data: rows
            });
        });
    })
    .then((response) => {
        const departmentName= response.data.map(department => department.name);
        promptNewRole(departmentName)
        .then(({title, salary, department_id}) => {
            // console.log(department_id);
            // console.log(departmentName);
            const department_name = departmentName.indexOf(department_id);
            // console.log(department_name);
            const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`
            const params = [title, salary, department_name];
    
            db.query(sql, params, (err) => {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log(`Added ${title} to the database.`);
                }
                menu();
            })
        });
    });

};

function menu() {
    promptUser()
    .then (({selection}) => {
        console.log(selection);
        if (selection === 'View all Employees') {
            viewEmployees();
        } else if (selection === 'Quit') {
            quit = true;
            // init();
        } else if (selection === 'View all roles') {
            viewRoles()
            .then( response => {
                console.table(response.data);
                menu();
            });
        } else if (selection === 'View All Departments') {
            viewDepartments()
            .then( response => {
                console.table(response.data);
                menu();
            });
            // menu();
        } else if (selection === 'Add Department') {
            addDepartment();
        } else if (selection === 'Add Role') {
            // addRole(response.data);
            addRole();
        }
        
    });
};

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
    init();
    
});
