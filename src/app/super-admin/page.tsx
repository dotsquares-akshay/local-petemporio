import React from "react";

import Dashcard from "@/components/dashboard/superadmin/compoents/Dashcard";
import RevenueChart from "@/components/dashboard/common/RevenueChart";
function Page() {
  const overviewData = [
    {
      title: "Total Doctors",
      value: 245,
      growth: "+12.5%",
      note: "from last month",
    },
    {
      title: "Total Patients",
      value: 1240,
      growth: "+8.3%",
      note: "from last month",
    },
    {
      title: "New Appointments",
      value: 320,
      growth: "-2.1%",
      note: "from last week",
    },
    {
      title: "Revenue",
      value: "₹12,400",
      growth: "+15.2%",
      note: "from last month",
    },
    {
      title: "Active Clinics",
      value: 48,
      growth: "-1.3%",
      note: "from last quarter",
    },
    {
      title: "Total Doctors",
      value: 245,
      growth: "+12.5%",
      note: "from last month",
    },
    {
      title: "Total Patients",
      value: 1240,
      growth: "+8.3%",
      note: "from last month",
    },
    {
      title: "New Appointments",
      value: 320,
      growth: "-2.1%",
      note: "from last week",
    },
    {
      title: "Revenue",
      value: "₹12,400",
      growth: "+15.2%",
      note: "from last month",
    },
    {
      title: "Active Clinics",
      value: 48,
      growth: "-1.3%",
      note: "from last quarter",
    },
  ];
 const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        
        label: "Revenue",
        data: [8500, 10000, 9000, 10500, 13000, 10000],
        borderColor: "#c026d3", // purple-pink color
        backgroundColor: "rgba(192, 38, 211, 0.2)",

        tension: 0, // smooth curve
      },
    ],
  };
  return (
    <div>
      <h3 className="font-semibold text-lg">Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-3 mb-5">
        {overviewData.map((item, index) => (
          <Dashcard key={index} {...item} />
        ))}
      </div>
      <RevenueChart chartData={chartData} />
    </div>
  );
}

export default Page;
