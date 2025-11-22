# Actividad 8: Diseño de API con base de datos MySQL

La actividad consiste en crear una base de datos y establecer un back-end que gestione todas las peticiones para la obtención de la información.

Como pone en las instrucciones tendremos una base de datos con solo 2 tablas:

- authors. {
  id INT AUTO_INCREMENTE PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uq_author_fullname UNIQUE (name,surname)
  }

- posts. {
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

  }

  ## Creación de las rutas de la API

  ### Métodos para POSTS.

  # Listar todos los posts con los datos del autor incluido.

  METHOD: GET
  URL: /api/posts
  HEADERS: X
  BODY: X

  RESPONSE: Array de objetos donde cada objeto es un posts y los datos del autor.

  # Listar un post en concreto con los datos del autor.

  METHOD: GET
  URL: /api/posts/:id
  HEADERS: X
  BODY: X

  RESPONSE: Array con un objeto que es el post con los datos del autor.

  # Crea un post.

  METHOD: POST
  URL: /api/posts
  HEADERS: X
  BODY:
  Content-type: json-aplication

  {
  "author_id": "Lore ipsun",
  "title": "Lore ipsum",
  "category": "Lore Lore Lore", 
  "description": "Lore ipsum lore ipsum"
  }

  ### Métodos para AUTHORS.

  # Obtener todos los autores
  METHOD: GET
  URL: /api/authors
  HEADERS: X
  BODY: X

  RESPONSE: Array de objetos con todos los autores de la base de datos. 

  # Obtener un autor en concreto
  METHOD: GET
  URL: /api/authors/:name/:surname
  HEADERS: X
  BODY:

  RESPONSE: Array con el objeto del autor en concreto. 

  # Crear un autor 
  METHOD: POST
  URL: /api/authors
  HEADERS: X
  BODY: 
  Content-type: json-application

  {
    "name": "David",
    "surname": "Ramirez Moro",
    "email": "david123ramirez@gmail.com",
    "image": "ruta relativa de la imagen"
  }

  # Recuperar todos los posts escritos por un autor en concreto. 
  METHOD: GET
  URL: /api/authors/:name/:surname/posts
  HEADERS: X
  BODY: X


# Express Base Application for API Creation

This is a basic Express application template designed to help you create APIs
quickly. It includes essential configurations and setup for starting an Express
server.

## Features

- Basic Express server setup
- CORS enabled
- Environment configuration with `.env` support

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them
from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/mariogiron/express-init-template.git project-name
```

2. **Navigate to the project directory:**

```bash
cd project-name
```

3. **Install the dependencies:**

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the root of the project and configure your environment
variables. An example `.env` file might look like this:

```
PORT=3000
```

### Running the Application

#### Start the server

Start the server by running:

```bash
npm start
```

The server will start and listen on the port defined in your `.env` file, or
default to port 3000 if not specified.

#### Development mode

To start the server in development mode with `nodemon`, which will automatically
restart the server on file changes, run:

```bash
npm run dev
```

### Available Scripts

- **start**: Runs `node index.js` to start the server.
- **dev**: Runs `nodemon index.js` to start the server in development mode with
  automatic restarts on file changes.
- **generate**: Runs `express generate` to create any resource inside your
  project. The actions available are "model", "controller", "route", "all"
- **config**: Runs `express config` to config the date of your project.

### Project Structure

    ├── src
    │   ├── app.js          # Express app configuration
    │   ├── models          # Data models
    │   ├── controllers     # Route controllers
    │   ├── routes          # Application routes
    ├── .env                # Environment variables
    ├── index.js            # Server creation and configuration
    ├── package.json        # Project metadata and dependencies

### Contributing

Feel free to submit issues and pull requests to improve the project. For major
changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the ISC License - see the LICENSE file for
details.
