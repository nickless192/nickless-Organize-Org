INSERT INTO departments (name)
VALUES
('Engineering'),
('Sales'),
('Human Resources'),
('Quality');

INSERT INTO roles (title, salary, department_id)
VALUES
('Engineering Manager', 200000, 1),
('Sales Manager', 190000, 2),
('Human Resources Manager', 150000, 3),
('Quality Manager', 200000, 4),
('Senior Engineer', 150000, 1),
('Sales Representative', 190000, 2),
('Payroll Technicial', 55000, 3),
('Quality Control Technician', 60000, 4),
('Quality Engineer', 100000, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Paolo', 'Pasolini', 1, NULL),
('Heathcote', 'Williams', 2, NULL),
('Sandy', 'Powell', 3, NULL),
('Emil', 'Zola', 4, NULL),
('Sissy', 'Coalpits', 1, 1),
('Antoinette', 'Capet', 2,3),
('Samuel', 'Delany', 3, 2),
('Tony', 'Duvert', 4, 1),
('Dennis', 'Cooper', 5, 1),
('Monica', 'Bellucci', 6, 2),
('Samuel', 'Johnson', 7, 3),
('John', 'Dryden', 8, 4),
('Alexander', 'Pope', 9, NULL),
('Lionel', 'Johnson', 9, 1),
('Aubrey', 'Beardsley', 9, 2);