# Surfcamp Website

A website for marketing surf camp. It includes landing pages, articles, newsletter subscription form and signing up to the camp.

## How to run the app for local development

### With VSCode Docker Container

1. Add the necessary environment variable files inside the .devcontainer directory named same as in the docker-compose file
   - .cms.env
   - .frontend.env
2. Ctrl + Shift + P or Command + Shift P
3. Select: Dev Container Open Folder In Container
4. Browse on the localhost ports as indicated in the docker-compose file
   - strapi: http://localhost:1337
   - nextjs: http://localhost:3030

### With Docker Compose

1. Change directory into .devcontainer directory
2. Run the command below:
   ```bash
   docker compose up -d
   ```
3. Browse on the localhost ports as indicated in the docker-compose file
   - strapi: http://localhost:1337
   - nextjs: http://localhost:3030

## Todos

- Newsletter Functionality
- Individual blog/article pages
- Stay in touch page
- Sign up page
