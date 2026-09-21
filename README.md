# Cozzyyy FitNess — Fitness Guide Assistant
Cozzyyy FitNess is a web-based Fitness Guide Assistant that helps users calculate BMI, understand their BMI category, view diet recommendations, follow daily meal plans, track completed meals, and maintain fitness history. An admin dashboard is provided for managing users and fitness records.

A beginner-friendly college mini project integrating Advanced Web Technologies (AWT), DBMS and Software Engineering.

## Team Members

- Mahendra Choudhary
- Nachiket Kamble
- Om Rajput
- Om Bulbule

## Stack
- React.js + React Router
- HTML/CSS/JavaScript
- Node.js + Express.js
- MongoDB / MongoDB Atlas
- REST API + JSON
- bcrypt + JWT

## Features

- User Signup and Login
- BMI Calculation and BMI Category
- Diet Recommendations
- Daily Meal Plans
- Meal Completion Tracking
- Fitness History
- User Profile Management
- Admin Dashboard
- User and Fitness Record Management
- MongoDB Database Integration

## Folder Structure
```text
cozzyyy-fitness/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── services/
│       ├── App.js
│       ├── App.css
│       └── index.js
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed.js
│   ├── server.js
│   └── .env.example
├── docs/
│   ├── SE_DOCUMENTATION.md
│   ├── AWT_DBMS_DOCUMENTATION.md
│   └── UML_DIAGRAMS.md
└── package.json
```

## Requirements
Install Node.js LTS and MongoDB Community Server + Compass, or use MongoDB Atlas.

## Setup

### 1. Backend
Open a terminal in `server`:
```bash
npm install
```
Copy `.env.example` to `.env` and set your MongoDB connection string and JWT secret.

Start:
```bash
npm run dev
```

Backend runs on `http://localhost:5000`.

### 2. Frontend
Open another terminal in `client`:
```bash
npm install
npm start
```

Frontend runs on `http://localhost:3000`.

### 3. Seed sample data
With MongoDB running and `.env` configured:
```bash
cd server
npm run seed
```

Sample admin:
- Email: `admin@cozzyyyfitness.com`
- Password: `Admin@123`

Change the sample password before real deployment.

## Important
The BMI and diet sections are for an educational student project and are not intended as medical diagnosis or professional medical advice.

## DBMS Demonstration
Collections:
- users
- bmirecords
- meals
- mealrecords

The project demonstrates create, read, update, delete, references using ObjectId, and an aggregation endpoint.

## Project Screenshots

The project includes screenshots of the following modules:

### Home Page

<img width="835" height="470" alt="image" src="https://github.com/user-attachments/assets/618c22b4-3ab4-4b4e-9bad-d3c6f394fe14" />
<img width="828" height="466" alt="image" src="https://github.com/user-attachments/assets/cd46bd4d-cceb-4b48-9d75-95fdb0b8ff58" />

### Signup and Login

<img width="794" height="401" alt="image" src="https://github.com/user-attachments/assets/1229f6f7-d3f1-4761-a08c-0273b2413c72" />
<img width="777" height="391" alt="image" src="https://github.com/user-attachments/assets/265b18c8-ff16-40b4-a2bd-a875a19c0f19" />

### Fitness Dashboard
<img width="728" height="363" alt="image" src="https://github.com/user-attachments/assets/48a49a7b-e1bd-4158-9753-4e41bcca06aa" />

### BMI Calculator
<img width="739" height="416" alt="image" src="https://github.com/user-attachments/assets/42dc9644-2e50-4a71-9d9b-756032451454" />

### Diet Recommendation
<img width="736" height="414" alt="image" src="https://github.com/user-attachments/assets/ffbf0df3-9f59-4491-8440-6fc0fa4a2628" />

### Daily Meals
<img width="738" height="415" alt="image" src="https://github.com/user-attachments/assets/a06d208d-d9d8-4e2b-8b01-c8a218ec000a" />

### Fitness History
<img width="727" height="383" alt="image" src="https://github.com/user-attachments/assets/95a93195-baa7-4d3f-805c-ec30ef068145" />

### Profile
<img width="678" height="381" alt="image" src="https://github.com/user-attachments/assets/8ed5d857-4e74-4593-896c-40c3fcade7d4" />

### Admin Dashboard
<img width="678" height="381" alt="image" src="https://github.com/user-attachments/assets/efd8d5d1-40b2-48fa-8991-0d30eac83a7f" />
<img width="1050" height="591" alt="image" src="https://github.com/user-attachments/assets/5d3d0b76-438f-417e-af2b-7b3783749b4b" />

## Viva / Project Demo
1. Home
2. Signup/login
3. Dashboard
4. BMI
5. Diet
6. Meals
7. History
8. Profile
9. MongoDB Compass
10. Admin login
11. Admin CRUD
12. Aggregation

## Troubleshooting
- MongoDB error: check that MongoDB is running and `MONGODB_URI` is correct.
- Port 5000 busy: change `PORT` in `.env`.
- React API error: make sure backend is running on port 5000.
- CORS error: check the backend CORS configuration.
- npm error: run `npm cache verify`, then retry `npm install`.
