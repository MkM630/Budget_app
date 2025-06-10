import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const TransactionForm = () => {
  const { addTransaction } = useAppContext();
  
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('other');
  const [isExpense, setIsExpense] = useState(false);
  
  const categories = [
    { id: 'food', label: 'Food' },
    { id: 'rent', label: 'Rent/Housing' },
    { id: 'utilities', label: 'Utilities' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'salary', label: 'Salary' },
    { id: 'other', label: 'Other' },
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description || !amount) {
      alert('Please fill in all fields');
      return;
    }
    
    const newTransaction = {
      id: crypto.randomUUID(),
      description,
      amount: isExpense ? -Math.abs(parseFloat(amount)) : Math.abs(parseFloat(amount)),
      category,
      date: new Date().toISOString(),
    };
    
    addTransaction(newTransaction);
    
    // Reset form
    setDescription('');
    setAmount('');
    setCategory('other');
    setIsExpense(false);
  };
  
  return (
    <div className="card">
      <h2 className="card-title">Add Transaction</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="form-input"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="form-input"
            placeholder="Enter amount"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label className="checkbox-container">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={isExpense}
              onChange={(e) => setIsExpense(e.target.checked)}
            />
            <span>This is an expense</span>
          </label>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;