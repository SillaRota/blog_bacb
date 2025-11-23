# Actividad 8: Diseño de API con base de datos MySQL

La actividad consiste en crear una base de datos y establecer un back-end que gestione todas las peticiones para la obtención de la información.

## Estructura de tablas

### authors

```
id INT AUTO_INCREMENTE NOT NULL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
surname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
image VARCHAR(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT uq_author_fullname UNIQUE (name,surname)
```

### posts

```
id INT AUTO_INCREMENT PRIMARY KEY,
author_id INT NOT NULL,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
category VARCHAR(200),
CONSTRAIN fk_posts_author
FOREIGN KEY(author_id) REFERENCES authors(id)
ON DELETE CASCADE ON UPDATE CASCADE;

    INDEX idx_posts_author(author_id),
    INDEX idx_posts_category (category)
```

## Creación de las rutas de la API

### MǸtodos para POSTS

**Listar todos los posts con los datos del autor incluido.**

- METHOD: GET
- URL: /api/posts
- HEADERS: X
- BODY: X
- RESPONSE: Array de objetos donde cada objeto es un posts y los datos del autor.

**Listar un post en concreto con los datos del autor.**

- METHOD: GET
- URL: /api/posts/:id
- HEADERS: X
- BODY: X
- RESPONSE: Array con un objeto que es el post con los datos del autor.

**Crea un post.**

- METHOD: POST
- URL: /api/posts
- HEADERS: X
- BODY (Content-type: json-aplication):

```json
{
  "author_id": "Lore ipsun",
  "title": "Lore ipsum",
  "category": "Lore Lore Lore",
  "description": "Lore ipsum lore ipsum"
}
```

### Métodos para AUTHORS

**Obtener todos los autores**

- METHOD: GET
- URL: /api/authors
- HEADERS: X
- BODY: X
- RESPONSE: Array de objetos con todos los autores de la base de datos.

**Obtener un autor en concreto**

- METHOD: GET
- URL: /api/authors/:name/:surname
- HEADERS: X
- BODY:
- RESPONSE: Array con el objeto del autor en concreto.

**Crear un autor**

- METHOD: POST
- URL: /api/authors
- HEADERS: X
- BODY (Content-type: json-application):

```json
{
  "name": "David",
  "surname": "Ramirez Moro",
  "email": "david123ramirez@gmail.com",
  "image": "ruta relativa de la imagen"
}
```

### Recuperar todos los posts escritos por un autor en concreto

- METHOD: GET
- URL: /api/authors/:name/:surname/posts
- HEADERS: X
- BODY: X
