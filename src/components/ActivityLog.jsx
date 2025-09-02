import React from "react";
import { Line } from "react-chartjs-2";

const sparkData = {
  labels: [...Array(8)].map((_, i) => `${i}h`),
  datasets: [
    {
      label: "Events",
      data: [3, 5, 2, 6, 4, 7, 5, 8],
      borderColor: "#19e6f7",
      backgroundColor: "rgba(25, 230, 247, 0.15)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const sparkOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

const logs = [
  { text: 'New user "David" signed up', time: '12:34 PM' },
  { text: 'Monthly report generated', time: '11:05 AM' },
  { text: 'Gen-AI service updated to v2.3', time: '09:21 AM' },
  { text: 'Ticket #T101 resolved', time: '08:57 AM' },
  { text: 'Model deployment finished', time: '08:12 AM' },
  { text: 'Order #A103 placed by "Eva"', time: '07:45 AM' },
];

const ActivityLog = ({ theme }) => (
  <section className={`rounded-2xl p-6 border border-[#19e6f7]/20 flex flex-col h-80 ${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'}`}>
    <div className="flex flex-row items-start justify-between mb-4 h-16">
      <h3 className="text-lg font-bold text-[#19e6f7]">Activity Log</h3>
      <div className="w-32 h-16">
        <Line data={sparkData} options={sparkOptions} />
      </div>
    </div>
    <div className="flex-1 overflow-y-auto relative space-y-4">
      {logs.map((l, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-sm text-white">{l.text}</p>
            <p className="text-xs text-gray-400">{l.time}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ActivityLog;
