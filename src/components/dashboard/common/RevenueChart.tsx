"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface RevenueChartProps {
  title?: string;
  chartData: ChartData<"line">;
}

export default function RevenueChart({
  title = "Revenue Trend",
  chartData,
}: RevenueChartProps) {
  const [period, setPeriod] = useState("Last 6 months");

  // ✅ Full type safety for Chart.js options
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"line">) =>
            `Revenue: ₹${tooltipItem.raw ?? 0}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: string | number) =>
            typeof value === "number" ? `₹${value / 1000}k` : value,
        },
      },
    },
  };

  if (!chartData || !chartData.datasets) {
    return <p className="text-gray-500">No data available</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
        >
          <option>Last 3 months</option>
          <option>Last 6 months</option>
          <option>Last 12 months</option>
        </select>
      </div>

      <div className="mt-6 h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
