// Chart options helper
const commonOptions = (title) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: "#19e6f7" } },
    title: { display: true, text: title, color: "#19e6f7", font: { size: 14 } },
  },
  scales: {
    x: { ticks: { color: "#19e6f7" }, grid: { color: "#374151" } },
    y: { ticks: { color: "#19e6f7" }, grid: { color: "#374151" } },
  },
});

// Chart data
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      borderColor: "#19e6f7",
      backgroundColor: "rgba(25, 230, 247, 0.2)",
      tension: 0.3,
    },
  ],
};

// barLabels and barData must use language from context, so move them inside AdminDashboard

const doughnutData = {
  labels: ["Direct", "Organic", "Referral", "Social"],
  datasets: [
    {
      data: [35, 30, 20, 15],
      backgroundColor: ["#19e6f7", "#27bdb5", "#374151", "#6b7280"],
      borderWidth: 0,
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "bottom", labels: { color: "#19e6f7" } },
    title: {
      display: true,
      text: "Traffic Sources",
      color: "#19e6f7",
      font: { size: 14 },
    },
  },
};

const miniDoughnut = {
  labels: ["Direct", "Organic", "Referral"],
  datasets: [
    {
      data: [45, 35, 20],
      backgroundColor: ["#19e6f7", "#27bdb5", "#374151"],
      borderWidth: 0,
    },
  ],
};

const miniBar = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sign-ups",
      data: [12, 19, 8, 15, 22, 18, 25],
      backgroundColor: "#19e6f7",
      borderRadius: 4,
    },
  ],
};

const miniOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: { x: { display: false }, y: { display: false } },
};
/* src/pages/AdminDashboard.jsx */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiBarChart2,
  FiShoppingBag,
  FiActivity,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import {
  BsLightning,
  BsRobot,
  BsGraphUp,
  BsPersonCheck,
  BsPalette,
  BsBriefcase,
} from "react-icons/bs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import StatCard from "../components/StatCard";
import ServiceCard from "../components/ServiceCard";
import ActivityLog from "../components/ActivityLog";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/* ------------- Dummy data ------------- */
const quickStats = {
  totalUsers: 12483,
  revenue: 987423,
  activeServices: 6,
  tickets: 12,
};

const recentOrders = [
  {
    id: "#A100",
    user: "Alice",
    service: "Content Generation",
    date: "17 Jul 2025",
    status: "completed",
  },
  {
    id: "#A101",
    user: "Bob",
    service: "Data Analysis",
    date: "16 Jul 2025",
    status: "in-progress",
  },
  {
    id: "#A102",
    user: "Carol",
    service: "Automation",
    date: "16 Jul 2025",
    status: "pending",
  },
];

const serviceCards = [
  { id: 1, title: "Automation & Efficiency", icon: <BsLightning size={28} /> },
  { id: 2, title: "Data Analysis & Insights", icon: <BsGraphUp size={28} /> },
  {
    id: 3,
    title: "Content Generation (Gen-AI)",
    icon: <BsPalette size={28} />,
  },
  { id: 4, title: "Enhanced HCI", icon: <BsRobot size={28} /> },
  {
    id: 5,
    title: "Personalized Experiences",
    icon: <BsPersonCheck size={28} />,
  },
  { id: 6, title: "Industry Specific Apps", icon: <BsBriefcase size={28} /> },
];

