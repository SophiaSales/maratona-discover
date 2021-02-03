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
    incomes () {
        //soma as entradas
    },
    expenses () {
        //somar as saidas
    },
    total () {
        //é igual a entradas - saidas 
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

        

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg"alt="Remover Trasaçoes">
        </td>
        `
        return html 
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
    }

}

transactions.forEach(function (transaction){
    DOM.addTransaction(transaction)
})