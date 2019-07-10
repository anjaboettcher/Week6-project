// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Zen = require("../models/Zen");

const bcryptSalt = 10;

mongoose
  .connect(MONGODB_URI, {useNewUrlParser: true})
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
    password: bcrypt.hashSync("mariana", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "Anja",
    email: "anjaverenaboettcher@gmail.com",
    password: bcrypt.hashSync("anja", bcrypt.genSaltSync(bcryptSalt)),
  }
]

let zens = [
  { 
    title: "Picnic in the park",
    description: "I've done a picnic in Mata de Alvalade, we made a berbecue and all. Wear sun screen"
  }, {
    
    title: "City View in viewpoint",
    description: "In Lisbon you have a lot of viewpoints where you can stand some time appreciating the view",
    links: ["https://lisbonlisboaportugal.com/lisbon-sights/lisbon-viewpoints.html"],
    image: "data:image/jpeg;base64,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"
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