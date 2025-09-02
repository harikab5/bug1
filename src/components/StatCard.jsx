import React from "react";

const StatCard = ({ label, value, icon }) => (
  <div className="border border-[#19e6f7]/30 rounded-xl p-6 flex flex-col items-start bg-transparent">
    <span className="text-[#19e6f7] text-sm mb-2">{label}</span>
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-[#19e6f7]">{icon}</span>
    </div>
  </div>
);

export default StatCard;
