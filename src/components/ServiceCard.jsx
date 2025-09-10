import React from "react";

const ServiceCard = ({ title, icon }) => (
  <div className="border border-[#19e6f7]/30 rounded-xl p-6 flex items-center gap-4 bg-black text-[#19e6f7]">
    <span className="text-2xl">{icon}</span>
    <span className="font-semibold">{title}</span>
  </div>
);

export default ServiceCard;
