const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// assignment-10
// hcDNJ0voMEsNHgjU
// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ivnezkj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const brandCollection = client.db("assignment-10").collection("brands");
    const brandItemsCollection = client
      .db("assignment-10")
      .collection("brandItems");
    const myCartCollection = client.db("assignment-10").collection("mycart");

    // app.get("/brands", async (req, res) => {
    //   const cursor = brandCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });
    // app.get("/brands/:name", async (req, res) => {
    //   const name = req.params.name;
    //   const query = { brandName: name };
    //   const result = await brandItemsCollection.find(query).toArray();
    //   console.log(result);
    //   res.send(result);
    // });

    // app.get("/details/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await brandItemsCollection.findOne(query);
    //   res.send(result);
    // });

    // app.get("/mycart/:email", async (req, res) => {
    //   const email = req.params.email;
    //   const query = { email: email };
    //   const result = await myCartCollection.find(query).toArray();
    //   console.log(result);
    //   res.send(result);
    // });

    // app.get("/mycart", async (req, res) => {
    //   const cursor = myCartCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    // app.post("/mycart", async (req, res) => {
    //   const myCart = req.body;
    //   console.log(myCart);
    //   const result = await myCartCollection.insertOne(myCart);
    //   res.send(result);
    // });

    // app.delete("/mycart/:id", async (req, res) => {
    //   const id = req.params.id;
    //   console.log("delete this is: ", id);
    //   const query = { _id: new ObjectId(id) };
    //   console.log("query", query);
    //   const result = await myCartCollection.deleteOne(query);
    //   console.log(result);
    //   res.send(result);
    // });

    // app.post("/brands", async (req, res) => {
    //   const testData = req.body;
    //   console.log(testData);
    //   const result = await brandCollection.insertOne(testData);
    //   res.send(result);
    // });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Assignment 10 server is running");
});

app.listen(port, () => {
  console.log(`assignment server is running on port: ${port}`);
});
