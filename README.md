# E-Commerce Back-End

## Task
For this task, I was assigned to build the back end for an e-commerce site (like Etsy or Shopify) by modifying given starter code.  This was accomplished by configuring a working Express.js API to use Sequelize to interact with a MySQL database.

MySql2, Sequelize, Express, and DotEnv packages are used in this application. 

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## GitHub Repository
https://github.com/barrygilreath3/e-commerce-backend