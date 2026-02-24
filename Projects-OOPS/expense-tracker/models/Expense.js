class Expense {
    constructor(title, amount, category) {
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.date = new Date();
    }

    getDetails() {
        return `${this.title} - ₹${this.amount}`;
    }
}

module.exports = Expense;
