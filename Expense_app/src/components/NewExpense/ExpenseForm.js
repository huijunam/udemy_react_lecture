import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] =useState('');
    const [enteredAmount, setEnteredAmount] =useState('');
    const [enteredDate, setEnteredDate] =useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangehandler = (e) =>{
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: e.target.value};
        // })
    };

    const amountChangehandler = (e) =>{
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })
    }

    const dateChangehandler =(e) =>{
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        const expenseData= {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text'
                        value= {enteredTitle}
                        onChange={(titleChangehandler)}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01' 
                        value= {enteredAmount}
                        onChange={amountChangehandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        value= {enteredDate}
                        onChange={dateChangehandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm;