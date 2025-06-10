import { AppProvider } from './context/AppContext';
import AppHeader from './components/AppHeader';
import BalanceDisplay from './components/BalanceDisplay';
import SummaryCard from './components/SummaryCard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ChartVisualization from './components/ChartVisualization';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <div className="container">
          <AppHeader />
          
          <main>
            <div className="main-grid">
              {/* Left column - Balance and Form */}
              <div>
                <BalanceDisplay />
                <TransactionForm />
              </div>
              
              {/* Right column - Summary, Transactions, and Charts */}
              <div>
                <SummaryCard />
                <TransactionList />
                <ChartVisualization />
              </div>
            </div>
          </main>
          
          <footer className="footer">
            <p>Budget Tracker App © {new Date().getFullYear()}</p>
          </footer>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
