# Cozzyyy FitNess — Fitness Guide Assistant

A beginner-friendly college mini project integrating AWT, DBMS and Software Engineering.

## Stack
- React.js + React Router
- HTML/CSS/JavaScript
- Node.js + Express.js
- MongoDB / MongoDB Atlas
- REST API + JSON
- bcrypt + JWT

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
The BMI and diet sections are for an educational student project and are not medical diagnosis or professional medical advice.

## DBMS Demonstration
Collections:
- users
- bmirecords
- meals
- mealrecords

The project demonstrates create, read, update, delete, references using ObjectId, and an aggregation endpoint.

## Viva Demo
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
