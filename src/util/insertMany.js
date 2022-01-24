const  ObjectId  = require('bson').ObjectID
const MongoClient = require('mongodb').MongoClient;

// Atlas URI 
uri =
"mongodb://localhost:27017/books"

async function run() {
    const client = await MongoClient.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // wait here

    const db = client.db('books');
    const coll = db.collection('books');

    // {
    //     title: String,
    //     author: [String],
    //     cover: String,
    //     tags: [String],
    //   },

    try {
        const docs = [
           {title: 'Book 1', author: ['Author 1', 'Author 2']
           },
           {title: 'Book 2', author: ['Author 2']
           },
           {title: 'Book 3', author: ['Author 3', 'Author 33'], cover: 'cover 3', tags: ['adventure', 'mystery', 'horror']
           },
           
         ]
        const inserted = await coll.insertMany(docs);
        console.log(inserted)

    } catch {
        console.log(e)
        if (client) client.close();
    }
                       

}

run().catch(console.dir)