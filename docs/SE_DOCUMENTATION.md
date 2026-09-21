# Software Engineering Documentation

## Problem Definition
Many beginners want a simple way to record basic fitness information, BMI history and daily meal completion without using a complex platform. The project proposes a small web application with user and administrator roles.

## Functional Requirements
1. User registration
2. Login/logout
3. BMI calculation
4. Diet guidance
5. Daily meal tracking
6. BMI history
7. Profile update
8. Admin user management
9. Admin record viewing
10. Statistics and aggregation

## Non-Functional Requirements
- Usability: simple navigation and readable forms
- Reliability: backend validation and error handling
- Security: bcrypt password hashing and JWT authentication
- Performance: lightweight REST APIs
- Maintainability: separated React pages and Express routes
- Scalability: MongoDB collections and REST structure

## Testing
Prepare and execute at least these cases manually:
TC01 valid signup -> account created
TC02 empty signup field -> validation error
TC03 duplicate email -> error
TC04 valid login -> dashboard
TC05 wrong password -> error
TC06 valid BMI -> result saved
TC07 invalid BMI input -> validation error
TC08 diet page -> recommendation displayed
TC09 meal completion -> saved
TC10 history -> records shown
TC11 profile update -> data changed
TC12 user opening /admin -> denied
TC13 admin login -> admin dashboard
TC14 admin search -> matching users
TC15 admin delete -> user removed
TC16 aggregation -> category statistics shown

## Virtual Lab
Do not claim external Virtual Lab execution. Open the college-specified Virtual Lab experiment for SE Experiment 9/10, perform it personally, and capture the required screenshots/results.
