# Zen | Backend Application

- Clone the project
- Run `npm install` to install all the dependencies
- Add a file `server/.env` file

**To run the project**
```sh
# Open the terminal
# Go inside wee6-project folder
$ npm start 
```

## Concept and Inspiration 
Zen is a social media service to easly share experiences.
Sometimes we receive suggestions about activities to do or places to visit that we find interesting but we don't immediatly plan to do. On the other hand, when we have free time, we don't always remember this suggestions. Or, if we remember, we may don't recall every detail of it. 
Zen offers a solution to integrate all this information in only one platform. A "Zen" is a piece of information - it can include text, links and images - sent trought the platform. Every sent Zen is editable and resendable and every received Zen is avaiable for consulting in the History Board. 

## Feature: Zen Email
To send a Zen to a friend is not required the friend is registered in the app. However, every Zen is associated to the email of the receiver as well, what means that once a user registers in the app for the first time, he will be able to access every Zen he as received in the past, before his sign up. 

## Technologies Used
- Stack: MongoDB, HTML 5, CSS, Bootstrap, Javascript, Node.js.
- Authentication using Passport
- Email service using Nodemailer
- Image storage using Cloudinary

##Improvements to do, bugs and limitations
The user needs to have the email of his friends to send them Zens.

##Future Work
Develop a solution to connect users like in a social network. This way, the user wouldn't require the email of his friends anymore, he could just send Zens to his app friends. However, we would like to keep the option to send Zens to emails outside the app because that is a good way to reach new users. 
