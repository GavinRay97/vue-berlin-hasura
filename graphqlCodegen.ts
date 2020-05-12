import { generate } from '@graphql-codegen/cli'

const baseSchemaConfig = {
  'http://localhost:8080/v1/graphql': {
    headers: {
      'X-Hasura-Admin-Secret': 'my-secret',
    },
  },
}

async function main() {
  console.log('Generating Backend Codegen...')
  await generate(
    {
      schema: baseSchemaConfig,
      documents: './backend/**/*.graphql',
      generates: {
        [process.cwd() + '/backend/src/graphqlRequestSdk.ts']: {
          plugins: [
            'typescript',
            'typescript-operations',
            'typescript-graphql-request',
          ],
        },
      },
    },
    true
  )

  console.log('Generating Frontend Codegen...')
  await generate(
    {
      schema: baseSchemaConfig,
      documents: './frontend/**/*.graphql',
      generates: {
        [process.cwd() + '/frontend/src/apolloGraphQLSdk.ts']: {
          plugins: [
            'typescript',
            'typescript-operations',
            'typescript-vue-apollo',
          ],
        },
      },
    },
    true
  )
}

main()
