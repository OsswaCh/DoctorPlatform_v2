import React from 'react'
import SideBar from "../components/SideBar";
import DocMainCard from "../components/Dashboard/DocMainCard";

function Dashboard() {
  return (
    <div className=" flex flex-cols">
      <SideBar  />
      <div className="w-full m-10">
        <DocMainCard />
      </div>
    </div>
  )
}

export default Dashboard