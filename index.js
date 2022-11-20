const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId


const app = express()
const port = 5000;

//use Middleware
app.use(cors());
app.use(express.json());


//MongoDb Database
const uri = "mongodb+srv://dbuser1:<<6MeQjELcGeWnEafF>>@cluster0.tfjhyno.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");

        //GET API: Show Data Client side
        app.get('/user', async (req, res) => {
            const query = '';
            const cursor = userCollection.find(query);
            const user = await cursor.toArray();
            res.send(user);
        })

        //UPDATE API
        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await userCollection.findOne(query)
            res.send(result)
        })

        //POST API: Add a new user
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log("User added sucessfully", newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        });

        //DELTE API: delete the user on client side
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await userCollection.deleteOne(query)
            res.send(result)
        })

        //PUT API update user
        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true }
            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            }
            const result = await userCollection.updateOne(filter, updatedDoc, options)
            res.send(result)
        })

    }
    finally {
        // await client.close()
    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send("Hello express")
})

app.listen(port, (req, res) => {
    console.log("Listening the port", port)
})