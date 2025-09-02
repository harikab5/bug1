import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import logo from "../assets/logo.jpg";
import welcomeBg from "../assets/welcome.jpg";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Welcome() {
  // Language state
  const [language, setLanguage] = useState("en");
  // RTL support
  const isRTL = language === "ar" || language === "he";

  // Simple translations
  const translations = {
    en: {
      welcome: "Welcome to AI Tools",
      login: "Login to your account",
      email: "Email",
      password: "Password",
      loginBtn: "Login",
      signupPrompt: "Don't have an account?",
      signupBtn: "Sign up",
      user: "User",
      admin: "Admin"
    },
    ar: {
      welcome: "مرحبا بكم في أدوات الذكاء الاصطناعي",
      login: "تسجيل الدخول إلى حسابك",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      loginBtn: "تسجيل الدخول",
      signupPrompt: "ليس لديك حساب؟",
      signupBtn: "سجل الآن",
      user: "مستخدم",
      admin: "مسؤول"
    },
    he: {
      welcome: "ברוכים הבאים לכלי הבינה המלאכותית",
      login: "התחבר לחשבון שלך",
      email: "אימייל",
      password: "סיסמה",
      loginBtn: "התחבר",
      signupPrompt: "אין לך חשבון?",
      signupBtn: "הירשם",
      user: "משתמש",
      admin: "מנהל"
    }
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setRole } = useRole();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");

  // Default admin credentials (for demo)
  const DEFAULT_ADMINS = [
    { email: "admin@example.in", password: "admin123", role: "admin" },
    { email: "admin@enkonix.in", password: "admin123", role: "admin" }
  ];

  const handleRoleSelect = (admin) => {
    setIsAdmin(admin);
    setRole(admin ? "admin" : "user");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Combine with default admins for demo
    const allUsers = [...users, ...DEFAULT_ADMINS];
    
    // Find matching user
    const user = allUsers.find(
      user => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid credentials");
      return;
    }

    // Successful login
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("currentUser", JSON.stringify(user));
    
    // Redirect based on role
            navigate(user.role === "admin" ? "/admin-dashboard" : "/home1");
  };

  const handleContinue = () => {
    navigate("/signup", { state: { isAdmin } });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen flex flex-row" dir={isRTL ? (language === 'ar' ? 'rtl' : 'rtl') : 'ltr'} lang={language}>
      {/* Left: Form */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-[#181a19]' : 'bg-white'}`}>
        <div className={`w-full max-w-md p-8 ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/20' : 'bg-gray-50 border-gray-200'} border rounded-lg`}>
          {/* Language Dropdown */}
          <div className="flex justify-end mb-4">
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className={`px-3 py-2 rounded-lg border focus:outline-none ${theme === 'dark' ? 'bg-[#232323] text-white border-[#19e6f7]/30' : 'bg-white text-black border-gray-300'}`}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="he">עברית</option>
            </select>
          </div>
          {/* Logo */}
          <div className="relative flex justify-center items-center mb-8">
            <div className={`${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'} p-4 rounded-full`}>
              <img src={logo} loading="lazy" alt="Logo" className="h-16 w-auto" />
            </div>
            <button
              onClick={toggleTheme}
              className={`absolute right-0 p-2 rounded-full border border-[#19e6f7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${theme === 'dark' ? 'bg-[#232323] hover:bg-[#181a19] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-[#19e6f7]" />
              ) : (
                <MoonIcon className="h-5 w-5 text-[#19e6f7]" />
              )}
            </button>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-bold mb-4`}>{translations[language].welcome}</h2>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{translations[language].login}</p>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <div className="flex">
              <button
                onClick={() => handleRoleSelect(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  !isAdmin
                    ? theme === 'dark' ? "text-white" : "text-black"
                    : theme === 'dark' ? "text-gray-400 border-[#19e6f7]/30" : "text-gray-500 border-gray-300"
                }`}
                style={{
                  background: !isAdmin 
                    ? 'linear-gradient(90deg, #000000 0%, #1a1a1a 20%, #00d4aa 40%, #00a080 60%, #2a2a2a 80%, #000000 100%)' 
                    : 'transparent'
                }}
              >
                {translations[language].user}
              </button>
              <button
                onClick={() => handleRoleSelect(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  isAdmin
                    ? theme === 'dark' ? "text-white" : "text-black"
                    : theme === 'dark' ? "text-gray-400 border-[#19e6f7]/30" : "text-gray-500 border-gray-300"
                }`}
                style={{
                  background: isAdmin 
                    ? 'linear-gradient(90deg, #000000 0%, #1a1a1a 20%, #00d4aa 40%, #00a080 60%, #2a2a2a 80%, #000000 100%)' 
                    : 'transparent'
                }}
              >
                {translations[language].admin}
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-gray-700'}`}>
                {translations[language].email}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/30 text-white placeholder-gray-400 focus:border-[#19e6f7]' : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'}`}
                placeholder={translations[language].email}
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-gray-700'}`}>
                {translations[language].password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === 'dark' ? 'bg-[#1a1a1a] border-[#19e6f7]/30 text-white placeholder-gray-400 focus:border-[#19e6f7]' : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'}`}
                placeholder={translations[language].password}
                required
              />
            </div>
            {error && (
              <div className={`rounded-lg p-3 ${theme === 'dark' ? 'bg-red-900/20 border-red-500/30' : 'bg-red-50 border-red-200'} border`}>
                <p className={`text-sm text-center ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{error}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 px-4 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90"
              style={{background: 'linear-gradient(90deg, #000000 0%, #1a1a1a 20%, #00d4aa 40%, #00a080 60%, #2a2a2a 80%, #000000 100%)'}}
            >
              {translations[language].loginBtn}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {translations[language].signupPrompt}{" "}
              <button
                onClick={handleContinue}
                className={`hover:underline ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-blue-600'}`}
              >
                {translations[language].signupBtn}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block w-1/2 min-h-screen">
        <img src={welcomeBg} loading="lazy" alt="Welcome" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
