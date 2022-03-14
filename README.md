# Static Content Challenge

## About

A node.js app displaying HTML pages at URLs that match the paths of the folders and sub-folders in the `content` folder.

## Built With

- [Node.js](https://nodejs.org/en/)

### Frameworks
 
- [Express](http://expressjs.com/) 
- [Jest](https://jestjs.io/)
- [Handlebars](https://www.npmjs.com/package/hbs) 

## Getting Started

### Prerequisites

To install dependencies use terminal command

```
npm install --save-dev express hbs nodemon jest supertest dotenv markdown-it

```

To start nodemon server use terminal command 

```
npm start
```


To change localhost port add to .env file

```
process.env.PORT=[PORT number]
```

## Tests

To run tests locally use terminal command

```
npm test
```

This project uses supertest and jest for it's integration tests

## Usage

### Locally

After starting server, make request to URL query paths related to markdown files stored in content folder i.e. `/about-page`, `/blog/june/company-update`

URL paths that are linked to content that do not exist will display 'page is not found!'


