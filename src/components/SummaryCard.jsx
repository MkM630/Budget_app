import { useAppContext } from '../context/AppContext';

const SummaryCard = () => {
  const { income, expenses } = useAppContext();
  
  return (
    <div className="summary-grid">
      <div className="card">
        <h3 className="summary-card-title">Total Income</h3>
        <p className="summary-amount income-amount">₹{income.toFixed(2)}</p>
      </div>
      
      <div className="card">
        <h3 className="summary-card-title">Total Expenses</h3>
        <p className="summary-amount expense-amount">₹{Math.abs(expenses).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SummaryCard;