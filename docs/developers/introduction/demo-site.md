---
id: demo-site
title: Demonstration Sites
sidebar_position: 3
---

## Introduction

The Talawa API and Admin apps are expected to be installed in a web hosting environment.

We now have two hosted demonstration sites that showcases the features of the applications. They are:

1. **demo.talawa.io** : Used to showcase the `develop` branch
1. **test.talawa.io** : Used to showcase the `develop-postgres` branch

These sites are also used to validate the work of our volunteer software development contributors in these types of environments.

## demo.talawa.io

The site that can be accessed at this URL:

```
https://demo.talawa.io/
```

Login credentials can be found in the [INSTALLATION.md](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/INSTALLATION.md#user-accounts-and-organizations) guide in the `develop` branch.

This is a summary of how the system is configured.

### App Configuration

The apps are configured to operate like this:

1. The API and Admin apps run on the server in Docker containers.
2. The API:
   1. runs as the `talawa-api` user.
   2. was originally configured using the setup script using default values in the `.env` file.
3. The Admin web app:
   1. runs as the `talawa-admin` user.
   2. was originally configured using the setup script using default values in the `.env` file except for these parameters:
      ```
      REACT_APP_TALAWA_URL=https://demo.talawa.io/graphql/
      REACT_APP_BACKEND_WEBSOCKET_URL=ws://demo.talawa.io/graphql/
      ```

### Web Server Configuration

The server is configured to operate like this:

1. There is an SSL certificate for demo.talawa.io
2. The server uses Apache as a frontend reverse proxy. The configuration:
   1. Redirects demo.talawa.io port 80 traffic to port 443
   2. Proxies port 443 to the Talawa-Admin port 4321
   3. Proxies port 8443 to the Talawa-API port 4000
   4. There are no default port 80 or 443 configurations
   5. The configurations can be found in `/etc/apache2/sites-enabled`
   6. Logs can be viewed in the `/var/log/apache2/` directory.
3. Apache Configuration

   ```
   <VirtualHost 208.109.38.72:443 [2603:3:6106:d440::]:443>
      ####################################################################
      # demo.talawa.io (Talawa-Admin HTTPS on port 443)
      ####################################################################

      ServerName  demo.talawa.io

      ####################################################################
      # Proxy (Requires these commands to activate)
      # "a2enmod proxy_wstunnel" "a2enmod proxy_http" "a2enmod proxy"
      ####################################################################

      # Setup the proxy configuration
      ProxyPreserveHost On

      # Web proxy (API endpoint)
      ProxyPass /graphql/ http://localhost:4000/graphql/
      ProxyPassReverse /graphql/ http://localhost:4000/graphql/

      # Web and websocket proxy (Talawa-Admin - Requires "a2enmod proxy_wstunnel")
      ProxyPass / http://localhost:4321/ upgrade=websocket
      ProxyPassReverse / http://localhost:4321/

      ####################################################################
      # SSL (Requires command "a2enmod ssl" to activate)
      ####################################################################

      SSLEngine on

      # This file changes each year
      SSLCertificateFile /path/to/certificate

      # These files don't change year to year
      SSLCertificateChainFile /path/to/certificate_chain
      SSLCertificateKeyFile /path/to/certificate_key

      ####################################################################
      # Logging
      ####################################################################

      LogLevel warn
      ErrorLog /var/log/apache2/demo.talawa.io_error.log
      CustomLog /var/log/apache2/demo.talawa.io_access.log combined

      ####################################################################
      # Locations (Talawa-API)
      ####################################################################

      <Location "/graphql">

         #################################################################
         # CORS Headers (Requires command "a2enmod headers" to activate)
         #################################################################

         # Enable Cross Origin Resource Sharing (CORS)
         # Set Access-Control-Allow-Origin (CORS) Header

         Header set Access-Control-Allow-Origin "*"

      </Location>

   </VirtualHost>

   ```

#### Server Cron Jobs

Daily cron jobs run to do the following:

1. Deploy the latest versions of the API and Admin `develop` code branches.
2. Reset the API database with the latest `develop` sample data.
3. Talawa-API CRON file located at `/etc/cron.d/talawa-api`
   ```
   0 0 * * * talawa-api cd /home/talawa-api/talawa-api && docker compose -f docker-compose.dev.yaml down --rmi all --volumes && git checkout --force develop && git fetch upstream && git reset upstream/develop --hard && npm install && docker compose -f docker-compose.dev.yaml up --build -d --remove-orphans && docker exec talawa-api-dev /bin/bash -c "npm install -g pnpm && pnpm run import:sample-data && exit"
   ```
4. Talawa-Admin CRON file located at `/etc/cron.d/talawa-admin`
   ```
   0 0 * * * talawa-admin cd /home/talawa-admin/talawa-admin && docker compose -f docker/docker-compose.dev.yaml down --rmi all --volumes && git checkout --force develop && git fetch upstream && git reset upstream/develop --hard && rm -rf node_modules && npm install && docker compose -f docker/docker-compose.dev.yaml up --build -d --remove-orphans
   ```

## test.talawa.io

We can run the test.talawa.io site either using devcontainers or the production docker container.

1. The site can be accessed at this URL:

   ```
   https://test.talawa.io/
   ```

2. Login credentials can be found in the [INSTALLATION.md](https://github.com/PalisadoesFoundation/talawa-api/blob/develop-postgres/INSTALLATION.md#user-accounts-and-organizations) guide in the `develop-postgres` branch.

3. In either scenario the Admin web app:
   1. runs as the `talawa-admin` user.
   2. was originally configured using the setup script using default values in the `.env` file except for these parameters:
      ```
      REACT_APP_TALAWA_URL=https://test.talawa.io/graphql
      REACT_APP_BACKEND_WEBSOCKET_URL=ws://test.talawa.io/graphql
      ```

The following sections provide further clarifications.

### Devcontainer Configuration

This section explains how the site is configured to use devcontainers. This is the current mode of operation.

#### App Configuration

The apps are configured to operate like this:

1. The API and Admin apps run on the server in Docker containers.
2. The API:
   1. runs as the `talawa-api` user.
   2. is configured the current [development API installation procedure](https://docs-api.talawa.io/docs/installation#setup-using-the-cli) using the `.env.deploy` file instead of `.env.devcontainer`.

#### Web Server Configuration

The server is configured to operate like this:

1. There is an SSL certificate for test.talawa.io
2. The server uses Apache as a frontend reverse proxy. The configuration:
   1. Redirects test.talawa.io port 80 traffic to port 443
   2. Proxies port 443 to the Talawa-Admin port 4321
   3. Proxies port 8443 to the Talawa-API port 4000
   4. There are no default port 80 or 443 configurations
   5. The configurations can be found in `/etc/apache2/sites-enabled`
   6. Logs can be viewed in the `/var/log/apache2/` directory.
3. Apache Configuration

   ```
      <VirtualHost 132.148.74.68:443 [2603:3:6102:f190::]:443>
         ####################################################################
         # test.talawa.io (Talawa-Admin HTTPS on port 443)
         ####################################################################

         ServerName  test.talawa.io

         ####################################################################
         # Proxy (Requires these commands to activate)
         # "a2enmod proxy_wstunnel" "a2enmod proxy_http" "a2enmod proxy"
         ####################################################################

         # Setup the proxy configuration
         ProxyPreserveHost On

         # Web proxy (API GraphQL endpoint)
         ProxyPass /graphql http://localhost:4000/graphql
         ProxyPassReverse /graphql http://localhost:4000/graphql

         # Web proxy (API GraphiQL endpoint)
         ProxyPass /graphql http://localhost:4000/graphiql
         ProxyPassReverse /graphql http://localhost:4000/graphiql

         # Web and websocket proxy
         ProxyPass / http://localhost:4321/ upgrade=websocket
         ProxyPassReverse / http://localhost:4321/

         ####################################################################
         # SSL (Requires command "a2enmod ssl" to activate)
         ####################################################################

         SSLEngine on

         # This file changes each year
         SSLCertificateFile /path/to/certificate

         # These files don't change year to year
         SSLCertificateChainFile /path/to/certificate_chain
         SSLCertificateKeyFile /path/to/certificate_key

         ####################################################################
         # Logging
         ####################################################################

         LogLevel warn
         ErrorLog /var/log/apache2/test.talawa.io_error.log
         CustomLog /var/log/apache2/test.talawa.io_access.log combined

         <Location "/graphql">

            #################################################################
            # CORS Headers (Requires command "a2enmod headers" to activate)
            #################################################################

            # Enable Cross Origin Resource Sharing (CORS)
            # Set Access-Control-Allow-Origin (CORS) Header

            Header set Access-Control-Allow-Origin "*"

         </Location>

         <Location "/graphiql">

            #################################################################
            # CORS Headers (Requires command "a2enmod headers" to activate)
            #################################################################

            # Enable Cross Origin Resource Sharing (CORS)
            # Set Access-Control-Allow-Origin (CORS) Header

            Header set Access-Control-Allow-Origin "*"

        </Location>

      </VirtualHost>
   ```

#### Server Cron Jobs

Daily cron jobs run to do the following:

1. Deploy the latest versions of the API and Admin `develop-postgres` code branches.
2. Reset the API database with the latest `develop-postgres` sample data.
3. **Talawa-API:** This is how Talawa-API operates on the server.

   1. The application is deployed using Docker devcontainers. The configuration files can be found here:
      1. `compose.devcontainer.yaml`
      2. `envFiles/.env.devcontainer`
   2. The CRON file is located at `/etc/cron.d/talawa-api`

      ```
      MAILTO=talawa-api
      SHELL=/usr/bin/bash
      PATH=/usr/bin:/home/talawa-api/.local/share/pnpm
      REPO=/home/talawa-api/talawa-api

      # Get the repo data and configure the application
      0 0 * * * talawa-api cd $REPO && git fetch upstream && git reset upstream/develop-postgres --hard && rm -rf node_modules && bash -c "curl -fsSL https://get.pnpm.io/install.sh | bash -" && pnpm install && bash -c "cp envFiles/.env.devcontainer .env" && bash -c 'sed -i "s|MAPPED_PORT=80|MAPPED_PORT=8080|g" .env' && bash -c 'sed -i "s|MAPPED_PORT=443|MAPPED_PORT=8443|g" .env'

      # Restart the application and load the sample data after a 20s delay
      1 0 * * * talawa-api cd $REPO && docker compose down --rmi all --volumes && bash -c "devcontainer build --workspace-folder ." && bash -c "devcontainer up --workspace-folder ." && bash -c "docker exec talawa-api-1 /bin/bash -c 'nohup pnpm run start_development_server > /dev/null 2>&1 &'" && sleep 20 && bash -c "docker exec talawa-api-1 /bin/bash -c 'pnpm run add:sample_data && exit'"
      ```

4. **Talawa-Admin:** This is how Talawa-Admin operates on the server.

   1. The application is deployed using Docker. The configuration files can be found here:
      1. `docker/docker-compose.deploy.yaml`
      2. `docker/Dockerfile.deploy`
      3. `envFiles/.env.production`
   2. The CRON file is located at `/etc/cron.d/talawa-admin`

      ```
      MAILTO=root
      SHELL=/usr/bin/bash

      # Get the latest develop-postgres branch
      5 0 * * * talawa-admin cd /home/talawa-admin/talawa-admin && docker compose -f docker/docker-compose.deploy.yaml down --rmi all --volumes && git checkout --force develop-postgres && git fetch upstream && git reset upstream/develop-postgres --hard && rm -rf node_modules && npm install && docker compose -f docker/docker-compose.deploy.yaml --env-file .env up -d
      ```

### Prod Configuration

This section explains how the site runs using the production configuration.

#### App Configuration

The apps are configured to operate like this:

1. The API and Admin apps run on the server in Docker containers.
2. The API:
   1. runs as the `talawa-api` user.
   2. is configured the current [production API installation procedure](https://docs-api.talawa.io/docs/installation#setup---all-steps) using the `.env.deploy` file instead of `.env.devcontainer`.

#### Web Server Configuration

The server is configured to operate like this:

1. There is an SSL certificate for test.talawa.io
2. The server uses Apache as a frontend reverse proxy. The configuration:
   1. Redirects test.talawa.io port 80 traffic to port 443
   2. Proxies port 443 to the Talawa-Admin port 4321
   3. Proxies port 8443 to the Talawa-API port 4000
   4. There are no default port 80 or 443 configurations
   5. The configurations can be found in `/etc/apache2/sites-enabled`
   6. Logs can be viewed in the `/var/log/apache2/` directory.
3. Apache Configuration

   ```
      <VirtualHost 132.148.74.68:443 [2603:3:6102:f190::]:443>
         ####################################################################
         # test.talawa.io (Talawa-Admin HTTPS on port 443)
         ####################################################################

         ServerName  test.talawa.io

         ####################################################################
         # Proxy (Requires these commands to activate)
         # "a2enmod proxy_wstunnel" "a2enmod proxy_http" "a2enmod proxy"
         ####################################################################

         # Setup the proxy configuration
         ProxyPreserveHost On

         # Web proxy (API GraphQL endpoint)
         ProxyPass /graphql http://localhost:4000/graphql
         ProxyPassReverse /graphql http://localhost:4000/graphql

         # Web proxy (API GraphiQL endpoint)
         ProxyPass /graphql http://localhost:4000/graphiql
         ProxyPassReverse /graphql http://localhost:4000/graphiql

         # Web and websocket proxy
         ProxyPass / http://localhost:4321/ upgrade=websocket
         ProxyPassReverse / http://localhost:4321/

         ####################################################################
         # SSL (Requires command "a2enmod ssl" to activate)
         ####################################################################

         SSLEngine on

         # This file changes each year
         SSLCertificateFile /path/to/certificate

         # These files don't change year to year
         SSLCertificateChainFile /path/to/certificate_chain
         SSLCertificateKeyFile /path/to/certificate_key

         ####################################################################
         # Logging
         ####################################################################

         LogLevel warn
         ErrorLog /var/log/apache2/test.talawa.io_error.log
         CustomLog /var/log/apache2/test.talawa.io_access.log combined

      </VirtualHost>
   ```

#### Server Cron Jobs

Daily cron jobs run to do the following:

1. Deploy the latest versions of the API and Admin `develop-postgres` code branches.
2. Reset the API database with the latest `develop-postgres` sample data.
3. **Talawa-API:** This is how Talawa-API operates on the server.

   1. The application is deployed using Docker. The configuration files can be found here:
      1. `docker/docker-compose.dev.yaml`
      1. `docker/Dockerfile.dev`
   1. The CRON file is located at `/etc/cron.d/talawa-api`

      ```
      MAILTO=talawa-api
      SHELL=/usr/bin/bash
      PATH=/usr/bin:/home/talawa-api/.local/share/pnpm
      REPO=/home/talawa-api/talawa-api

      # Get the repo data and configure the application
      #0 0 * * * talawa-api cd $REPO && git fetch upstream && git reset upstream/develop-postgres --hard && rm -rf node_modules && bash -c "curl -fsSL https://get.pnpm.io/install.sh | bash -" && pnpm install && bash -c "cp -f envFiles/.env.deploy .env" && bash -c 'sed -i "s|REPLACE_WITH_RANDOM_PASSWORD|$(openssl rand -hex 32)|g" .env' && bash -c 'sed -i "s|REPLACE_WITH_RANDOM_JWT_SECRET|$(openssl rand -hex 64)|g" .env'

      # Restart the application
      #1 0 * * * talawa-api cd $REPO && cp -f docker/compose.deploy.yaml . && docker compose -f compose.deploy.yaml down --rmi all --volumes && docker compose -f compose.deploy.yaml --env-file .env up -d
      ```

4. **Talawa-Admin:** This is how Talawa-Admin operates on the server.

   1. The application is deployed using Docker. The configuration files can be found here:
      1. `docker/docker-compose.deploy.yaml`
      1. `docker/Dockerfile.deploy`
   1. The CRON file is located at `/etc/cron.d/talawa-admin`

      ```
      MAILTO=root
      SHELL=/usr/bin/bash

      # Get the latest develop-postgres branch
      5 0 * * * talawa-admin cd /home/talawa-admin/talawa-admin && docker compose -f docker/docker-compose.deploy.yaml down --rmi all --volumes && git checkout --force develop-postgres && git fetch upstream && git reset upstream/develop-postgres --hard && rm -rf node_modules && npm install && docker compose -f docker/docker-compose.deploy.yaml --env-file .env up -d
      ```
