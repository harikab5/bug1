/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "./assets/logo.jpg";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRole } from "./context/RoleContext";
import { useLanguage } from "./context/LanguageContext";
import { useState } from "react";
const servicesDropdown = [
  {
    name: {
      en: "Content & Code Generation",
      ar: "إنشاء المحتوى والبرمجة",
      he: "יצירת תוכן וקוד"
    },
    path: "/services/content-generation"
  },
  {
    name: {
      en: "Automation & Workflow Tools",
      ar: "أدوات الأتمتة وسير العمل",
      he: "כלי אוטומציה וזרימות עבודה"
    },
    path: "/services/automation-tools"
  },
  {
    name: {
      en: "NLP & Language Intelligence",
      ar: "تحليل اللغة والذكاء اللغوي",
      he: "עיבוד שפה וידע לשוני"
    },
    path: "/services/nlp-intelligence"
  },
  {
    name: {
      en: "Computer Vision Solutions",
      ar: "حلول الرؤية الحاسوبية",
      he: "פתרונות ראייה ממוחשבת"
    },
    path: "/services/computer-vision"
  },
  {
    name: {
      en: "AI Chatbots & Assistants",
      ar: "الدردشة الذكية والمساعدون",
      he: "צ'אטבוטים ועוזרי AI"
    },
    path: "/services/ai-chatbots"
  },
  {
    name: {
      en: "Data Analysis & Forecasting",
      ar: "تحليل البيانات والتنبؤ",
      he: "ניתוח נתונים וחיזוי"
    },
    path: "/services/data-analysis"
  }
];

