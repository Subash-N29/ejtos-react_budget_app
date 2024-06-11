import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const remaining = budget - totalExpenses;

    const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

    const handleAlert = () => {
        if (remaining < 0) {
          alert("You have exceeded your budget!");
        }
      };
    
    return (
        <div className={`alert ${alertType}`}  onClick={handleAlert}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
