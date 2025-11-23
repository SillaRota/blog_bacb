USE blog;

-- Autores de ejemplo
INSERT INTO authors (name, surname, email, image) VALUES
  ('Ana', 'Martinez', 'ana.martinez@example.com', 'https://picsum.photos/id/1011/200/200'),
  ('Luis', 'Garcia', 'luis.garcia@example.com', 'https://picsum.photos/id/1012/200/200'),
  ('Carla', 'Ramos', 'carla.ramos@example.com', 'https://picsum.photos/id/1013/200/200'),
  ('Diego', 'Santos', 'diego.santos@example.com', 'https://picsum.photos/id/1014/200/200'),
  ('Sofia', 'Lopez', 'sofia.lopez@example.com', NULL);

-- Posts de ejemplo (author_id corresponde al orden anterior)
INSERT INTO posts (author_id, title, description, category) VALUES
  (1, 'Guia rapida de Express', 'Pasos basicos para levantar una API con Express y middleware clave.', 'Backend'),
  (1, 'Patrones para APIs REST', 'Estandares para versionado, paginacion y manejo de errores.', 'Backend'),
  (2, 'Introduccion a MySQL', 'Comandos esenciales para crear, consultar y optimizar tablas.', 'Base de datos'),
  (2, 'Indices en tablas grandes', 'Cuándo crear indices compuestos y cómo medir su impacto.', 'Base de datos'),
  (3, 'UX en proyectos chicos', 'Decisiones practicas para mejorar flujos sin sobrecargar al equipo.', 'Producto'),
  (4, 'Docker para desarrollo', 'Como aislar servicios y acelerar onboarding con contenedores.', 'DevOps'),
  (4, 'Logs que sirven', 'Estrategias para que los logs ayuden a depurar sin ruido.', 'Observabilidad'),
  (5, 'Checklist antes de deploy', 'Pruebas, backups y monitoreo previo a producción.', 'Operaciones');
