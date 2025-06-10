import { useAppContext } from '../context/AppContext';

const BalanceDisplay = () => {
  const { balance } = useAppContext();
  
  // Determine class based on balance
  const balanceClass = balance >= 0 ? 'balance-positive' : 'balance-negative';
  
  return (
    <div className="card">
      <h2 className="card-title">Current Balance</h2>
      <p className={`balance-amount ${balanceClass}`}>
        ₹{balance.toFixed(2)}
      </p>
    </div>
  );
};

export default BalanceDisplay;