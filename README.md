## Vue Berlin Meetup "Knockoff Meetup" Realtime Hasura App

A project using:

- Hasura
- Vue 3 + Typescript
- Vue Apollo 4 (Composition API)
- `graphql-code-generator`
  - `graphql-request` for backend
  - `@vue-apollo/composition-api` for frontend
- A Fastify.js Node Typescript API for custom business logic/functions (JWT Auth implementation)

Development workflow:

- `docker-compose up -d` starts Hasura, Postgres, Node.js API, and runs Hasura's migrations on the DB automatically + configures relationships/permissions metadata.
- `yarn dev` from the `frontend directory` starts Parcel serving the frontend app
