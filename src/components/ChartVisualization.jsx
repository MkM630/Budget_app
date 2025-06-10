import { useAppContext } from '../context/AppContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const ChartVisualization = () => {
  const { transactions, income, expenses } = useAppContext();
  
  // Prepare data for pie chart (spending by category)
  const prepareSpendingByCategory = () => {
    // Only include expenses (negative amounts)
    const expenseTransactions = transactions.filter(t => t.amount < 0);
    
    // Group by category and sum amounts
    const categoryTotals = {};
    expenseTransactions.forEach(transaction => {
      const category = transaction.category;
      const amount = Math.abs(transaction.amount);
      
      if (categoryTotals[category]) {
        categoryTotals[category] += amount;
      } else {
        categoryTotals[category] = amount;
      }
    });
    
    // Prepare labels and data for chart
    const labels = Object.keys(categoryTotals).map(key => {
      // Convert category keys to readable labels
      const categoryMap = {
        food: 'Food',
        rent: 'Rent/Housing',
        utilities: 'Utilities',
        transportation: 'Transportation',
        entertainment: 'Entertainment',
        salary: 'Salary',
        other: 'Other',
      };
      return categoryMap[key] || key;
    });
    
    const data = Object.values(categoryTotals);
    
    return { labels, data };
  };
  
  const { labels: pieLabels, data: pieData } = prepareSpendingByCategory();
  
  // Pie chart data
  const pieChartData = {
    labels: pieLabels,
    datasets: [
      {
        data: pieData,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#C9CBCF',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  // Bar chart data (income vs expenses)
  const barChartData = {
    labels: ['Income vs Expenses'],
    datasets: [
      {
        label: 'Income',
        data: [income],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: [Math.abs(expenses)],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const barOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  // If there are no transactions, show a message
  if (transactions.length === 0) {
    return (
      <div className="card">
        <h2 className="card-title">Charts</h2>
        <p className="text-light">Add transactions to see charts</p>
      </div>
    );
  }
  
  return (
    <div className="card">
      <h2 className="card-title">Charts</h2>
      
      <div className="chart-grid">
        <div>
          <h3 className="chart-title">Income vs Expenses</h3>
          <div className="chart-container">
            <Bar data={barChartData} options={barOptions} />
          </div>
        </div>
        
        <div>
          <h3 className="chart-title">Spending by Category</h3>
          <div className="chart-container">
            {pieData.length > 0 ? (
              <Pie data={pieChartData} />
            ) : (
              <p className="text-light">No expense data to display</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartVisualization;