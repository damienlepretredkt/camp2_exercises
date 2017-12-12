--1. Write a query in SQL to display the full name (first and last name), and salary for those employees who earn below 6000.
SELECT employee.first_name || ' ' || employee.last_name, employee.salary from employee WHERE salary < 6000;

--2. Write a query in SQL to display the first and last_name, department number and salary for those employees who earn more than 8000.
SELECT employee.first_name, employee.last_name, employee.salary, department.name from employee
  JOIN department ON (employee.department_id = department.id)
  WHERE salary < 8000;

--3. Write a query in SQL to display the first and last name, and department number for all employees whose last name is "McEwen".
SELECT e.first_name, e.last_name, e.salary, d.id from employee e
JOIN department d ON (e.department_id = d.id)
WHERE e.last_name = 'McEwen';

--4. Write a query in SQL to display all the information for all employees without any department number.
SELECT * FROM employee WHERE department_id IS NULL;


--5. Write a query in SQL to display all the information about the department Marketing.
SELECT department.name, first_name || ' ' || last_name AS Manager,
location.street_address || ', ' || location.postal_code || ' ' || location.city AS Location
FROM department
INNER JOIN employee ON (department.manager_id = employee.id)
INNER JOIN location ON (location_id = location.id);


--6. Write a query in SQL to display the full name (first and last), hire date, salary,
-- and department number for those employees whose first name does not containing the letter M
-- and make the result set in ascending order by department number.
SELECT
e.first_name || ' ' || e.last_name AS "Full name",
e.hire_date AS "Hire date", e.salary AS "Salary",
d.name || '(' || d.id || ')' AS "Department"
FROM employee e
INNER JOIN department d ON (e.department_id = d.id)
WHERE e.first_name NOT ILIKE '%m%'
ORDER BY d.id ASC;


-- 7. Write a query in SQL to display all the information of employees whose salary is in the range of 8000 and 12000
-- and commission is not null or department number is except the number 4, 12 and 7 and they have been hired before June 5th, 1987.
SELECT * FROM employee e
INNER JOIN department d ON (e.department_id = d.id)
AND (e.commission_pct != 0 OR (d.id IN (4, 7, 12) AND e.hire_date < '1987-06-5'));



-- 8. Write a query in SQL to display the full name (first and last name), and salary for all employees who does not earn any commission.
SELECT employee.first_name || ' ' || employee.last_name, employee.salary from employee WHERE commission_pct = 0;


--9. Write a query in SQL to display the full name (first and last), the phone number and email separated by hyphen,
-- and salary, for those employees whose salary is within the range of 9000 and 17000.
-- The column headings assign with Full_Name, Contact_Details and Remuneration respectively.
SELECT e.first_name || ' ' || e.last_name AS "Full_Name", e.phone_number || '-' || e.email AS "Contact_Details",
e.salary AS "Remuneration"
FROM employee e
WHERE salary BETWEEN 9000 AND 17000;


--10. Write a query in SQL to display the first and last name, and salary for those employees whose first name is ending with the letter m.
SELECT e.first_name, e.last_name, e.salary
FROM employee e
WHERE e.first_name LIKE '%m';


--11. Write a query in SQL to display the full name (first and last) name, and salary,
-- for all employees whose salary is out of the range 7000 and 15000 and make the result set in ascending order by the full name.
SELECT e.first_name || ' ' || e.last_name AS "Full_Name", e.salary FROM employee e
WHERE e.salary NOT BETWEEN 7000 AND 15000
ORDER BY "Full_Name" ASC;

--12. Write a query in SQL to display the full name (first and last),
-- job id and date of hire for those employees who was hired during November 5th, 2007 and July 5th, 2009.
SELECT e.first_name || ' ' || e.last_name AS "Full_Name", e.job_id, e.hire_date
FROM employee e
WHERE e.hire_date BETWEEN '2007-11-5' AND '2009-07-5';

