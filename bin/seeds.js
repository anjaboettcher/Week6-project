require('dotenv').config();
// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Zen = require("../models/Zen");

const bcryptSalt = 10;

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "Mariana",
    email: "marianamv112@gmail.com",
    password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(bcryptSalt)),
    status: "Active"
  },
  {
    username: "Anja",
    email: "anjaverenaboettcher@gmail.com",
    password: bcrypt.hashSync("anja", bcrypt.genSaltSync(bcryptSalt)),
    status: "Active"
  }
]

let zens = [
  {  
    title: "Sunset Yoga at hidden Sesimbra beach",
    description: "Location: Ribeira do Cavalo Beach. Time: 19:00 (just before sunset). The Vinyasa Yoga class will be about 30 minutes (including meditation at the end).",
    image: "https://res.cloudinary.com/hanqgr02n/image/upload/v1562868118/zen-images/1-9209_ivr2la.jpg",
    emailTo: "marianamv112@gmail.com"
  }, {
    
    title: "City View in viewpoint",
    description: "In Lisbon you have a lot of viewpoints where you can spend some time appreciating the view",
    links: ["https://lisbonlisboaportugal.com/lisbon-sights/lisbon-viewpoints.html"],
    image: "https://res.cloudinary.com/hanqgr02n/image/upload/v1562868048/zen-images/image_k1ct1l.jpg",
    emailTo: "marianamv112@gmail.com"
  }, {
    title: "Hike a local mountain with a guide",
    description: "Location: Tokyo. Learn the history of Mount Takao with an experient guide. There are no words to describe the beauty here, in any season, even winter. Enjoy nature along with Japanese spiritual and traditional culture.",
    image: "https://res.cloudinary.com/hanqgr02n/image/upload/v1562868690/zen-images/511c390b-c2fd-4958-9aff-7ab51136845b_puhzee.jpg",
    additional_info: "Bring water, walking shoes, and a hand towel. Lunch and travel costs are not included. If it is raining, bring rain gear. We can also visit the hot springs.",
    emailTo: "marianamv112@gmail.com"
  
  }
]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})

Zen.deleteMany()
.then(() => {
  return Zen.create(zens)
})
.then(zensCreated => {
  console.log(`${zensCreated.length} users created with the following id:`);
  console.log(zensCreated.map(z => z._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})