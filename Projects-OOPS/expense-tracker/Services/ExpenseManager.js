class ExpenseManager {
    constructor(user) {
        this.user = user;
    }

    addExpense(expense) {
        this.user.addExpense(expense);
    }

    showAll() {
        this.user.expenses.forEach(e =>
            console.log(e.getDetails())
        );
    }
}

module.exports = ExpenseManager;
