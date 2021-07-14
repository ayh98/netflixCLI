const MongoClient = require ('mongodb').MongoClient;
require("dotenv").config()

const connection = async () => {
    try{
        const client = new MongoClient(process.env.MONGO_URI)
        await client.connect()
        const db = client.db()
        console.log(db)
    } 
    catch (error) {
    console.log(error)
    }
};

// const add = (db) => {
//     const entry = process.argv[3]
//     const actor = process.argv[4]
//     db.collection ('Movies', (err, collection) => {
//         collection.insert({movie: entry, actor:actor})
//     })
// }

connection()