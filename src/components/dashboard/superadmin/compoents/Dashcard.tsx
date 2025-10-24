"use client";
import React from "react";

interface DashcardProps {
  title: string;
  value: string | number;
  growth: string; // Example: "+12.5%" or "-4.3%"
  note?: string;
}

const Dashcard: React.FC<DashcardProps> = ({
  title,
  value,
  growth,
  note,
}) => {
  // Automatically decide color based on + or -
  const growthColor = growth.trim().startsWith("-") ? "#EA5B5B" : "#0D9D00";

  return (
    <div className="bg-white rounded-[17px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-[18px] font-medium">{title}</div>
      <div className="text-[44px] font-semibold mt-1 text-[var(--colorPrimary)]">
        {value}
      </div>
      <p className="text-[#666666] font-medium mt-1">
        <span
          className="text-xl font-semibold"
          style={{ color: growthColor }}
        >
          {growth}
        </span>{" "}
        {note && ` ${note}`}
      </p>
    </div>
  );
};

export default Dashcard;
