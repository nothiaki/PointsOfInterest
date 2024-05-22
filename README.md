<h1 align="center" style="font-weight: bold;">Points of Interest 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • <a href="#started">Getting Started</a> • <a href="#routes">API Endpoints</a>
</p>

<p align="center">
    <b>It's a simple backend challenge.</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- list of all technologies you used
- TypeScript
- PostgreSQL
- NodeJS

<h2 id="started">🚀 Getting started</h2>

I did this project to study more of backend and api rest, the challenge is from this [repository](https://github.com/backend-br/desafios/blob/master/points-of-interest/PROBLEM.md), it's already in portuguese but you can translate to read the challenge.

notes:
I recommend you to read the challenge before start. 
I'll call the point of interest by "poi" or "POI", thanks.

<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project. For example:

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [PostgreSQL](https://www.postgresql.org/)

<h3>Cloning</h3>

Open your favorite terminal app and paste this command.

```bash
git clone https://github.com/nothiaki/PointsOfInterest.git
```

<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env` with your database connection url and the port that you want the project running.

```yaml
DATABASE_URL={PRISMA_POSTGRESQL_CONNECTION}
PORT={PORT}
```

<h3>Starting</h3>

How to start your project

```bash
cd PointsOfInterest/
npm i
npm run dev
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.

| route                              | description
| <kbd>GET /</kbd>        | return list of all POI's in database [details](#get-root)
| <kbd>POST /</kbd>     | create a new POI [details](#post-root)
| <kbd>POST /search</kbd>     | search the POI's in specified range [details](#post-search)

<h3 id="get-root">GET /</h3>

**RESPONSE**
```json
[
  {
    "name": "poi_name",
    "x": 20,
    "y": 10
  }, ...
]
```

<h3 id="post-root">POST /</h3>

**REQUEST**
```json
{
  "name": "new_poi",
  "x": 12,
  "y": 24
}
```

**RESPONSE**
```json
{
  "message": "POI created successfully",
  "poi": {
    "id": 1,
    "name": "new_poi",
    "x": 12,
    "y": 24
  }
}
```
<h3 id="post-search">POST /search</h3>

**REQUEST**
```json
{
  "x": 20,
  "y": 10,
  "max": 10
}
```

**RESPONSE**
```json
[
  {
    "name": "poi_name",
    "x": 20,
    "y": 10
  }, ...
]
```
