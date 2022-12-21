import './NewExpense.css' ;
import './ExpenseForm' ;
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setEditing] = useState(false) ;

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('new expense:', expenseData) ;
        props.onAddExpense(expenseData) ;
        setEditing(false) ;
    };

    const startEditingHandler = () => {
        setEditing(true) ;
    }

    const stopEditingHandler = () => {
        setEditing(false) ;
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
} ;

export default NewExpense ;