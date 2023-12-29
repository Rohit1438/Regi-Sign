
# Regi-Sign
Express.js-powered authentication system leveraging JWT, Bcrypt, and MongoDB for secure user registration, login, and session management

## Project Type
 Fullstack

## Deplolyed App

- Frontend: https://regsign.vercel.app/signup
- Backend: https://mock61st.onrender.com


## Directory Structure
my-app/
├─ backend/
├─ frontend/
│  ├─ ...

## Video Walkthrough of the project
https://drive.google.com/file/d/1GOZqlukHPtnRC3diYGXc8y6VIqOda7d9/view


## Features
Here are some of the key feature of this project:
1.User can sign up using email,phone number and password.
2. Password will be stored after hashing using bcrypt that makes it more secure.
3.User can login with credentials.
4.During login phase user will get proper error message .
5. Successfull login is controlled by JWT tokens.
6.Private routings in frontend makes accessibility of authorized routes more impactful.


## Installation & Getting started
Following command you can use to start the project on your local system.

#frontend
```bash
cd frontend
npm start
```
#backend
```bash
cd backend
npm run server
```

## Usage
open the deployed link and fill the details with proper email, userid, phone and password(password must be minimum of 4 characters).after successfull signin user can user same email and password for login.


## Technology Stack

#Frontend
- React Js
- - Chakra UI

#Backend
- Node.js
- Express.js
- MongoDB
#libraries

- axios
- morgan
- jwt
- bcrypt .
