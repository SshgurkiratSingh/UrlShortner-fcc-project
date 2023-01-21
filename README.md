# URL Shortener

This is a simple URL shortener application built using Node.js, Express, and MongoDB. It can be used to shorten long URLs into shorter, more manageable links.

## Features
- Shorten long URLs into shorter links
- Track the number of clicks on the shortened links
- Built with Node.js, Express, and MongoDB

## Prerequisites
- Node.js and npm installed on your system
- A MongoDB database

## Installation
1. Clone the repository: `git clone https://github.com/SshgurkiratSingh/UrlShortner.git`
2. Install the dependencies: `npm install`
3. Create a new `.env` file in the root directory and add the following environment variables:
   - `MONGO`: the connection string for your MongoDB database
   - `PORT`: the port on which the application will run (default is 3000)
4. Start the application: `npm start`

## Usage
The application has two main routes:
- `POST /api/shorturl`: This route is used to shorten a new URL. It takes a JSON object with a single property `url` and creates a new shortened URL. The response is a JSON object with properties `original_url` and `short_url`.

- `GET /api/shorturl/:link`: This route is used to redirect to the original URL when a shortened link is clicked. It takes the shortened link as a parameter and redirects to the original URL.

## Dependencies
- dotenv: loads environment variables from a .env file
- express: minimal web framework for Node.js
- cors: middleware for handling CORS
- mongoose: MongoDB object modeling for Node.js
- ejs: template engine for Node.js

## Deployment
This application is ready to be deployed to a hosting platform like Heroku, along with a MongoDB provider like Mongo Atlas.

### Note
Please make sure to replace the variable `<username>` in the git url with your username in the git clone command.

This application is built as a boilerplate and you can further customize it according to your needs.

## Contribution
Feel free to fork the repository and submit pull requests with any improvements or bug fixes.
