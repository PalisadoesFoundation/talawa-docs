---
id: installation
title: Installation
---

### How can I run `Talawa Api` locally?

Talawa API can be setup to run via `Docker` or node's default package manager `Npm`.


> ### `Docker`
>
>Follow these steps to get the api running using docker 

1. Install Docker if you have not installed it.

2. Clone the talawa-api repo to your local machine

    ```sh
    git clone https://github.com/PalisadoesFoundation/talawa-api
    cd talawa-api
    ```
3. Create `.env` file in the root directory of the project. 
    `.env` file is used to store the secret or environment variables.

    ```sh
    touch .env
    ```

4. Copy (ACCESS_TOKEN_SECRET= , REFRESH_TOKEN_SECRET= , MONGO_DB_URL= ) from the `.env.sample` to your local `.env` and fillup these credentials with your own randomly generated secrets.

5. You will have to set these variables in `.env` to provide the necessary secrets and connection url.
Please go through the .env.sample documentation  accordingly and configure your `.env`.

   - ACCESS_TOKEN_SECRET
   - REFRESH_TOKEN_SECRET
   - MONGO_DB_URL

6. Now that the enviornment variables are setup. Run the following commands in the terminal.

    This command will build the docker image.

    ```sh
    sudo docker-compose build
    ```

    This command will run the container, just use the following command to run the server in future.

    ```sh
    sudo docker-compose up
    ```


> ### `Npm`
>
>Follow these steps to get the api running using npm


1. Install these dependencies if you don't already have them
    - [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
    - [Nodejs](https://nodejs.org/en/)

    :::note
    If you do not have MongoDB on your own system, you can proceed with the connection string. Please ensure the right access permissions and firewall openings for the VM/server where the MongoDB is hosted.
    :::

2. Clone the talawa-api repo to your local machine
    ```sh
    git clone https://github.com/PalisadoesFoundation/talawa-api
    cd talawa-api
    npm install
    ```
3. Create `.env` file in the root directory of the project
   `.env` file is used to store the secret or environment variables.

    ```sh
    touch .env
    ```
4. Copy (ACCESS_TOKEN_SECRET= , REFRESH_TOKEN_SECRET= , MONGO_DB_URL= ) from the `.env.sample` to your local `.env` and fillup these credentials with your own randomly generated secrets. 

5. Fill out the following fields:

    - ACCESS_TOKEN_SECRET
    - REFRESH_TOKEN_SECRET
    - MONGO_DB_URL

    Please go through the .env.sample documentation  accordingly and configure your `.env`.

6. Install required node packages

    ```sh
    npm install
    ```

7. Now that we have all the packages, execute the following command to run the server.

    :::note
    You only have to execute the following command to run the server in future.
    :::

    ```sh
    npm run start
    ```

### Testing

    npm run test

### Npm vs Docker

Docker downloads a lot of large images, if you are short on storage or with slow internet connection prefer using Npm installation.
