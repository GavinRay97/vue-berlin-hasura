gcloud sql instances create "db_instance" \
  --database-version=POSTGRES_11 \
  --zone="project_zone" \
  --tier=db-g1-small \
  --storage-type=SSD