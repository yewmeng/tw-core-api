# tw-core-api

Node.js API using TypeScript, Clean Architecture, SonarQube-ready unit tests, Dockerized.

## Scripts
- `npm run build` — Compile TypeScript
- `npm run dev` — Run in dev mode
- `npm test` — Run unit tests
- `npm run lint` — Lint code

## Docker
```
docker build -t tw-core-api .
docker run -p 3000:3000 tw-core-api
```

## SonarQube
- Configure `sonar-project.properties` with your SonarCloud details.
- Run tests to generate coverage before scanning.

## Clean Architecture
- `src/core` — Business logic
- `src/application` — Use cases
- `src/infrastructure` — External services
- `src/interfaces` — API/controllers

## Test
- All tests in `tests/` folder, use `.test.ts` extension.
