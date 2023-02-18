CREATE DATABASE petition_data;

USE petition_data;

-- USERS table
-- We want to ensure duplicate emails do not sign up

CREATE TABLE users ( 
	email VARCHAR(255) PRIMARY KEY,
	created_at TIMESTAMP DEFAULT NOW()
);

-- Here I will insert preliminary data to fill the table
-- This is the last time I will insert data manually

INSERT INTO users (email) VALUES
    ('mark234#yahoo.ca'), ('john54@hotmail.com');
    
