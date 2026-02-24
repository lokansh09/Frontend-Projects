class User {
    constructor(name) {
        this.name = name;
        this.expenses = [];
    }

    addExpense(expense) {
        this.expenses.push(expense);
    }

    getTotal() {
        return this.expenses.reduce((sum, e) => sum + e.amount, 0);
    }
}

module.exports = User;
