-- Find the total number of users from each Email host 
-- How many comme from gmail, how many come from yahoo, how many come from outlook, etc...

SELECT
    CASE 
        WHEN email LIKE '%yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%hotmail.com' THEN 'hotmail'
        WHEN email LIKE '%gmail.com' THEN 'gmail'
        ELSE 'other'
    END AS EMAIL_HOST,
    COUNT(*) AS 'Total Users from each Email Host'
FROM users
GROUP BY EMAIL_HOST
ORDER BY COUNT(*) DESC;

-- How many users signed-up in each month

SELECT 
    MONTHNAME(created_at) AS MONTH,
    COUNT(*) AS 'Number of Sign-Ups Per Month'
FROM users
GROUP BY MONTH
ORDER BY COUNT(*) DESC;

-- Find the first day a person signed-up for the petition

SELECT 
    MIN(created_at) AS 'Date of first sign-up',
    email AS 'Email of First User'
FROM users;

