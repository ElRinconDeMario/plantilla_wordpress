# plantillas_wordpress
# Plantilla WordPress con Docker

Este proyecto utiliza **Docker Compose** para crear un entorno de desarrollo con WordPress y MariaDB.

Antes de iniciar los contenedores es necesario configurar las variables de entorno del proyecto.

## Configuración de las variables de entorno

El repositorio contiene el archivo:

```text
.env.example
```

Este archivo sirve como plantilla y contiene las variables necesarias para ejecutar el proyecto:

```dotenv
DB_NAME=wordpress
DB_USER=wordpress
DB_PASSWORD=wordpress
DB_ROOT_PASSWORD=root

WORDPRESS_PORT=8081
```

### 1. Crear el archivo `.env`

Después de clonar el repositorio, crea una copia de `.env.example` llamada `.env`.

En Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

En Linux/macOS:

```bash
cp .env.example .env
```

También puedes realizar la copia manualmente.

La estructura del proyecto debería quedar:

```text
wordpress/
├── .env
├── .env.example
├── .gitignore
├── compose.yaml
└── tema-plaiaundi/
```

### 2. ¿Para qué sirve `.env`?

Docker Compose lee automáticamente las variables definidas en `.env`.

Por ejemplo, en `compose.yaml` podemos utilizar:

```yaml
ports:
  - "${WORDPRESS_PORT}:80"
```

Si en `.env` tenemos:

```dotenv
WORDPRESS_PORT=8081
```

Docker Compose lo interpretará como:

```yaml
ports:
  - "8081:80"
```

De la misma forma, las variables `DB_NAME`, `DB_USER`, `DB_PASSWORD` y `DB_ROOT_PASSWORD` se utilizan para configurar la base de datos MariaDB y la conexión de WordPress con ella.

### 3. El archivo `.env` no se sube al repositorio

El archivo `.env` está incluido en `.gitignore`:

```gitignore
.env
```

Por tanto, cada usuario tendrá su propia configuración local.

El archivo `.env.example`, en cambio, sí se almacena en Git porque sirve como plantilla para saber qué variables necesita el proyecto.

### 4. Iniciar el entorno

Una vez creado y configurado `.env`, inicia los contenedores con:

```bash
docker compose up -d
```

Puedes comprobar su estado con:

```bash
docker compose ps
```

Con la configuración de ejemplo, WordPress estará disponible en:

```text
http://localhost:8081
```

Si el puerto `8081` ya está ocupado en tu equipo, modifica `WORDPRESS_PORT` en `.env`. Por ejemplo:

```dotenv
WORDPRESS_PORT=8082
```

y WordPress estará disponible en `http://localhost:8082`.

## Tema 2: 
## https://docs.google.com/document/d/1g6PWmQaRDkeFuE4ekn0AdjwoonryB9BO_oOgqLsJ2uE/edit?usp=sharing