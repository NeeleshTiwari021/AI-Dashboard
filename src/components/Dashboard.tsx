import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAIData } from '../redux/aiDataSlice';
import { RootState, AppDispatch } from '../redux/store';
import BarChartComponent from './charts/BarChartComponent';
import LineChartComponent from './charts/LineChartComponent';
import PieChartComponent from './charts/PieChartComponent';
import '../styles/Dashboard.scss';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.aiData);

  useEffect(() => {
    dispatch(fetchAIData());
  }, [dispatch]);

  if (loading) return <div className="loading-spinner">Loading...</div>;

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">AI Dashboard</h1>
      {data && (
        <div className="dashboard__charts">
          <div className="dashboard__card">
            <h3>Category Distribution</h3>
            <BarChartComponent
              data={Object.entries(data.category_distribution).map(([name, value]) => ({
                name,
                value: Number(value),
              }))}
            />
          </div>
          <div className="dashboard__card">
            <h3>Response Times (Day Wise)</h3>
            <LineChartComponent data={data.response_times.day_wise} />
          </div>
          <div className="dashboard__card">
            <h3>User Satisfaction</h3>
            <PieChartComponent
              data={data.user_satisfaction.ratings.map((item: { rating: any; count: any; }) => ({
                name: `Rating ${item.rating}`,
                value: item.count,
              }))}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
