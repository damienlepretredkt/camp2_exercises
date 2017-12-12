-- 1. Write a query in SQL to display the first name, last name, department number, and department name for each employee.
SELECT e.first_name, e.last_name, e.department_id, d.name FROM employee e
INNER JOIN department d ON (e.department_id = d.id);

-- 2. Write a query in SQL to display the first and last name, department, city, and state province for each employee.
SELECT e.first_name, e.last_name, d.name, l.city , l.state FROM employee e
INNER JOIN department d ON (e.department_id = d.id)
INNER JOIN location l ON (d.location_id = l.id);


-- 3. Write a query in SQL to display the first name, last name, salary, and job grade for all employees.
SELECT e.first_name, e.last_name, e.salary, (SELECT level FROM job_grade jg WHERE e.salary BETWEEN jg.lowest_salary AND jg.highest_salary)
FROM employee e;


-- 4. Write a query in SQL to display the first name, last name, department number and department name, for all employees
-- for departments 8 or 4.
SELECT e.first_name, e.last_name, e.department_id, d.name
FROM employee e
INNER JOIN department d ON (e.department_id = d.id);

-- 5. Write a query in SQL to display those employees who contain a letter z to their first name and also display their
-- last name, department, city, and state province.


-- 6. Write a query in SQL to display all departments including those where does not have any employee.
SELECT * FROM department;

-- 7. Write a query in SQL to display the first and last name and salary for those employees who earn less than the
-- employee earn whose number is 83.
SELECT e.first_name, e.last_name, e.salary FROM employee e
WHERE e.salary < (SELECT salary FROM employee where id = 83);


-- 8. Write a query in SQL to display the first name of all employees including the first name of their manager.
SELECT e.first_name, e.last_name, e2.first_name, e2.last_name FROM employee e
INNER JOIN employee e2 ON (e.manager_id = e2.id);

-- 9. Write a query in SQL to display the department name, city, and state province for each department.


-- 10. Write a query in SQL to display the first name, last name, department number and name, for all employees who have or
-- have not any department.


--12. Write a query in SQL to display the first name, last name, and department number
-- for those employees who work in the same department as the employee who hold the last name as Taylor.
SELECT e.first_name, e.last_name, e.department_id FROM employee e
INNER JOIN employee e2  ON (e.department_id = e2.department_id AND e2.last_name = 'Taylor')




SELECT e.department_id FROM employee e WHERE e.last_name = 'Taylor';





--20. Write a query in SQL to display the details of jobs which was done by any of the employees who is presently earning a salary on and above 12000.
SELECT j.* FROM employee e
INNER JOIN job j ON (j.id = e.job_id)
WHERE e.salary >= 12000;

--21. Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.
SELECT d.name, e.first_name || ' ' || e.last_name AS "Full name", l.city
FROM department d
INNER JOIN employee e ON (e.id = d.manager_id)
INNER JOIN location l ON (l.id = d.location_id);


--22. Write a query in SQL to display the employee ID, job name, number of days worked in for all those jobs in department 8.


--23. Write a query in SQL to display the full name (first and last name), and salary of those employees who working in any department located in London.

--24. Write a query in SQL to display full name(first and last name), job title, starting and ending date of last jobs
--for those employees with worked without a commission percentage.

--25. Write a query in SQL to display the department name and number of employees in each of the department.

--26. Write a query in SQL to display the full name (fisrt and last name ) of employee with ID and name of the country presently where (s)he is working.
