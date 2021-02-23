const mongoose = require("mongoose");
const db = require("../models");
var nameOfPage1= {id:"pageName1", data:"Home Page"}
var nameOfPage2= {id:"pageName2", data:"+"}
var nameOfPage3= {id:"pageName3", data:"+"}
var nameOfPage4= {id:"pageName4", data:"+"}
var nameOfPage5= {id:"pageName5", data:"+"}
var nameOfPage6= {id:"pageName6", data:"+"}
var nameOfPage7= {id:"pageName7", data:"+"}
var allPages = [nameOfPage1, [], nameOfPage2, [], nameOfPage3, [], nameOfPage4, [], nameOfPage5, [], nameOfPage6, [], nameOfPage7, []]

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dragdrop");


const userSeed = [

    {
        userId:"auth|657574778",
        userEmail: "dw@admin.com",
        companyName: "DW Industries",
        url: "dw.com",
        projects: allPages
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

  
