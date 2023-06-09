import { addExpenses , expenses} from "./modules/expensesModule.js"
import { displayList} from "./modules/uiModule.js"



let expensesForm = document.getElementById("expenses-form");
let expensesList = document.getElementById("expenses-list");

fetch('./components/expenses-form.html').then((response)=> response.text())
     .then((html)=>{
        expensesForm.innerHTML = html     })

fetch('./container/expenses-list.html').then((response)=> response.text())
     .then((html)=>{
        expensesList.innerHTML = html
     })

     let form = document.getElementById("expenses-form")
     form.addEventListener("submit", (event) => {
         try {
             event.preventDefault();
     
             let expenseNameInput = document.getElementById("expenseName")
             let expensePriceInput = document.getElementById("expensePrice")
     
     
             let expenseName = expenseNameInput.value
             let expensePrice = expensePriceInput.value
     
             if (expenseName && expensePrice) {
                 addExpenses(expenseName, expensePrice)
                 console.log("expenses", expenses)
     
                 displayList()
             }
     
         } catch (error) {
             alert(`App Error: ${error.message}`)
         }
     })