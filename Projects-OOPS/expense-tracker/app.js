const User = require("./models/user");
const Expense = require("./models/Expense");
const ExpenseManager = require("./Services/ExpenseManager");

const user = new User("Lokansh");
const manager = new ExpenseManager(user);

manager.addExpense(new Expense("Food", 200, "Daily"));
manager.addExpense(new Expense("Movie", 350, "Entertainment"));

manager.showAll();
console.log("Total:", user.getTotal());
