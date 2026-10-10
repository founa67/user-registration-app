# User Registration App

A Dockerized user registration page built with **HTML, CSS, Node.js (Express), and PostgreSQL 18**.

## Features
- Clean registration form (first name, last name, email)
- Client-side + server-side validation
- Unique email constraint
- Fully containerized with Docker Compose
- Auto-initialized database schema

## Tech Stack
- **Frontend:** HTML5, CSS3, vanilla JS
- **Backend:** Node.js 20, Express
- **Database:** PostgreSQL 18
- **Containerization:** Docker + Docker Compose

## Prerequisites
- Docker Desktop (or Docker Engine + Compose plugin)

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/user-registration-app.git
   cd user-registration-app
   ```

2. **Create your `.env` file**
   ```bash
   cp .env.example .env
   # then edit .env with your own values
   ```

3. **Build and run**
   ```bash
   docker compose up --build
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Useful Commands

| Command | What it does |
|---------|--------------|
| `docker compose up --build` | Build images and start containers |
| `docker compose up -d` | Start in background |
| `docker compose logs -f` | Follow logs |
| `docker compose down` | Stop and remove containers |
| `docker compose down -v` | Stop and remove containers **and DB volume** |
| `docker exec -it regapp-db psql -U reguser -d regdb` | Open psql shell |

## Project Structure

```
user-registration-app/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .env / .env.example
├── src/
│   ├── server.js
│   ├── db.js
│   └── routes/users.js
├── public/
│   ├── index.html
│   ├── css/style.css
│   └── js/form.js
└── db/
    └── init.sql
```

## API Endpoint
`POST /api/register`

**Body:**
```json
{ "firstName": "Jane", "lastName": "Doe", "email": "jane@example.com" }
```

**Responses:**
- `201` — user created
- `400` — missing fields
- `409` — email already registered
- `500` — server error

## License
MIT