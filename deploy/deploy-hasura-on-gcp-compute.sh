gcloud compute instances create-with-container "hasura" \
  --container-image="hasura/graphql-engine:v1.2.1" \
  --machine-type=e2-micro \
  --container-env-file="./hasura.env" \
  --container-env HASURA_GRAPHQL_ADMIN_SECRET="hasura_admin_secret",HASURA_GRAPHQL_DATABASE_URL="postgres://hasurauser:$hasura_db_pw@{sql_ip}:5432/postgres" \
  --zone="project_zone" \
  --container-restart-policy=always \
  --tags="http-server" \
  --address="hasura_fixed_ext_ip"
