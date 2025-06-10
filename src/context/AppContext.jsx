import { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  transactions: localStorage.getItem('transactions')
    ? JSON.parse(localStorage.getItem('transactions'))
    : [],
  balance: 0,
  income: 0,
  expenses: 0,
};

// Create context
const AppContext = createContext(initialState);

// Action types
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION';
export const UPDATE_TOTALS = 'UPDATE_TOTALS';
export const CLEAR_TRANSACTIONS = 'CLEAR_TRANSACTIONS';

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case EDIT_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction.id === action.payload.id ? action.payload : transaction
        ),
      };
    case UPDATE_TOTALS:
      return {
        ...state,
        balance: action.payload.balance,
        income: action.payload.income,
        expenses: action.payload.expenses,
      };
    case CLEAR_TRANSACTIONS:
      return {
        ...state,
        transactions: [],
      };
    default:
      return state;
  };
};

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Clear transactions on page load/refresh
  useEffect(() => {
    // Clear transactions when the component mounts (page loads/refreshes)
    clearTransactions();
  }, []);

  // Calculate balance, income, and expenses whenever transactions change
  useEffect(() => {
    const transactions = state.transactions;
    
    // Save to localStorage
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    // Calculate totals
    const income = transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    
    const expenses = transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    
    const balance = income + expenses;
    
    // Update state using dispatch instead of direct mutation
    dispatch({
      type: UPDATE_TOTALS,
      payload: { balance, income, expenses },
    });
  }, [state.transactions]);

  // Action creators
  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };

  const editTransaction = (transaction) => {
    dispatch({
      type: EDIT_TRANSACTION,
      payload: transaction,
    });
  };

  const clearTransactions = () => {
    // Clear localStorage
    localStorage.removeItem('transactions');
    
    // Clear transactions in state
    dispatch({
      type: CLEAR_TRANSACTIONS,
    });
  };

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        balance: state.balance,
        income: state.income,
        expenses: state.expenses,
        addTransaction,
        deleteTransaction,
        editTransaction,
        clearTransactions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);