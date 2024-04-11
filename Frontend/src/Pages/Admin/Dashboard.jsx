import React from "react";
import Header from "../../components/Admin/Header";
import DashboardCard from "../../components/Admin/DashboardCard";

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <div className="flex flex-row justify-center pt-8">
        <DashboardCard/>
      </div>
    </>
  );
};

export default Dashboard;
