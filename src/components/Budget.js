import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    return (
<div className='alert alert-secondary d-flex'>
<span>Budget: {currency} </span>
<input type="number" className='h-50 w-50 mx-2' step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;