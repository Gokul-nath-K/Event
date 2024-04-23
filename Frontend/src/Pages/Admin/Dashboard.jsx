import React from "react";
import Header from "../../components/Admin/Header";
import DashboardCard from "../../components/Admin/DashboardCard";
import Inbox from "../../components/Admin/Inbox";

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <div className="flex flex-row justify-evenly pb-2">
        <div className="flex flex-row justify-center pt-8">
          <DashboardCard title={"No of user"} count={23}/>
        </div>
        <div className="flex flex-row justify-center pt-8">
          <DashboardCard title={"No of events"} count={"300+"}/>
        </div>
        <div className="flex flex-row justify-center pt-8">
          <DashboardCard title={"Revenue"} count={"3.4Cr"}/>
        </div>
      </div>
      <Header title="Inbox" />
      <div className="flex flex-row justify-around pt-8 pb-8" >
        <Inbox />
      </div>
      <Header title="Stats" />
      <div className="flex flex-row justify-around pt-8 pb-10" >
        <img className="" src="https://ik.imagekit.io/gokulnathk/PartyEvent/PieChart.png?updatedAt=1710829868578"/>
      </div>

    </>
  );
};

export default Dashboard;
