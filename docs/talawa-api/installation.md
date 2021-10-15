---
id: installation
title: Installation
---

### How can I run `Talawa API` locally?

Talawa API can be setup to run via `Docker` or node's default package manager `NPM`.


### Running Talawa-API locally with `Docker`


> ### What is `Docker`?
Docker is an open source software platform specifically for building applications. It allows developers to package applications into container application source code with the operating system libraries and dependencies required to run that code in any environment. 
>

Follow these steps to get the api running using docker 

1. Install Docker if you have not installed it.
    
    Here are some important resources:

    - [Docker For Windows](https://docs.docker.com/desktop/windows/install/ "Docker For Windows")
    - [Docker For Mac](https://docs.docker.com/desktop/mac/install/ "Docker For Mac")
    - [Docker For Linux](https://docs.docker.com/engine/install/ "Docker For Linux")


2. Clone the talawa-api repo to your local machine

    ```sh
    git clone https://github.com/PalisadoesFoundation/talawa-api
    cd talawa-api
    ```
3. Create a `.env` file in the root directory of the project. 
    The `.env` file is used to store the secret or environment variables.

    ```sh
    touch .env
    ```

4. Copy the (ACCESS_TOKEN_SECRET= , REFRESH_TOKEN_SECRET= , MONGO_DB_URL= ) fields from the `.env.sample` to your local `.env` and fillup these credentials with your own randomly generated secrets.
    :::note
    A secret key is the piece of information or parameter that is used to encrypt and decrypt messages in a symmetric, or secret-key, encryption.
    The secret key will act as a access token. Access tokens are what applications use to make API requests on behalf of a user
    -  [Secret Key Generator](https://randomkeygen.com "Key Generator")
    -  [Alternate solutions](https://docs.particular.net/nservicebus/security/generating-encryption-keys "Alternate Solution")
    :::
     

5. You will have to set these variables in `.env` to provide the necessary secrets and connection URL.
Please go through the .env.sample documentation  accordingly and configure your `.env`.

   - ACCESS_TOKEN_SECRET
   - REFRESH_TOKEN_SECRET
   - MONGO_DB_URL

    :::note
    You should use the following connection string for MONGO_DB_URL in your `.env` file
    ```
    mongodb://mongo:27017/talawa-api
    ```
    :::

6. Now that the enviornment variables are setup. Run the following commands in the terminal.

    This command will build the docker image.

    ```sh
    sudo docker-compose build
    ```

    This command will run the container, just use the following command to run the server in future.

    ```sh
    sudo docker-compose up
    ```


### Running Talawa-API locally with `NPM`

> ### What is `NPM`? 
`NPM` is a package manager for the JavaScript programming language maintained by NPM, Inc. `NPM` is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called `NPM`, and an online database of public and paid-for private packages, called the NPM registry.
>

Follow these steps to get the api running using NPM


1. Install these dependencies if you don't already have them
    - [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
    - [Nodejs](https://nodejs.org/en/)

    :::note
    If you do not have MongoDB on your own system, you can proceed with the connection string. Please ensure the right access permissions and firewall openings for the VM/server where the MongoDB is hosted.
    - If you are using hosted mongodb, mongodb connection string will look like the following
        ```
        mongodb+srv://<username>:<password>@<server_url>/<db_name>?retryWrites=true&w=majority
        ```
        
    - For local instance of mongodb use the following connection string 
        ```
        mongodb://localhost:27017/<db_name>?retryWrites=true&w=majority
        ```
    :::

2. Clone the talawa-api repo to your local machine
    ```sh
    git clone https://github.com/PalisadoesFoundation/talawa-api
    cd talawa-api
    npm install
    ```
3. Create a `.env` file in the root directory of the project. 
   The `.env` file is used to store the secret or environment variables.

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
The testing package used is `JEST`. `JEST` is an open-source testing framework built on JavaScript.

- [Testing with Jest](https://www.geeksforgeeks.org/testing-with-jest "Alternate Solution")

    ```
    npm run test
    ```


### NPM vs Docker

Docker downloads a lot of large images, if you are short on storage or with slow internet connection prefer using Npm installation.
