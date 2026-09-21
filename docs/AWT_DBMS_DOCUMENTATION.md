# AWT and DBMS Documentation

## AWT Mapping
| Concept | Project use |
|---|---|
| HTML | React JSX forms, inputs, buttons, semantic sections |
| CSS | Grid, Flexbox, responsive media queries, hover effects |
| JavaScript | validation, events, state handling, API interaction |
| React components | Navbar, Layout, pages and reusable tables |
| State/Hooks | useState and useEffect |
| Routing | React Router routes |
| REST API | React communicates with Express using JSON |
| Form validation | Signup, login and BMI forms |

## DBMS Mapping
- MongoDB database: `cozzyyy_fitness`
- Collections: users, bmirecords, meals, mealrecords
- ObjectId references connect users/BMI records and meals/meal records.
- CRUD is implemented through REST endpoints.
- Aggregation groups BMI records by category and calculates count and average BMI.
