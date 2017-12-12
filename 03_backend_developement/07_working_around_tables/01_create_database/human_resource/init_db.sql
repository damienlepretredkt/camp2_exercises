CREATE TABLE region (
id integer CONSTRAINT region_pk PRIMARY KEY,
name varchar(255) NOT NULL
);

CREATE TABLE country (
id integer CONSTRAINT country_pk PRIMARY KEY,
code varchar(5) NOT NULL,
name varchar(255) NOT NULL,
-- region_id integer REFERENCES region (id)
region_id integer
);

CREATE TABLE location (
id integer CONSTRAINT location_pk PRIMARY KEY,
street_address text NOT NULL,
postal_code varchar(20) NOT NULL,
city varchar(255) NOT NULL,
state varchar(255),
-- country_id integer REFERENCES country (id) NOT NULL
country_id integer NOT NULL
);

CREATE TABLE job (
id integer CONSTRAINT job_pk PRIMARY KEY,
code varchar(20) NOT NULL,
title varchar(255) NOT NULL,
min_salary numeric CONSTRAINT positive_salary CHECK (min_salary > 0),
max_salary numeric);

CREATE TABLE job_grade (
id integer CONSTRAINT job_grade_pk PRIMARY KEY,
level varchar(3) NOT NULL,
lowest_salary numeric CONSTRAINT positive_lowest_salary CHECK (lowest_salary > 0),
highest_salary numeric CONSTRAINT positive_highest_salary CHECK (highest_salary > 0));

CREATE TABLE job_history (
id integer CONSTRAINT job_history_pk PRIMARY KEY,
--employee_id integer REFERENCES employee (id) NOT NULL,
employee_id integer NOT NULL,
start_date date NOT NULL,
end_date date,
--job_id integer REFERENCES job (id) NOT NULL,
job_id integer NOT NULL,
-- department_id integer REFERENCES department (id)
department_id integer);

CREATE TABLE department (
id integer CONSTRAINT department_pk PRIMARY KEY,
name varchar(255) NOT NULL,
manager_id integer,
-- location_id integer REFERENCES location (id));
location_id integer);

CREATE TABLE employee (
id integer CONSTRAINT employee_pk PRIMARY KEY,
first_name varchar(255) NOT NULL,
last_name varchar(255) NOT NULL,
email varchar(255) NOT NULL,
phone_number varchar(20),
hire_date date NOT NULL,
--job_id integer REFERENCES job (id) NOT NULL,
job_id integer NOT NULL,
salary numeric NOT NULL,
commission_pct numeric,
--manager_id integer REFERENCES employee (id),
manager_id integer,
-- department_id integer REFERENCES department (id));
department_id integer);


--
--
ALTER TABLE "public"."country" ADD FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE SET NULL;

ALTER TABLE "public"."location" ADD FOREIGN KEY ("country_id") REFERENCES "public"."country"("id") ON DELETE SET NULL;

ALTER TABLE "public"."job_history" ADD FOREIGN KEY ("department_id") REFERENCES "public"."department"("id") ON DELETE SET NULL;

ALTER TABLE "public"."department" ADD FOREIGN KEY ("manager_id") REFERENCES "public"."employee"("id") ON DELETE SET NULL;
ALTER TABLE "public"."department" ADD FOREIGN KEY ("location_id") REFERENCES "public"."location"("id") ON DELETE SET NULL;

ALTER TABLE "public"."employee" ADD FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE SET NULL;
ALTER TABLE "public"."employee" ADD FOREIGN KEY ("manager_id") REFERENCES "public"."employee"("id") ON DELETE SET NULL;
ALTER TABLE "public"."employee" ADD FOREIGN KEY ("department_id") REFERENCES "public"."department"("id") ON DELETE SET NULL;
