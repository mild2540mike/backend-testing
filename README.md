C:.
|   .dockerignore
|   .env
|   .env.example
|   .gitignore
|   app.js
|   Dockerfile
|   package-lock.json
|   package.json
|   server.js
|
+---src
|   +---lib
|   |       auth.js
|   |       constants.js
|   |       format-sql.js
|   |       format-utils.js
|   |       http-response.js
|   |       logger.js
|   |
|   +---middlewares
|   |       cors.js
|   |       validator.js
|   |
|   \---routes
|       |   index.js
|       |
|       +---platform
|       |       index.js
|       |
|       +---products
|       |       index.js
|       |       product_utils.js
|       |       validation.js
|       |
|       \---promotion
|               index.js
|
\---tests
        platform.test.js
        products.test.js
        promotion.test.js