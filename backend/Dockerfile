FROM node:14-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application code to container
COPY . .

# Install, postinstall hooks compiles the Typescript
# "set unsafe perm" (--unsafe-perm in npm) needed for postinstall
RUN yarn config set unsafe-perm true && yarn install

ENV K_SERVICE "true"

EXPOSE 3000
# Run the web service on container startup.
CMD [ "yarn", "start-prod"]