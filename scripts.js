const Modal = { 
    open(){   
        document   //add add a class active ao modal
            .querySelector('.modal-overlay')  //procura global no documento html modal...
            .classList
            .add('active')   //add a classe active 

    },
    close() {
        document   //remove class active do modal
             .querySelector('.modal-overlay')  //procura global no documento html modal..
            .classList
            .remove('active')   //remove a classe active 

    }
}    
const transactions = [ 
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 200000,
        date: '23/01/2021',
    },

]


const Transaction = {
    all: transactions,

    add(transaction){
        Transaction.all.push(transaction)
        console.log(Transaction.all)
    },
    incomes () {
        let income = 0;
        Transaction.all.forEach(transaction =>{
            if(transaction.amount > 0){
                income +=transaction.amount;
            }
        })
        //soma as entradas
        return income;
    },
    expenses () {
        let expense = 0;
        Transaction.all.forEach(transaction =>{
            if(transaction.amount < 0){
                expense +=transaction.amount;
            }
        })
        //somar as saidas
        return expense;
    },
    total () {
        //é igual a entradas - saidas 
        return Transaction.incomes() + Transaction.expenses();
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction (transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction (transaction) {
        const CSSclass = transaction.amount > 0 ? "income":
        "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg"alt="Remover Trasaçoes">
        </td>
        `
        return html 
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes())
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency (Transaction.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency (Transaction.total())
    }
}


const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })
        return signal + value
    }

}

transactions.forEach(function (transaction){
    DOM.addTransaction(transaction)
})

DOM.updateBalance()