/* ------------- main ------------- */
const AdminDashboard = () => {
  // Move barLabels and barData here so they are defined before usage
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  // barLabels and barData must be defined after language
  const barLabels = [
    {
      en: "Data",
      ar: "بيانات",
      he: "נתונים"
    },
    {
      en: "Content",
      ar: "محتوى",
      he: "תוכן"
    },
    {
      en: "Enhanced",
      ar: "محسن",
      he: "משופר"
    },
    {
      en: "Personalized",
      ar: "مخصص",
      he: "מותאם אישית"
    },
    {
      en: "Industry",
      ar: "صناعة",
      he: "תעשייה"
    }
  ];

  const barData = {
    labels: barLabels.map(label => label[language.code]),
    datasets: [
      {
        label: {
          en: "Requests",
          ar: "الطلبات",
          he: "בקשות"
        }[language.code],
        data: [432, 321, 287, 198, 176],
        backgroundColor: "#19e6f7",
      },
    ],
  };

  // Translations for dashboard
  const translations = {
    en: {
      dashboard: "Admin Dashboard",
    Personalized: "مخصص",
    Direct: "مباشر",
    Organic: "عضوي",
    Referral: "إحالة",
    Social: "اجتماعي",
    Automation: "الأتمتة",
    Data: "البيانات",
    Content: "المحتوى",
    Enhanced: "محسن",
    Industry: "الصناعة",
    Requests: "الطلبات",
      totalUsers: "Total Users",
      revenue: "Revenue (USD)",
      activeServices: "Active Services",
    // ...existing code...
      tickets: "Support Tickets",
      services: "Services",
      recentOrders: "Recent Orders",
      orderId: "Order ID",
      user: "User",
      service: "Service",
      date: "Date",
      status: "Status",
      analytics: "Analytics",
      activityLog: "Activity Log",
      trafficSources: "Traffic Sources",
      weeklySignups: "Weekly Sign-ups",
      "Content Generation": "Content Generation",
      "Data Analysis": "Data Analysis",
      Automation: "Automation",
      Alice: "Alice",
      Bob: "Bob",
      Carol: "Carol"
    },
    ar: {
      dashboard: "لوحة الإدارة",
      totalUsers: "إجمالي المستخدمين",
      revenue: "الإيرادات (دولار)",
      activeServices: "الخدمات النشطة",
      tickets: "تذاكر الدعم",
      services: "الخدمات",
      recentOrders: "الطلبات الأخيرة",
      orderId: "معرف الطلب",
      user: "المستخدم",
      service: "الخدمة",
      date: "التاريخ",
      status: "الحالة",
      analytics: "تحليلات",
      activityLog: "سجل النشاط",
      trafficSources: "مصادر الحركة",
      weeklySignups: "التسجيلات الأسبوعية",
    Alice: "أليس",
    Bob: "بوب",
    Carol: "كارول",
    completed: "مكتمل",
    "in-progress": "جاري التنفيذ",
    pending: "قيد الانتظار",
    "17 Jul 2025": "١٧ يوليو ٢٠٢٥",
    "16 Jul 2025": "١٦ يوليو ٢٠٢٥",
  // Service card translations
  "Content Generation (Gen-AI)": "إنشاء المحتوى (الذكاء الاصطناعي)",
  "Content Generation": "إنشاء المحتوى",
  "Data Analysis & Insights": "تحليل البيانات والرؤى",
  "Data Analysis": "تحليل البيانات",
  "Automation & Efficiency": "الأتمتة والكفاءة",
  Automation: "الأتمتة",
  "Industry Specific Apps": "تطبيقات خاصة بالصناعة",
  "Personalized Experiences": "تجارب مخصصة",
  "Enhanced HCI": "تحسين التفاعل البشري الحاسوبي"
    },
    he: {
      dashboard: "לוח מנהל",
      totalUsers: "משתמשים סה'כ",
      revenue: "הכנסה (דולר)",
      activeServices: "שירותים פעילים",
      tickets: "קריאות תמיכה",
      services: "שירותים",
      recentOrders: "הזמנות אחרונות",
      orderId: "מספר הזמנה",
      user: "משתמש",
      service: "שירות",
      date: "תאריך",
      status: "סטטוס",
      analytics: "אנליטיקות",
      activityLog: "יומן פעילות",
      trafficSources: "מקורות תנועה",
      weeklySignups: "הרשמות שבועיות",
    Alice: "אליס",
    Bob: "בוב",
    Carol: "קרול",
    completed: "הושלם",
    "in-progress": "בתהליך",
    pending: "ממתין",
    "17 Jul 2025": "17 יולי 2025",
    "16 Jul 2025": "16 יולי 2025",
  // Service card translations
  "Content Generation (Gen-AI)": "יצירת תוכן (בינה מלאכותית)",
  "Content Generation": "יצירת תוכן",
  "Data Analysis & Insights": "ניתוח נתונים ותובנות",
  "Data Analysis": "ניתוח נתונים",
  "Automation & Efficiency": "אוטומציה ויעילות",
  Automation: "אוטומציה",
  "Industry Specific Apps": "אפליקציות ייעודיות לתעשייה",
  "Personalized Experiences": "חוויות מותאמות אישית",
  "Enhanced HCI": "שיפור ממשק אדם-מחשב"
    }
  };
  const t = translations[language.code];

  return (
    <div
      className={`min-h-screen ${theme === 'dark' ? 'bg-[#181a19] text-white' : 'bg-white text-black'}`}
      dir={language.dir}
      lang={language.code}
    >
      <main className="p-6 md:p-8 space-y-10 pt-24">
        <header className="flex items-center justify-between">
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.dashboard}</h1>
        </header>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard label={t.totalUsers} value={quickStats.totalUsers} icon={<FiUsers />} />
          <StatCard label={t.revenue} value={quickStats.revenue} icon={<FiBarChart2 />} />
          <StatCard label={t.activeServices} value={quickStats.activeServices} icon={<FiActivity />} />
          <StatCard label={t.tickets} value={quickStats.tickets} icon={<FiShoppingBag />} />
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">{t.services}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <ServiceCard key={card.id} title={t[card.title] || card.title} icon={card.icon} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">{t.recentOrders}</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#19e6f7]">
                <th>{t.orderId}</th>
                <th>{t.user}</th>
                <th>{t.service}</th>
                <th>{t.date}</th>
                <th>{t.status}</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{t[order.user] || order.user}</td>
                  <td>{t[order.service] || order.service}</td>
                  <td>{t[order.date] || order.date}</td>
                  <td>{t[order.status] || order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#181a19]/60 rounded-xl p-6 h-80">
            <h3 className="text-lg font-bold text-[#19e6f7] mb-2">{t.analytics}</h3>
            <Bar data={{
              ...barData,
              labels: barData.labels.map(label => t[label] || label),
              datasets: barData.datasets.map(ds => ({
                ...ds,
                label: t[ds.label] || ds.label
              }))
            }} options={{
              ...commonOptions(t.analytics),
              plugins: {
                ...commonOptions(t.analytics).plugins,
                title: {
                  ...commonOptions(t.analytics).plugins.title,
                  text: t.analytics
                },
                legend: {
                  ...commonOptions(t.analytics).plugins.legend,
                  labels: {
                    ...commonOptions(t.analytics).plugins.legend.labels,
                    generateLabels: chart => {
                      const data = chart.data;
                      return data.datasets.map((ds, i) => ({
                        text: t[ds.label] || ds.label,
                        fillStyle: ds.backgroundColor,
                        strokeStyle: ds.backgroundColor,
                        lineWidth: 1,
                        hidden: false,
                        index: i
                      }));
                    }
                  }
                }
              },
              scales: {
                x: {
                  ...commonOptions(t.analytics).scales.x,
                  ticks: {
                    ...commonOptions(t.analytics).scales.x.ticks,
                    callback: function(value, index) {
                      const label = barData.labels[index];
                      // Always use English for x-axis if language is English
                      if (language.code === 'en') return label;
                      return t[label] || label;
                    }
                  }
                },
                y: commonOptions(t.analytics).scales.y
              }
            }} />
          </div>
          <div className="bg-[#181a19]/60 rounded-xl p-6 h-80">
            <h3 className="text-lg font-bold text-[#19e6f7] mb-2">{t.trafficSources}</h3>
            <Doughnut data={{
              ...doughnutData,
              labels: doughnutData.labels.map(label => t[label] || label)
            }} options={{
              ...doughnutOptions,
              plugins: {
                ...doughnutOptions.plugins,
                title: {
                  ...doughnutOptions.plugins.title,
                  text: t.trafficSources
                },
                legend: {
                  ...doughnutOptions.plugins.legend,
                  labels: {
                    ...doughnutOptions.plugins.legend.labels,
                    generateLabels: chart => {
                      const data = chart.data;
                      return data.labels.map((label, i) => ({
                        text: language.code === 'en' ? label : t[label] || label,
                        fillStyle: data.datasets[0].backgroundColor[i],
                        strokeStyle: data.datasets[0].backgroundColor[i],
                        lineWidth: 1,
                        hidden: false,
                        index: i
                      }));
                    }
                  }
                }
              }
            }} />
          </div>
        </section>
        {/* ACTIVITY LOG */}
        <section>
          <ActivityLog theme={theme} title={t.activityLog} />
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
