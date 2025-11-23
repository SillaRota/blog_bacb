# Actividad 8: Diseño de API con base de datos MySQL

La actividad consiste en crear una base de datos y establecer un back-end que gestione todas las peticiones para la obtención de la información.

Aqui se listan los diferentes tipos de URLs para testear este proyecto. Recuerde que para que todos funcione correctamente debe de sustituir en el archivo .env.example, los valores que aparacen por los de sus máquina y renombrarlo como .env. 

### Listar autores
GET http://localhost:3000/api/authors

### Obtener autor por nombre y apellido
GET http://localhost:3000/api/authors/Ana/Martinez

### Intenatr obtener un autor por nombre y apellido QUE NO EXISTE
GET http://localhost:3000/api/authors/Ana/Pera 

### Obtener posts de un autor
GET http://localhost:3000/api/authors/Ana/Martinez/posts

### Obtener posts de un autor QUE NO EXISTE
GET http://localhost:3000/api/authors/Ana/Pera/posts

### Obtener posts de un autor que NO tiene posts
GET http://localhost:3000/api/authors/Lucia/Perez/posts

### Crear autor
POST http://localhost:3000/api/authors
Content-Type: application/json

{
  "name": "Claudia",
  "surname": "Cristina Corona",
  "email": "ccclau@example.com",
  "image": "https://picsum.photos/seed/lucia/200/200"
}


### Listar los posts con los autores
GET http://localhost:3000/api/posts

### Obtener post por id
GET http://localhost:3000/api/posts/2

### Crear un nueva post
POST  http://localhost:3000/api/posts
Content-Type: application/json

{
  "title": "Titulo",
  "description": "Descripcion del post",
  "category": "Backend",
  "author_id": 1
}



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

### Métodos para POSTS

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

-RESPONSE: Array con un objeto que el el post con los datos del autor incluido. 

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

-RESPONSE: Array con el autor en concreto creado. 

### Recuperar todos los posts escritos por un autor (:id) en concreto

- METHOD: GET
- URL: /api/authors/:id/posts
- HEADERS: X
- BODY: X
