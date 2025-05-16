# Hono + Drizzle Boilerplate

A modern boilerplate for building web applications using the [Hono](https://hono.dev/) web framework and [Drizzle ORM](https://orm.drizzle.team/). This template provides a solid foundation for quickly starting new projects with best practices and a clean structure.

## Features
- ⚡️ Fast and lightweight Hono web server
- 🗄️ Type-safe database access with Drizzle ORM
- 🧩 Modular project structure
- 🛠️ Ready-to-use development scripts
- 📦 Easy environment configuration
- 🧪 Testing setup (if applicable)

## Tech Stack
- [Hono](https://hono.dev/) – Web framework
- [Drizzle ORM](https://orm.drizzle.team/) – Type-safe ORM
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [Bun](https://bun.sh/) – Runtime & package manager

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (v1.0+ recommended)
- (Optional) A supported database (e.g., SQLite, PostgreSQL, MySQL)

### Installation
```bash
git clone https://github.com/your-username/hono-drizzle-boilerplate.git
cd hono-drizzle-boilerplate
bun install
```

### Environment Setup
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   cp .dev.vars.example .dev.vars # if available
   ```
2. Update `.env` and `.dev.vars` with your credentials and settings.

### Running the App
```bash
bun run dev
```

The server will start on the port specified in your `.env` or `.dev.vars` file (default: 3000).

### Database Commands
- Generate Drizzle migrations:
  ```bash
  bun run db:generate
  ```
- Run migrations:
  ```bash
  bun run db:migrate
  ```
- Push schema changes:
  ```bash
  bun run db:push
  ```

### Build for Production
```bash
bun run deploy
```

> **Note:** All scripts and development tasks use Bun. For more information, see the [Bun documentation](https://bun.sh/docs/cli/run).

## Environment Files

- `.env.example`: Template for environment variables.
- `.dev.vars`: Used for local development environment variables. Copy or edit this file to set up your local dev environment. It is typically loaded automatically by your dev scripts or environment loader. Do not commit sensitive credentials to version control.

## Project Structure
```
├── .dev.vars
├── .gitignore
├── README.md
├── bun-import-meta.d.ts
├── bun.lock
├── bunfig.toml
├── drizzle.config.ts
├── env-config.ts
├── env-loader.ts
├── migrations/
├── node_modules/
├── package.json
├── src/
│   ├── db/
│   │   ├── db.ts
│   │   └── schema.ts
│   ├── index.ts
│   ├── routes/
│   │   ├── root/
│   │   │   └── index.ts
│   │   ├── user/
│   │   │   ├── index.ts
│   │   │   └── user.ts
│   │   ├── services/
│   │   │   └── user.ts
│   ├── tsconfig.json
│   ├── wrangler.jsonc
│   └── .wrangler/
```
