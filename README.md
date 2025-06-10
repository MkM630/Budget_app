# Budget App

This is a simple budget tracking application built with React and Vite. It allows users to add transactions, view their balance, and visualize their income and expenses.

## Features

*   **Add Transactions:** Easily add income and expense transactions with descriptions and amounts.
*   **View Balance:** See your current balance at a glance.
*   **Income/Expense Summary:** Get a quick summary of your total income and expenses.
*   **Chart Visualization:** Visualize your financial data with interactive charts.
*   **Responsive Design:** The application is designed to be responsive and work well on different screen sizes.
*   **Rupee Currency:** All financial values are displayed in Indian Rupees (₹).

## Screenshots :
#Light Mode ---
<img width="956" alt="image" src="https://github.com/user-attachments/assets/d12fb767-d8cb-48a1-b17b-ec4d3082dab9" />


## Technologies Used

*   React
*   Vite
*   CSS
*   Chart.js (for visualizations)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed.

*   [Node.js](https://nodejs.org/)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd budget_app
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5175/` (or another port if 5175 is in use).

## Project Structure

```
.gitignore
README.md
eslint.config.js
index.html
package-lock.json
package.json
public/
├── vite.svg
src/
├── App.css
├── App.jsx
├── assets/
│   └── react.svg
├── components/
│   ├── AppHeader.jsx
│   ├── BalanceDisplay.jsx
│   ├── ChartVisualization.jsx
│   ├── SummaryCard.jsx
│   ├── TransactionForm.jsx
│   └── TransactionList.jsx
├── context/
│   └── AppContext.jsx
├── index.css
└── main.jsx
tailwind.config.js
vite.config.js
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
