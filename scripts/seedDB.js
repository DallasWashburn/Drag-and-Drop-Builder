const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dragdrop");


const userSeed = [
    {
        email: "joe@gmail.com",
        projects : [],
        date:Date.now()
      }
    
  ];

db.User.remove({})
.then(() => {
    console.log("Inserting into User");
    return db.User.collection.insertMany(userSeed)
}).then(x => {
    console.log(x.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.log(err);
})

  
