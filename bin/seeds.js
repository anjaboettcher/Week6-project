// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/project-w6', {useNewUrlParser: true})
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
    images: ["https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjB0buxwqXjAhXp8OAKHausB5YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.timeout.pt%2Flisboa%2Fpt%2Fcoisas-para-fazer%2Fos-melhores-miradouros-em-lisboa&psig=AOvVaw1g6tE-RIQiggLHWjJrKO0E&ust=1562682040426035"]
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