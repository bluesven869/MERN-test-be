# Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript

This is a simple API that saves user information of people. 

## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/) or [Compose](https://www.compose.com/compare/mongodb)

After that, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*

## Clone this repository

```

```

Then install the dependencies

```
npm install
```

## Create .env file in project root directory

```
MONGO_DB_URL="mongodb://localhost/user_db"
PORT=5001
```



## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

## Testing 

The default URL is: *http://localhost:5001*

+ GET all Users

```
Send GET request to http://localhost:5001/users/
```

+ Create a new user

```
Send POST request to http://localhost:5001/user/
```
```json
{
  "name": "blablablabla...",
  "email": "blablabla...",
  "birthday": "1980-01-23"
}
```

+ Update user

```
Send PUT request to http://localhost:5001/user/:user_id
```
```json
{
  "name": "blablablabla...",
  "email": "blablabla...",
  "birthday": "1980-01-23"
}
```

+ Delete user

```
Send DELETE request to http://localhost:5001/user/:user_id
```

