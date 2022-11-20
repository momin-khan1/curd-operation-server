/**
 * 1. Create a node server with 5 steps
 * 1.1. create folder
 * 1.2. npm init
 * 1.3. npm install express cors mongodb
 * 1.4. script-dev: nodemon index.js
 * 1.5. create index.js
 * 1.6. use 5 steps to create node server
 * ----------------------------------------
 * Create Atlas Account
 * ----------------------------------------
 * 1. Sign up. google access
 * 2. create cluster
 * 3. create user and password
 * 4. Network Access: ip address: allow al
 * 5. database > connect > code copy
 * ---------------------------------------
 * CRUD Operation
 * ---------------------------------------
 * 1. node mongodb CRUD > Fundamentals
 * 2. create async function run()
 * --------------------------------------
 * Integrate sending data form client to server
 * --------------------------------------
 * 1. clint side create form
 * 2. on submit get form data and create user object
 * 3. on server: Create User Post method to receive data on the backend
 * 4. on client side: set fetch with POST, headers, body
 * 5. Make sure you return a json from the POST API
 * -----------------------------------------------
 * LOAD Data to the client side
 * -----------------------------------------------
 * 1. Create get API
 * 2. Crate a query object
 * 3. collection.find(quary)
 * 4. cursor.toArray()
 * 5. res.send(result)
 * 6. from client side useEffect and display like you have done before
 * -----------------------------------------------------------
 * DELETE
 * ---------------------------------------------------------
 * 1. Create DELETE API
 * 2. id = req.params.id
 * 3. Crate a query= { _id: ObjectId(id) }
 * 4. Create require=> const ObjectId = require('mongodb').ObjectId
 * 5. const result = await userCollection.deleteOne(query)
 * 6. res.send(result)
 */