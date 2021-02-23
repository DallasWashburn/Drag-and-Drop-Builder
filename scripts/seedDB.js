const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dragdrop");


const userSeed = [
    {
        userId:"auth|657574778",
        userEmail: "dw@admin.com",
        companyName: "DW Industries",
        url: "dw.com",
        projects: []
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

  
