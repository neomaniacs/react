import './NewExpense.css' ;
import './ExpenseForm' ;
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('new expense (1):', expenseData) ;
        props.onAddExpense(expenseData) ;
    };

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
} ;

export default NewExpense ;