export default function Header({ theme, toggleTheme }) {
  const { language, setLanguage, languages } = useLanguage();
  const location = window.location.pathname;
  const strings = {
    en: {
      home: "Home",
      home1: "Home 1",
      home2: "Home 2",
      about: "About Us",
      services: "Services",
      viewAllServices: "View All Services",
      blog: "Blog",
      contact: "Contact Us",
      logout: "Logout",
      dropdown: "Services"
    },
    ar: {
      home: "الرئيسية",
      home1: "الصفحة الرئيسية 1",
      home2: "الصفحة الرئيسية 2",
      about: "معلومات عنا",
      services: "الخدمات",
      viewAllServices: "عرض جميع الخدمات",
      blog: "مدونة",
      contact: "اتصل بنا",
      logout: "تسجيل خروج",
      dropdown: "الخدمات"
    },
    he: {
      home: "בית",
      home1: "בית 1",
      home2: "בית 2",
      about: "אודות",
      services: "שירותים",
      viewAllServices: "הצג את כל השירותים",
      blog: "בלוג",
      contact: "צור קשר",
      logout: "התנתק",
      dropdown: "שירותים"
    }
  };
  const t = strings[language.code] || strings.en;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isAdmin, setIsAdmin } = useRole();

  const navigate = useNavigate();
  const [serviceDropdown, setServicesDropdown] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState(null);
 
    // Avatar dropdown state
    const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);

    // Close avatar dropdown on outside click
    React.useEffect(() => {
      if (!avatarDropdownOpen) return;
      const handleClickOutside = (event) => {
        const dropdown = document.getElementById('avatar-dropdown-menu');
        const avatarBtn = document.getElementById('avatar-btn');
        if (dropdown && !dropdown.contains(event.target) && avatarBtn && !avatarBtn.contains(event.target)) {
          setAvatarDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [avatarDropdownOpen]);




  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Get user email and initials
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const email = user.email || "";
  let initials = "";
  if (user.firstName && user.lastName) {
    initials = ((user.firstName[0] || "") + (user.lastName[0] || "")).toUpperCase();
  } else if (email) {
    initials = email.slice(0, 2).toUpperCase();
  }
  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setServicesDropdown(true);
  };
  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdown(false);
    }, 300); // 300ms delay before closing
    setServicesTimeout(timeout);
  };

 
 
  

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  // Admin dashboard navigation
  const handleAdminDashboard = () => {
    navigate("/admin-dashboard");
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`${theme === "dark"
          ? "bg-[#181a19] text-white"
          : "bg-gray-100 text-black"
        } w-full flex items-center justify-between px-6 md:px-12 py-4 md:py-6 shadow-2xl sticky top-0 z-50 transition-all duration-300`}
      dir={language.dir}
    >
      {/* Logo */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => handleNavigation("/home1")}
          className="transition-transform duration-300 cursor-pointer hover:scale-105"
        >
          <img
            src={logo}
            loading="lazy"
            alt="Logo"
            className="h-14 md:h-[60px] w-auto object-contain drop-shadow-[0_0_10px_#19e6f7]"
          />
        </button>
      </div>

      {/* Nav and Avatar aligned right */}
      <div className="flex items-center gap-4 ml-auto">
        <nav
          className={`hidden md:flex items-center gap-8 ${theme === "dark" ? "text-white" : "text-black"
            }`}
          dir={language.dir}
        >
          {/* Home Dropdown */}
          <div className="relative">
            <span
              className={`text-base cursor-pointer font-semibold flex items-center gap-1    rounded-lg focus:outline-none transition-all duration-200  `}
              onClick={() => setHomeDropdown((open) => !open)}
              onFocus={() => setHomeDropdown(true)}
            >
              {t.home}
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {homeDropdown && (
              <div
                className={`absolute bg-white left-0 mt-2 w-48 border rounded shadow-lg z-50 transition-colors duration-200  `}
              >
                <Link
                  to="/home1"
                  className={`block px-4 py-3 text-base transition-colors duration-200 `}
                  onClick={() => {
                    setHomeDropdown(false);
                     
                  }}
                >
                  {t.home1}
                </Link>
                <Link
                  to="/home2"
                  className={`block px-4 py-3 text-base transition-colors duration-200 `}
                  onClick={() => {
                    setHomeDropdown(false);
                    
                  }}
                >
                  {t.home2}
                </Link>
              </div>
            )}
          </div>

          {/* About Us */}
          <button
            onClick={() => handleNavigation("/about-us")}
            className={`text-lg font-semibold focus:outline-none transition-colors duration-300
              ${theme === "dark"
                ? location === "/about-us"
                  ? "text-[#19e6f7]"
                  : "text-white hover:text-[#19e6f7]"
                : location === "/about-us"
                  ? "text-[#19e6f7]"
                  : "text-black hover:text-[#19e6f7]"
              }`}
          >
            {t.about}
          </button>

          {/* Services Dropdown */}
          <div className="relative">
            <span
              className={`text-base cursor-pointer font-semibold flex items-center gap-1     rounded-lg focus:outline-none transition-all duration-200 `}
              onClick={() => {
                navigate("/services");

              }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onFocus={() => setServicesDropdown(true)}
              onBlur={() => setServicesDropdown(false)}
            >
              {t.services}

              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {serviceDropdown && (
              <div
                className={`absolute left-0 mt-2 w-60 border rounded-xl shadow-xl z-50 transition-colors duration-200 bg-white  `}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div
                  className={`block px-4 py-2 text-base rounded-lg transition-colors duration-200 cursor-pointer border-b text-black  `}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services");

                  }}
                >
                  {t.viewAllServices}

                </div>
                {servicesDropdown.map((item) => (
                  <div
                    key={item.path}
                    className={`block px-4 py-2 text-base rounded-lg transition-colors duration-200 cursor-pointer hover:bg-[#19e6f7] text-black   `}
                    onClick={() => {
                      setServicesDropdown(false);
                      navigate(item.path);
                    }}
                  >
                    {item.name[language.code] || item.name.en}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Blog */}
          <button
            onClick={() => handleNavigation("/blog")}
            className={`text-lg font-semibold focus:outline-none transition-colors duration-300
              ${theme === "dark"
                ? location === "/blog"
                  ? "text-[#19e6f7]"
                  : "text-white hover:text-[#19e6f7]"
                : location === "/blog"
                  ? "text-[#19e6f7]"
                  : "text-black hover:text-[#19e6f7]"
              }`}
          >
            {t.blog}
          </button>

          {/* Contact Us + Language Selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigation("/contact-us")}
              className={`text-lg font-semibold focus:outline-none transition-colors duration-300
                  ${theme === "dark"
                  ? location === "/contact-us"
                    ? "text-[#19e6f7]"
                    : "text-white hover:text-[#19e6f7]"
                  : location === "/contact-us"
                    ? "text-[#19e6f7]"
                    : "text-black hover:text-[#19e6f7]"
                }`}
            >
              {t.contact}
            </button>
            <select
              value={language.code}
              onChange={(e) => setLanguage(languages[e.target.value])}
              className="px-2 py-1 ml-2 text-sm text-black bg-white border rounded focus:outline-none"
              style={{ direction: "ltr" }}
            >
              {Object.values(languages).map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </nav>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full border border-[#19e6f7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#19e6f7] mr-2
            ${theme === "dark"
              ? "bg-[#232323] hover:bg-[#181a19] text-white"
              : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-[#19e6f7]" />
          ) : (
            <MoonIcon className="h-6 w-6 text-[#19e6f7]" />
          )}
        </button>

        {/* Avatar Dropdown */}
        {email && (
          <div className="relative">
            <button
              id="avatar-btn"
              className="flex items-center justify-center rounded-full bg-[#19e6f7] text-[#181a19] font-bold text-lg w-10 h-10 focus:outline-none"
              style={{ minWidth: 40, minHeight: 40 }}
              title={email}
              onClick={() => setAvatarDropdownOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={avatarDropdownOpen}
            >
              {initials}
            </button>
            {avatarDropdownOpen && (
              <div
                id="avatar-dropdown-menu"
                className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-[#232323] text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fade-in"
                style={{ transition: 'opacity 0.2s, transform 0.2s', opacity: avatarDropdownOpen ? 1 : 0, transform: avatarDropdownOpen ? 'translateY(0)' : 'translateY(-10px)' }}
              >
                <div className="py-1">
                  {(isAdmin === true || localStorage.getItem("userRole") === "admin") && (
                    <button
                      onClick={() => { setAvatarDropdownOpen(false); handleAdminDashboard(); }}
                      className="w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#19e6f7] hover:text-black text-[#19e6f7]"
                    >
                      Back to Admin Dashboard
                    </button>
                  )}
                  <button
                    onClick={() => { setAvatarDropdownOpen(false); handleLogout(); }}
                    className="w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#19e6f7] hover:text-black text-[#19e6f7]"
                  >
                    {t.logout}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-[#19e6f7] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto bg-[#181a19] text-white p-6 flex flex-col space-y-4 md:hidden z-50 shadow-2xl animate-fade-in">
          {/* Home Dropdown */}
          <div className="mb-2">
            <p className="text-[#19e6f7] font-semibold mb-1 text-lg">{t.home}</p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { handleNavigation("/home1"); setMenuOpen(false); }}
                  className="block text-base hover:text-[#19e6f7] focus:outline-none"
                >{t.home1}</button>
              </li>
              <li>
                <button
                  onClick={() => { handleNavigation("/home2"); setMenuOpen(false); }}
                  className="block text-base hover:text-[#19e6f7] focus:outline-none"
                >{t.home2}</button>
              </li>
            </ul>
          </div>
          <button
            onClick={() => { handleNavigation("/about-us"); setMenuOpen(false); }}
            className="text-lg font-semibold hover:text-[#19e6f7]"
          >{t.about}</button>
          {/* Services Dropdown */}
          <div className="mb-2">
            <p className="text-[#19e6f7] font-semibold mb-1 text-lg">{t.services}</p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { handleNavigation("/services"); setMenuOpen(false); }}
                  className="block text-base hover:text-[#19e6f7] focus:outline-none"
                >{t.viewAllServices}</button>
              </li>
              {servicesDropdown.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => { handleNavigation(item.path); setMenuOpen(false); }}
                    className="block text-base hover:text-[#19e6f7] focus:outline-none"
                  >{item.name[language.code] || item.name.en}</button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => { handleNavigation("/blog"); setMenuOpen(false); }}
            className="text-lg font-semibold hover:text-[#19e6f7]"
          >{t.blog}</button>
          <button
            onClick={() => { handleNavigation("/contact-us"); setMenuOpen(false); }}
            className="text-lg font-semibold hover:text-[#19e6f7]"
          >{t.contact}</button>
          {/* Language Selector */}
          <div className="mt-4">
            <select
              value={language.code}
              onChange={e => setLanguage(languages[e.target.value])}
              className="px-2 py-1 text-sm text-black bg-white border rounded focus:outline-none"
              style={{ direction: 'ltr' }}
            >
              {Object.values(languages).map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}