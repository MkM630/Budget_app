import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const TransactionList = () => {
  const { transactions, deleteTransaction, editTransaction } = useAppContext();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    description: '',
    amount: '',
    category: '',
  });
  
  const categories = {
    food: 'Food',
    rent: 'Rent/Housing',
    utilities: 'Utilities',
    transportation: 'Transportation',
    entertainment: 'Entertainment',
    salary: 'Salary',
    other: 'Other',
  };
  
  const handleEdit = (transaction) => {
    setEditingId(transaction.id);
    setEditForm({
      description: transaction.description,
      amount: Math.abs(transaction.amount),
      category: transaction.category,
      isExpense: transaction.amount < 0,
    });
  };
  
  const handleUpdate = (id) => {
    const updatedTransaction = {
      id,
      description: editForm.description,
      amount: editForm.isExpense
        ? -Math.abs(parseFloat(editForm.amount))
        : Math.abs(parseFloat(editForm.amount)),
      category: editForm.category,
      date: new Date().toISOString(),
    };
    
    editTransaction(updatedTransaction);
    setEditingId(null);
  };
  
  const handleCancel = () => {
    setEditingId(null);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  if (transactions.length === 0) {
    return (
      <div className="card">
        <h2 className="card-title">Transaction History</h2>
        <p className="text-light">No transactions yet. Add one to get started!</p>
      </div>
    );
  }
  
  return (
    <div className="card">
      <h2 className="card-title">Transaction History</h2>
      
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="transaction-item"
          >
            {editingId === transaction.id ? (
              // Edit form
              <div className="edit-form">
                <input
                  type="text"
                  className="form-input"
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                />
                
                <div className="edit-form-row">
                  <input
                    type="number"
                    className="form-input"
                    value={editForm.amount}
                    step="0.01"
                    min="0"
                    onChange={(e) =>
                      setEditForm({ ...editForm, amount: e.target.value })
                    }
                  />
                  
                  <select
                    className="form-select"
                    value={editForm.category}
                    onChange={(e) =>
                      setEditForm({ ...editForm, category: e.target.value })
                    }
                  >
                    {Object.entries(categories).map(([id, label]) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="edit-actions">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={editForm.isExpense}
                      onChange={(e) =>
                        setEditForm({ ...editForm, isExpense: e.target.checked })
                      }
                    />
                    <span>Expense</span>
                  </label>
                  
                  <div>
                    <button
                      onClick={() => handleUpdate(transaction.id)}
                      className="btn btn-sm btn-success"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="btn btn-sm btn-cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Transaction display
              <>
                <div className="transaction-header">
                  <div>
                    <h3 className="transaction-title">{transaction.description}</h3>
                    <div className="transaction-meta">
                      {categories[transaction.category]} • {formatDate(transaction.date)}
                    </div>
                  </div>
                  
                  <span
                    className={`transaction-amount ${transaction.amount >= 0 ? 'amount-positive' : 'amount-negative'}`}
                  >
                    {transaction.amount >= 0 ? '+' : ''}
                    ₹{transaction.amount.toFixed(2)}
                  </span>
                </div>
                
                <div className="transaction-actions">
                  <button
                    onClick={() => handleEdit(transaction)}
                    className="action-btn edit-btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => deleteTransaction(transaction.id)}
                    className="action-btn delete-btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;