--13. Write a query in SQL to display the the full name (first and last name),
-- and department number for those employees who works either in department 7 or 9.
SELECT e.first_name || ' ' || e.last_name AS "Full_Name", e.department_id
FROM employee e
WHERE e.department_id IN (7, 9);

--14. Write a query in SQL to display the full name (first and last name),
-- salary, and manager number for those employees who is working under a manager.
SELECT e.first_name || ' ' || e.last_name AS "Full_Name", e.salary, e.manager_id
FROM employee e
WHERE e.manager_id IS NOT NULL;


--15. Write a query in SQL to display all the information from Employees table for those employees who was hired before June 21st, 2002.
SELECT * FROM employee
WHERE employee.hire_date < '2002-06-21';

--16. Write a query in SQL to display the first and last name, email, salary and manager ID,
-- for those employees whose managers are hold the ID 21, 4 or 46.
SELECT e.first_name, e.last_name, e.email, e.salary, e.manager_id
FROM employee e
WHERE e.manager_id in (21, 4, 46);


--17. Write a query in SQL to display all the information for all employees
-- who have the letters D, S, or N in their first name and also arrange the result in descending order by salary.
SELECT * FROM employee e WHERE e.first_name SIMILAR TO '%(D|S|N)%'
ORDER BY e.salary DESC;


--18. Write a query in SQL to display the full name (first name and last name), hire date,
-- commission percentage, email and telephone separated by '-', and salary
-- for those employees who earn the salary above 11000 or the seventh digit in their phone number equals 3 and make the result
-- set in a descending order by the first name.
SELECT e.first_name || ' ' || e.last_name AS "Full_Name",
e.hire_date, e.commission_pct, e.phone_number || '-' || e.email AS "Contact_Details",
e.salary
FROM employee e
WHERE e.salary > 11000 OR (substring(e.phone_number from 7 for 1) = '3')
ORDER BY e.first_name DESC;


--19. Write a query in SQL to display the first and last name, and department number
-- for those employees who holds a letter s as a 3rd character in their first name.
SELECT e.first_name, e.last_name, e.department_id FROM employee e
WHERE substring(e.first_name from 3 for 1) != '';

--20. Write a query in SQL to display the employee ID, first name, job id, and department number
-- for those employees who is working except the departments 5, 3 and 8.
SELECT e.id, e.first_name, e.job_id, e.department_id
FROM employee e
WHERE e.department_id NOT IN (5,3,8);

--21. Write a query in SQL to display the employee Id, first name, job id, and department number
--for those employees whose department number equals 3, 4 or 9.
SELECT e.id, e.first_name, e.job_id, e.department_id
FROM employee e
WHERE e.department_id IN (3,4,9);

--22. Write a query in SQL to display the ID
--for those employees who did two or more jobs in the past.
SELECT * FROM employee WHERE id in ( SELECT employee_id FROM job_history GROUP BY employee_id HAVING COUNT(employee_id) > 1);


--23. Write a query in SQL to display job ID, number of employees, sum of salary,
-- and difference between highest salary and lowest salary for a job.
SELECT employee.job_id, job.title, COUNT(*), SUM(employee.salary), (job.max_salary - job.min_salary) AS "diff" FROM employee
INNER JOIN job on (job.id = employee.job_id)
GROUP BY employee.job_id, "diff", job.title;


--24. Write a query in SQL to display job ID for those jobs that were done by two or more for more than 300 days.
SELECT * FROM employee
WHERE id in (
  SELECT employee_id FROM job_history GROUP BY employee_id HAVING COUNT(employee_id) > 1)
  AND job_id IN (
    SELECT id FROM job_history WHERE (end_date - start_date) > 300
  );

--25. Write a query in SQL to display the country ID and number of cities in that country we have.
SELECT DISTINCT(location.city), country.name FROM location
INNER JOIN country ON (location.country_id = country.id);
