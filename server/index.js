const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
async function run(){


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9wy3smt.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


    try{
      const categoriesCollection = client.db('Art_Sell').collection('Categories');
   
     
 
    

    app.get('/categories', async(req,res)=>{
        const query = {}
        const cursor = categoriesCollection.find(query);
        const categories = await (await cursor.toArray());
        res.send(categories);
    })

   

}
finally{

}
}
run().catch(e=> console.log(e))



app.get('/', async (req, res) => {
res.send('workshop portal server is running');
})

app.listen(port, () => {console.log(`Art Selling running on ${port}`);
})