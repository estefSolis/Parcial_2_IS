README.md — Parcial 2: Implantación de Sistemas
Estudiante: Estefany Michelle Peñate Solis
Expediente: 25871
Código Estudiantil: PS22-I04-001
Repositorio: https://github.com/estefSolis/Parcial_2_IS
Ejercicio 1 — Servicio Base con Dockerfile
Archivos creados:
•	server.js
•	package.json
•	.dockerignore
•	Dockerfile
Comandos ejecutados:
git init
git add
git commit –m
git push -u origin main
docker build -t parcial-api . 
docker run -d -p 3000:3000 parcial-api 
curl http://localhost:3000/ 
curl http://localhost:3000/health 
Ejercicio 2 — Persistencia con PostgreSQL y Volumen
Comandos ejecutados:
docker volume create db_data 
docker run -d \ 
--name parcial-db \ 
-e POSTGRES_USER=admin \ 
-e POSTGRES_PASSWORD=12345 \ 
-e POSTGRES_DB=parcial_db \ 
-v db_data:/var/lib/postgresql/data \ 
-p 5432:5432 \ postgres:15 
docker exec -it parcial-db psql -U admin -d parcial_db 
SQL ejecutado:
parcial_db=# CREATE TABLE estudiantes (
  id SERIAL PRIMARY KEY,
  nombre TEXT,
  expediente TEXT,
  codigo TEXT
);
INSERT INTO estudiantes (nombre, expediente, codigo) VALUES
('Estefany Michelle Peñate Solis', '25871', 'PS22-I04-001'),
('Alumno de Prueba', '25881', 'AP23-I04-003');
docker restart parcial-db docker exec -it parcial-db psql -U admin -d parcial_db 
Ejercicio 3 — Integración con Docker Compose
Archivos creados:
•	docker-compose.yml
•	.env
•	Carpeta docs/evidencias/
Comando ejecutado:
docker compose --env-file .env up -d --build 
docker compose down -v
docker rm -f parcial-db parcial-api
Estructura del Proyecto
parcial-docker-integrado/ 
 .dockerignore 
.env 
Dockerfile 
README.md 
docker-compose.yml 
package.json 
server.js 
docs/ 
 	evidencias/ 

