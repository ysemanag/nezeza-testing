-- adding the first user
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Insert sample data into users table
INSERT INTO users
    (username, email, password_hash)
VALUES
    ('john_doe', 'john.doe@example.com', 'hashedpassword123'),
    ('jane_smith', 'jane.smith@example.com', 'hashedpassword456'),
    ('alice_jones', 'alice.jones@example.com', 'hashedpassword789');