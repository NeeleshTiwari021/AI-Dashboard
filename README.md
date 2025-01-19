# AI Dashboard Project

## Overview
The **AI Dashboard** project is a modern, data-driven application designed to provide analytical insights into AI-related metrics. Built using React and Redux, this project integrates interactive charts and responsive UI elements, ensuring a seamless and user-friendly experience.

## Features

### 1. Dashboard
- Displays key AI data metrics.
- Includes two types of visualizations:
  - **Bar Chart**: Shows category distribution.
  - **Line Chart**: Visualizes day-wise response times.
- Real-time loading indicators for a smooth user experience.

### 2. Bar Chart Component
- Visualizes categorical data using a bar chart.
- Fully responsive and interactive with tooltips and legends.
- Styled with modern gradients and smooth hover effects.

### 3. Line Chart Component
- Provides a clear representation of time-series data.
- Includes gridlines, tooltips, and smooth animations for better readability.

### 4. Redux Integration
- Manages application state efficiently.
- Handles asynchronous data fetching using Redux Toolkit.

### 5. Modern UI Design
- Clean, trendy, and responsive layouts.
- Styled using SCSS with a focus on consistency and reusability.
- Hover effects and animations for enhanced user experience.

## Technologies Used

### Frontend
- **React**: Component-based architecture for building the UI.
- **Redux Toolkit**: State management and asynchronous data handling.
- **Recharts**: Data visualization library for charts.
- **SCSS**: Modern styling with variables, mixins, and nested rules.

### Tooling
- **ESLint**: For maintaining code quality.
- **Prettier**: For consistent code formatting.
- **React Icons**: To enhance the visual appeal of the UI.

## Project Structure
```plaintext
src/
├── components/
│   ├── Dashboard.tsx          # Main dashboard component
│   ├── charts/
│   │   ├── BarChartComponent.tsx  # Bar chart visualization
│   │   └── LineChartComponent.tsx # Line chart visualization
├── redux/
│   ├── aiDataSlice.ts         # Redux slice for AI data
│   ├── store.ts               # Redux store configuration
├── styles/
│   ├── Dashboard.scss         # Styles for the dashboard
│   ├── BarChartComponent.scss # Styles for the bar chart
│   ├── LineChartComponent.scss# Styles for the line chart
├── App.tsx                    # Root component
└── index.tsx                  # Entry point
```

## How to Run

### Prerequisites
- **Node.js** (>=14.0.0)
- **npm** or **yarn**

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Integration
- The application fetches AI-related data using a Redux thunk.
- Example API response for category distribution:
  ```json
  {
    "category_distribution": {
      "Category A": 120,
      "Category B": 150,
      "Category C": 90
    },
    "response_times": {
      "day_wise": [
        { "date": "2025-01-01", "average_time": 200 },
        { "date": "2025-01-02", "average_time": 180 }
      ]
    }
  }
  ```


## Future Improvements
1. **Dark Mode**: Add theme-switching capability for better user experience.
2. **Export Data**: Allow users to download charts as images or CSV files.
3. **Custom Filters**: Enable filtering data based on user preferences.
4. **Authentication**: Secure the dashboard with user authentication.



## Contact
For any queries or feedback, please contact:
- **Email**: neeleshishu021@gmail.com

