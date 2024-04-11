import React, { useState } from "react";
import ConfigTable from "../../components/Admin/ConfigTable";
import ConfigMaintenance from "../../components/Admin/ConfigMaintenance";
import MaintenaceModel from "../../components/Admin/MaintenaceModel";
import Header from "../../components/Admin/Header";

const ConfigPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
        <Header title="Config"/>
      <div className="flex flex-col justify-center h-[70vh]">
        <ConfigTable />
        <ConfigMaintenance open={open} setOpen={setOpen} />
        <MaintenaceModel open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default ConfigPage;
