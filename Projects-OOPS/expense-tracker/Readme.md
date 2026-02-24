🧠 Project Overview

This project is an Object-Oriented Expense Tracker built using JavaScript (Node.js).
It demonstrates how real-world applications are structured using OOP principles such as encapsulation, modular design, and separation of concerns.

The system allows users to:
- create and manage expenses
- categorize spending
- calculate totals
- organize logic using service classes


🧱 OOP Concepts Implemented
✅ 1. Classes & Objects
Used ES6 classes to represent real-world entities:
- User
- Expense
- Category
- ExpenseManager

Each class models a specific responsibility in the system.


✅ 2. Encapsulation
Data is managed inside classes and accessed through methods.
Example:
- expenses stored inside User class
- operations performed through functions like addExpense()

This prevents direct data manipulation.


✅ 3. Composition

Instead of inheritance, objects are composed together:
User contains multiple Expense objects
This mirrors real industry system design.


✅ 4. Separation of Concerns
Project divided into logical layers:

- models → data structures
- services → business logic
- app.js → execution entry point

Improves scalability and maintainability.


✅ 5. Modular Architecture

Files are separated into folders and imported using modules.
This structure is similar to real backend applications.


✅ 6. Service Layer Pattern

Business logic handled by ExpenseManager instead of model classes.
This reflects real-world application architecture.


🛠️ Technical Skills Demonstrated

- ES6 Classes
- Node.js Module System
- Object Interaction
- Functional Decomposition
- Data Modeling
- Console-based Application Design
- Code Organization


📈 Key Development Learning Outcomes

- Designing systems using roles instead of random functions
- Understanding object relationships
- Structuring scalable applications
- Writing reusable and maintainable code
- Separating logic from data


the Output:
 >> node -v
- v22.17.1
>> cd expense-tracker                         //(Project Folder name)
>>  node app.js
>> 
- Food - ₹200
- Movie - ₹350
- Total: 550