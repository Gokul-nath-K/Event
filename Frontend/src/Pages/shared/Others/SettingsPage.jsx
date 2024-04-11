import React from "react";
import Header from "../../../components/Admin/Header";
import Settings from "../../../components/Admin/Settings";

const SettingsPage = () => {
  return (
    <>
      <div className="">
          <Header title={"Settings"}/>
        <div class="col-span-8 overflow-hidden rounded-xl sm:px-8">
          <Settings />
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
