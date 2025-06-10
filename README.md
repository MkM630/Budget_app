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
### Light Mode ---
<img width="956" alt="image" src="https://github.com/user-attachments/assets/d12fb767-d8cb-48a1-b17b-ec4d3082dab9" />
<img width="947" alt="image" src="https://github.com/user-attachments/assets/2c847f74-52bc-4180-9b6a-d9a74e5eba80" />
<img width="955" alt="image" src="https://github.com/user-attachments/assets/45cd5ade-f426-4b69-b244-20e3deff319f" />

### Dark Mode ---
<img width="950" alt="image" src="https://github.com/user-attachments/assets/a359983c-1b9d-4069-a83e-468801ca1db7" />
<img width="952" alt="image" src="https://github.com/user-attachments/assets/4ae006e4-b3d1-4af6-a1dd-58e82704d699" />
<img width="941" alt="image" src="https://github.com/user-attachments/assets/f9a79c18-0ac1-4c58-9941-19c8c6f281e4" />

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
