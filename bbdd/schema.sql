-- Esquema de base de datos para la actividad 8 (API Express + MySQL)

CREATE DATABASE blog;
USE blog;

CREATE TABLE IF NOT EXISTS authors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uq_author_fullname UNIQUE (name, surname)
);

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  author_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  category VARCHAR(200),
  CONSTRAINT fk_posts_author FOREIGN KEY (author_id)
    REFERENCES authors (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  INDEX idx_posts_author (author_id),
  INDEX idx_posts_category (category)
);







