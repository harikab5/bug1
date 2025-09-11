import React, { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/SecondHome/home2.mp4";
import { useTheme } from "../context/ThemeContext";
// import sofiaMuller from '../assets/SecondHome/Sofia Müller.jpg';
import drAlexCarter from '../assets/SecondHome/Dr. Alex Carter.jpg';
import ethanKim from '../assets/SecondHome/Ethan Kim .jpeg.jpg';
import lindaZhao from '../assets/SecondHome/Linda Zhao.jpg';
import miguelTorres from '../assets/SecondHome/Miguel Torres.webp';
import priyaSingh from '../assets/SecondHome/Priya Singh.webp';
import ceoImg from '../assets/SecondHome/ceo1.webp';
import { useScrollToTop } from '../hooks/useScrollToTop';
 // Add a world map SVG or PNG to your assets
function ExpertCard({ img, name, title, bio }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div 
      className={`expert-card${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img} loading="lazy" alt={name} className="expert-img" />
      <div className={`expert-info-container${hovered ? ' show' : ''}`}>
        <span className="expert-name">{name}</span>
        <span className="expert-underline"></span>
        <span className="expert-title">{title}</span>
        <span className="expert-bio">{bio}</span>
        <div className="expert-social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

const SecondHome = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const webinarCarouselRef = useRef(null);
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    event: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Registration form handlers
  const handleRegisterClick = (eventName = '') => {
    setRegistrationData(prev => ({ ...prev, event: eventName }));
    setShowRegistrationForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setRegistrationData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        event: ''
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setShowRegistrationForm(false);
        setSubmitSuccess(false);
      }, 2000);
    }, 1500);
  };

  const closeModal = () => {
    setShowRegistrationForm(false);
    setSubmitSuccess(false);
    setRegistrationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      event: ''
    });
  };

  // Scroll to top when component mounts
  useScrollToTop();

  // Expert data
  const experts = [
    {
      img: drAlexCarter,
      name: {
        en: 'Dr. Alex Carter',
        ar: 'د. أليكس كارتر',
        he: 'ד"ר אלכס קרטר',
      },
      title: {
        en: 'Lead AI Scientist',
        ar: 'رئيس علماء الذكاء الاصطناعي',
        he: 'מדען ראשי ל-AI',
      },
      bio: {
        en: 'Expert in machine learning and automation, with 10+ years in AI research and deployment.',
        ar: 'خبير في التعلم الآلي والأتمتة، مع أكثر من 10 سنوات في أبحاث وتطبيقات الذكاء الاصطناعي.',
        he: 'מומחה ללמידת מכונה ואוטומציה, עם מעל 10 שנות ניסיון במחקר ויישום AI.',
      }
    },
    {
      img: priyaSingh,
      name: {
        en: 'Priya Singh',
        ar: 'بريا سينغ',
        he: 'פריה סינג',
      },
      title: {
        en: 'Chief Data Officer',
        ar: 'رئيسة قسم البيانات',
        he: 'מנהלת נתונים ראשית',
      },
      bio: {
        en: 'Specialist in data analytics and security, helping businesses unlock actionable insights.',
        ar: 'متخصصة في تحليلات البيانات والأمان، تساعد الشركات في اكتساب رؤى قابلة للتنفيذ.',
        he: 'מומחית לניתוח נתונים ואבטחה, מסייעת לעסקים להפיק תובנות מעשיות.',
      }
    },
    {
      img: miguelTorres,
      name: {
        en: 'Miguel Torres',
        ar: 'ميغيل توريس',
        he: 'מיגל טורס',
      },
      title: {
        en: 'AI Solutions Architect',
        ar: 'مهندس حلول الذكاء الاصطناعي',
        he: 'ארכיטקט פתרונות AI',
      },
      bio: {
        en: 'Architect of scalable AI systems, passionate about innovation and client success.',
        ar: 'مهندس أنظمة ذكاء اصطناعي قابلة للتوسع، شغوف بالابتكار ونجاح العملاء.',
        he: 'ארכיטקט מערכות AI בקנה מידה גדול, נלהב לחדשנות והצלחת לקוחות.',
      }
    },
    {
      img: lindaZhao,
      name: {
        en: 'Linda Zhao',
        ar: 'ليندا تشاو',
        he: 'לינדה ג׳או',
      },
      title: {
        en: 'Data Science Lead',
        ar: 'قائدة علوم البيانات',
        he: 'ראש צוות מדעי נתונים',
      },
      bio: {
        en: 'Leads data science teams to deliver actionable insights and drive business growth.',
        ar: 'تقود فرق علوم البيانات لتقديم رؤى قابلة للتنفيذ ودفع نمو الأعمال.',
        he: 'מנהלת צוותי מדעי נתונים להפקת תובנות ולצמיחה עסקית.',
      }
    },
    {
      img: ethanKim,
      name: {
        en: 'Ethan Kim',
        ar: 'إيثان كيم',
  he: "אית'ן קים",
      },
      title: {
        en: 'AI Product Manager',
        ar: 'مدير منتجات الذكاء الاصطناعي',
        he: 'מנהל מוצרי AI',
      },
      bio: {
        en: 'Bridges the gap between business and technology, delivering user-focused AI products.',
        ar: 'يجسر الفجوة بين الأعمال والتكنولوجيا، ويقدم منتجات ذكاء اصطناعي تركز على المستخدم.',
        he: 'מחבר בין עסקים לטכנולוגיה, מספק מוצרי AI ממוקדי משתמש.',
      }
    },
  ];

  const nextExpert = () => {
    setCurrentExpertIndex((prev) => (prev + 1) % experts.length);
  };

  const prevExpert = () => {
    setCurrentExpertIndex((prev) => (prev - 1 + experts.length) % experts.length);
  };

  const getExpertIndex = (offset) => {
    return (currentExpertIndex + offset + experts.length) % experts.length;
  };

  const scrollWebinars = (direction) => {
    const container = webinarCarouselRef.current;
    if (!container) return;
    const scrollAmount = 440; // slightly more than card min-width
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Webinar data for the calendar grid
  const webinarData = [
    {
      date: {
        en: "June 28, 2024",
        ar: "28 يونيو 2024",
        he: "28 ביוני 2024",
      },
      title: {
        en: "AI in Action: Transforming Business Operations",
        ar: "الذكاء الاصطناعي في العمل: تحويل العمليات التجارية",
        he: "AI בפעולה: שינוי תהליכים עסקיים",
      },
      description: {
        en: "Join our experts for a live session on how AI is revolutionizing workflows, boosting productivity, and driving innovation across industries.",
        ar: "انضم إلى خبرائنا لجلسة مباشرة حول كيفية قيام الذكاء الاصطناعي بثورة في سير العمل وزيادة الإنتاجية ودفع الابتكار عبر الصناعات.",
        he: "הצטרפו למומחים שלנו למפגש חי על איך AI משנה תהליכי עבודה, מגביר פרודוקטיביות ומניע חדשנות בענפים שונים.",
      },
      time: {
        en: "4:00 PM GMT",
        ar: "4:00 مساءً بتوقيت غرينتش",
        he: "16:00 GMT",
      }
    },
    {
      date: {
        en: "July 12, 2024",
        ar: "12 يوليو 2024",
        he: "12 ביולי 2024",
      },
      title: {
        en: "NLP for Business: Unlocking Language Data",
        ar: "معالجة اللغة الطبيعية للأعمال: فتح بيانات اللغة",
        he: "NLP לעסקים: פתיחת נתוני שפה",
      },
      description: {
        en: "Discover how natural language processing is transforming customer insights and automating communication.",
        ar: "اكتشف كيف تغير معالجة اللغة الطبيعية رؤى العملاء وتؤتمت التواصل.",
        he: "גלו כיצד עיבוד שפה טבעית משנה תובנות לקוח ומאוטומט תקשורת.",
      },
      time: {
        en: "3:00 PM GMT",
        ar: "3:00 مساءً بتوقيت غرينتش",
        he: "15:00 GMT",
      }
    },
    {
      date: {
        en: "July 26, 2024",
        ar: "26 يوليو 2024",
        he: "26 ביולי 2024",
      },
      title: {
        en: "Automation & Workflow Tools in Practice",
        ar: "أدوات الأتمتة وسير العمل في التطبيق العملي",
        he: "כלי אוטומציה וזרימות עבודה בפועל",
      },
      description: {
        en: "See real-world examples of how automation is streamlining business processes and saving time.",
        ar: "شاهد أمثلة واقعية حول كيفية تبسيط الأتمتة للعمليات التجارية وتوفير الوقت.",
        he: "ראו דוגמאות אמיתיות כיצד אוטומציה מייעלת תהליכים עסקיים וחוסכת זמן.",
      },
      time: {
        en: "5:00 PM GMT",
        ar: "5:00 مساءً بتوقيت غرينتش",
        he: "17:00 GMT",
      }
    },
    {
      date: {
        en: "August 9, 2024",
        ar: "9 أغسطس 2024",
        he: "9 באוגוסט 2024",
      },
      title: {
        en: "Data Analysis & Forecasting with AI",
        ar: "تحليل البيانات والتنبؤ بالذكاء الاصطناعي",
        he: "ניתוח נתונים וחיזוי עם AI",
      },
      description: {
        en: "Learn how to turn raw data into actionable insights and accurate forecasts using AI analytics.",
        ar: "تعلم كيفية تحويل البيانات الخام إلى رؤى قابلة للتنفيذ وتوقعات دقيقة باستخدام تحليلات الذكاء الاصطناعي.",
        he: "למדו כיצד להפוך נתונים גולמיים לתובנות מעשיות ולתחזיות מדויקות באמצעות ניתוחי AI.",
      },
      time: {
        en: "2:00 PM GMT",
        ar: "2:00 مساءً بتوقيت غرينتش",
        he: "14:00 GMT",
      }
    },
  ];

  const WebinarFeaturedList = () => {
    const [featured, ...others] = webinarData;
    const t = {
      upcomingWebinars: {
        en: "Upcoming Webinars",
        ar: "الندوات القادمة",
        he: "וובינרים קרובים",
      },
      register: {
        en: "Register",
        ar: "سجل الآن",
        he: "הרשמה",
      },
    };
    return (
      <section className="py-20 px-4 min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-[#19bba6] to-[#0a2342]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">{t.upcomingWebinars[language.code]}</h2>
        {/* Featured Webinar */}
        <div className={`max-w-3xl w-full rounded-2xl shadow-2xl p-8 mb-10 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'}`}>
          <div className="text-[#19e6f7] text-lg font-bold mb-2">{featured.date[language.code]} &bull; {featured.time[language.code]}</div>
          <div className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{featured.title[language.code]}</div>
          <p className={`mb-6 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>{featured.description[language.code]}</p>
          <button 
            onClick={() => handleRegisterClick(featured.title[language.code])}
            className="inline-block font-bold text-lg px-10 py-4 rounded-lg shadow transition text-white hover:scale-105" 
            style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}
          >
            {t.register[language.code]}
          </button>
        </div>
        {/* List of Other Webinars */}
        <div className="max-w-6xl w-full flex flex-row gap-6 justify-center items-stretch">
          {others.map((webinar, idx) => (
            <div key={idx} className={`flex-1 max-w-xs rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'}`}>
              <div className="text-[#19e6f7] text-base font-bold mb-1">{webinar.date[language.code]} &bull; {webinar.time[language.code]}</div>
              <div className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{webinar.title[language.code]}</div>
              <button 
                onClick={() => handleRegisterClick(webinar.title[language.code])}
                className="mt-4 inline-block font-bold text-base px-6 py-2 rounded-lg shadow transition text-white hover:scale-105" 
                style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}
              >
                {t.register[language.code]}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };



  // Sticky stack cards for upcoming webinars/events
  
  const EventCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselEvents.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? carouselEvents.length - 1 : prevIndex - 1
      );
    };

    const getCardIndex = (offset) => {
      const index = (currentIndex + offset + carouselEvents.length) % carouselEvents.length;
      return index;
    };

    return (
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center">{{
            en: 'Future',
            ar: 'الفعاليات القادمة',
            he: 'אירועים עתידיים',
          }[language.code]} <span className="text-[#19e6f7]">{{
            en: 'Events',
            ar: 'الفعاليات',
            he: 'אירועים',
          }[language.code]}</span></h2>
          
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="absolute right-4 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Cards */}
            <div className="flex items-center justify-center gap-8 relative">
                             {/* Left Card */}
               <div className="relative transform transition-all duration-500 ease-in-out">
                 <div className="w-72 h-88 bg-[#232323] rounded-2xl shadow-xl overflow-hidden opacity-60 blur-sm scale-75 -translate-y-8">
                   <div className="w-full h-[50%] relative">
                     <img 
                       src={carouselEvents[getCardIndex(-1)].image} 
                       loading="lazy"
                       alt={carouselEvents[getCardIndex(-1)].title}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="w-full h-[50%] p-3 flex flex-col justify-between">
                     <div>
                       <h3 className="text-white font-bold text-sm mb-2">{carouselEvents[getCardIndex(-1)].title}</h3>
                       <p className="text-[#19e6f7] text-xs mb-2">{carouselEvents[getCardIndex(-1)].date} • {carouselEvents[getCardIndex(-1)].time}</p>
                     </div>
                     <button 
                       onClick={() => handleRegisterClick(carouselEvents[getCardIndex(-1)].title)}
                       className="inline-block font-bold text-sm px-4 py-2 rounded-lg shadow-lg transition text-white hover:scale-105 text-center" 
                       style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}
                     >
                       {{
                         en: 'Register Now',
                         ar: 'سجل الآن',
                         he: 'הרשמה עכשיו',
                       }[language.code]}
                     </button>
                   </div>
                 </div>
               </div>

              {/* Center Card (Main) */}
              <div className="relative transform transition-all duration-500 ease-in-out z-10">
                <div className="w-80 h-96 bg-[#232323] rounded-2xl shadow-2xl overflow-hidden scale-110">
                  <div className="w-full h-[50%] relative">
                    <img 
                      src={carouselEvents[currentIndex].image} 
                      loading="lazy"
                      alt={carouselEvents[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-[50%] p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{carouselEvents[currentIndex].title}</h3>
                      <p className="text-[#19e6f7] text-sm mb-2">{carouselEvents[currentIndex].date} • {carouselEvents[currentIndex].time}</p>
                      <p className="text-[#bfc1be] text-sm">{carouselEvents[currentIndex].description}</p>
                    </div>
                    <button 
                      onClick={() => handleRegisterClick(carouselEvents[currentIndex].title)}
                      className="inline-block font-bold text-sm px-6 py-2 rounded-lg shadow transition text-white text-center hover:scale-105" 
                      style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}
                    >
                      {{
                        en: 'Register Now',
                        ar: 'سجل الآن',
                        he: 'הרשמה עכשיו',
                      }[language.code]}
                    </button>
                  </div>
                </div>
              </div>

                             {/* Right Card */}
               <div className="relative transform transition-all duration-500 ease-in-out">
                 <div className="w-72 h-88 bg-[#232323] rounded-2xl shadow-xl overflow-hidden opacity-60 blur-sm scale-75 -translate-y-8">
                   <div className="w-full h-[50%] relative">
                     <img 
                       src={carouselEvents[getCardIndex(1)].image} 
                       loading="lazy"
                       alt={carouselEvents[getCardIndex(1)].title}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="w-full h-[50%] p-3 flex flex-col justify-between">
                     <div>
                       <h3 className="text-white font-bold text-sm mb-2">{carouselEvents[getCardIndex(1)].title}</h3>
                       <p className="text-[#19e6f7] text-xs mb-2">{carouselEvents[getCardIndex(1)].date} • {carouselEvents[getCardIndex(1)].time}</p>
                     </div>
                     <button 
                       onClick={() => handleRegisterClick(carouselEvents[getCardIndex(1)].title)}
                       className="inline-block font-bold text-sm px-4 py-2 rounded-lg shadow-lg transition text-white hover:scale-105 text-center" 
                       style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}
                     >
                       {{
                         en: 'Register Now',
                         ar: 'سجل الآن',
                         he: 'הרשמה עכשיו',
                       }[language.code]}
                     </button>
                   </div>
                 </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
  };

 

  return (
    <div className={`${theme === "dark" ? "bg-[#121212] text-white" : "bg-gray-50 text-black"}`}> 
      {/* 1. Hero/Intro Section */}
      <section
        className={`${theme === "dark" ? "relative text-white py-8 shadow-2xl overflow-hidden w-full px-2 sm:px-4 md:px-8 lg:px-16 bg-[#121212] min-h-[400px] flex flex-col items-center justify-center" : "relative text-black py-8 shadow-2xl overflow-hidden w-full px-2 sm:px-4 md:px-8 lg:px-16 bg-gray-100 min-h-[400px] flex flex-col items-center justify-center"}`}
        style={{
          backgroundImage: `url(${heroVideo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.50)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black bg-opacity-60' : ''}`}></div>
        <div className="relative z-10 w-full max-w-3xl px-2 sm:px-4 py-6 flex flex-col items-center justify-center text-center mx-auto" style={{textShadow: theme === 'dark' ? '0 2px 16px #000, 0 1px 2px #000' : 'none'}}>
          <span className="uppercase text-xs sm:text-sm font-semibold tracking-widest text-[#19e6f7] mb-4 sm:mb-6">{{
            en: 'AI Solutions',
            ar: 'حلول الذكاء الاصطناعي',
            he: 'פתרונות AI',
          }[language.code]}</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight text-white">{{
            en: 'Revolutionize Your Workflow with',
            ar: 'حوّل سير عملك مع',
            he: 'הפוך את זרימת העבודה שלך עם',
          }[language.code]} <span style={{color: '#19e6f7'}}>AI</span></h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-white">{{
            en: 'Harness the power of next-gen artificial intelligence to automate, analyze, and accelerate your business.',
            ar: 'استفد من قوة الذكاء الاصطناعي الحديث لأتمتة وتحليل وتسريع أعمالك.',
            he: 'נצל את כוח ה-AI מהדור הבא לאוטומציה, ניתוח והאצת העסק שלך.',
          }[language.code]}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 text-white">{{
            en: `From task automation to advanced data analytics and intelligent decision-making, our AI tools empower teams to work smarter—not harder. Whether you're a startup or a large enterprise, our scalable AI solutions adapt to your needs and transform the way you operate.`,
            ar: 'من أتمتة المهام إلى تحليلات البيانات المتقدمة واتخاذ القرار الذكي، أدوات الذكاء الاصطناعي لدينا تمكّن الفرق من العمل بذكاء وليس بجهد. سواء كنت شركة ناشئة أو مؤسسة كبيرة، حلولنا القابلة للتوسع تتكيف مع احتياجاتك وتغير طريقة عملك.',
            he: 'מאוטומציה של משימות ועד ניתוח נתונים מתקדם וקבלת החלטות חכמה, כלי ה-AI שלנו מאפשרים לצוותים לעבוד חכם יותר, לא קשה יותר. בין אם אתה סטארטאפ או ארגון גדול, פתרונות ה-AI שלנו מותאמים לצרכים שלך ומשנים את אופן הפעולה שלך.',
          }[language.code]}</p>
          <button 
            onClick={() => handleNavigation('/contact-us')}
            className="inline-block px-6 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg text-white hover:scale-105 transition-transform duration-300"
            style={{backgroundColor: '#19e6f7', marginBottom: '0.5rem'}}>
            {{
              en: 'Get Started Free',
              ar: 'ابدأ مجانًا',
              he: 'התחל בחינם',
            }[language.code]}
          </button>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-0" style={{ background: '#000' }}>
        <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-stretch">
          {/* Left: Heading and Subtitle */}
          <div className="flex-1 flex flex-col justify-start items-start px-12 py-16" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, #0a2342, #1de9b6)' : '#19e6f7', minWidth: 320 }}>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{{
              en: 'Why Choose Us?',
              ar: 'لماذا تختارنا؟',
              he: 'למה לבחור בנו?',
            }[language.code]}</h2>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-[#19e6f7]' : 'text-white'}`}>{{
              en: 'Proven Results & Trusted Excellence',
              ar: 'نتائج مثبتة وامتياز موثوق',
              he: 'תוצאות מוכחות ומצוינות אמינה',
            }[language.code]}</h3>
            <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-[#222]'}`}>
              <div className="text-justify">{{
                en: 'The numbers speak for themselves. Our track record of delivering exceptional AI solutions has earned us the trust of leading businesses worldwide.',
                ar: 'الأرقام تتحدث عن نفسها. سجلنا في تقديم حلول ذكاء اصطناعي استثنائية أكسبنا ثقة الشركات الرائدة حول العالم.',
                he: 'המספרים מדברים בעד עצמם. ההיסטוריה שלנו במתן פתרונות AI יוצאי דופן זיכתה אותנו באמון עסקים מובילים ברחבי העולם.',
              }[language.code]}</div>
            </p>
            <p className={`text-base mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-[#222]'}`}>
              <div className="text-justify">{{
                en: `From startups to Fortune 500 companies, we've consistently delivered measurable results that drive growth, efficiency, and innovation. Our commitment to excellence is reflected in every project we undertake.`,
                ar: 'من الشركات الناشئة إلى شركات فورتشن 500، قدمنا باستمرار نتائج قابلة للقياس تدفع النمو والكفاءة والابتكار. التزامنا بالتميز ينعكس في كل مشروع نقوم به.',
                he: 'מסטארטאפים ועד חברות Fortune 500, סיפקנו תוצאות מדידות שמניעות צמיחה, יעילות וחדשנות. המחויבות שלנו למצוינות משתקפת בכל פרויקט.',
              }[language.code]}</div>
            </p>
            <p className={`text-base mb-6 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-[#222]'}`}>
              <div className="text-justify">{{
                en: 'With cutting-edge AI technology, expert teams, and a customer-first approach, we transform complex challenges into elegant solutions. Our comprehensive suite of AI tools and services ensures that every business, regardless of size, can harness the power of artificial intelligence to achieve their goals.',
                ar: 'بتقنيات الذكاء الاصطناعي المتقدمة، وفرق الخبراء، ونهج يركز على العميل، نحول التحديات المعقدة إلى حلول أنيقة. مجموعتنا الشاملة من أدوات وخدمات الذكاء الاصطناعي تضمن أن كل عمل، بغض النظر عن حجمه، يمكنه الاستفادة من قوة الذكاء الاصطناعي لتحقيق أهدافه.',
                he: 'עם טכנולוגיית AI מתקדמת, צוותים מומחים וגישה ממוקדת לקוח, אנו הופכים אתגרים מורכבים לפתרונות אלגנטיים. מערך הכלים והשירותים שלנו מבטיח שכל עסק יוכל לנצל את כוח ה-AI להשגת מטרותיו.',
              }[language.code]}</div>
            </p>
            <button 
              onClick={() => handleNavigation('/about-us')}
              className="inline-block font-bold text-base px-8 py-3 rounded-lg shadow-lg transition text-white hover:scale-105"
              style={{background: '#000'}}>
              {{
                en: 'Read More',
                ar: 'اقرأ المزيد',
                he: 'קרא עוד',
              }[language.code]}
            </button>
          </div>
          {/* Right: Stats */}
          <div className="flex-1 flex flex-col justify-start gap-8 bg-white px-12 py-16 relative">
            {/* Stat 1 */}
            {[0,1,2,3,4,5].map((i) => (
              <div key={i} className="flex items-center gap-6 relative group hover:z-10" style={{ zIndex: 2, transition: 'z-index 0.2s' }}>
                <div className={`w-20 h-20 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg border-4 absolute -left-20 group-hover:scale-110 transition-transform duration-300 ${theme === 'dark' ? 'bg-[#181818] text-white border-white' : 'bg-white text-black border-white'}`}>{i+1}</div>
                <div className="ml-16 group-hover:scale-105 transition-transform duration-300">
                  <div className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-[#0a2342]' : 'text-[#0a2342]'}`}>{[
                    {
                      en: '95% Customer Satisfaction',
                      ar: 'رضا العملاء بنسبة 95%',
                      he: '95% שביעות רצון לקוחות',
                    },
                    {
                      en: '88% Faster Project Delivery',
                      ar: 'تسليم المشاريع أسرع بنسبة 88%',
                      he: '88% אספקת פרויקטים מהירה יותר',
                    },
                    {
                      en: '99.9% Data Security',
                      ar: 'أمان البيانات بنسبة 99.9%',
                      he: '99.9% אבטחת נתונים',
                    },
                    {
                      en: '92% Repeat Clients',
                      ar: '92% من العملاء المتكررين',
                      he: '92% לקוחות חוזרים',
                    },
                    {
                      en: '85% Cost Savings',
                      ar: 'توفير التكاليف بنسبة 85%',
                      he: '85% חיסכון בעלויות',
                    },
                    {
                      en: '100% Uptime',
                      ar: 'تشغيل مستمر بنسبة 100%',
                      he: '100% זמן פעולה רציף',
                    },
                  ][i][language.code]}</div>
                  <div className={`text-base ${theme === 'dark' ? 'text-[#181818]' : 'text-[#181818]'}`}>{[
                    {
                      en: 'Our clients consistently rate us as excellent for support and results.',
                      ar: 'عملاؤنا يقيموننا باستمرار على أننا ممتازون في الدعم والنتائج.',
                      he: 'הלקוחות שלנו מדרגים אותנו מצוין בתמיכה ובתוצאות.',
                    },
                    {
                      en: 'AI automation helps teams deliver projects ahead of schedule.',
                      ar: 'أتمتة الذكاء الاصطناعي تساعد الفرق على تسليم المشاريع قبل الموعد المحدد.',
                      he: 'אוטומציה של AI מסייעת לצוותים לספק פרויקטים לפני הזמן.',
                    },
                    {
                      en: 'Enterprise-grade encryption keeps your data safe and compliant.',
                      ar: 'تشفير من الدرجة المؤسسية يحافظ على بياناتك آمنة ومتوافقة.',
                      he: 'הצפנה ברמה ארגונית שומרת על הנתונים שלך בטוחים ותואמים.',
                    },
                    {
                      en: 'Most of our clients return for new projects and ongoing support.',
                      ar: 'معظم عملائنا يعودون لمشاريع جديدة ودعم مستمر.',
                      he: 'רוב הלקוחות שלנו חוזרים לפרויקטים חדשים ולתמיכה מתמשכת.',
                    },
                    {
                      en: 'Our automation tools help businesses reduce operational costs.',
                      ar: 'أدوات الأتمتة لدينا تساعد الشركات على تقليل التكاليف التشغيلية.',
                      he: 'כלי האוטומציה שלנו מסייעים לעסקים להפחית עלויות תפעול.',
                    },
                    {
                      en: 'Our cloud-based solutions ensure your business is always online.',
                      ar: 'حلولنا السحابية تضمن أن يكون عملك دائمًا متصلاً بالإنترنت.',
                      he: 'הפתרונות מבוססי ענן שלנו מבטיחים שהעסק שלך תמיד יהיה מחובר.',
                    },
                  ][i][language.code]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .expert-card {
          position: relative;
          max-width: 250px;
          height: 350px;
          border-radius: 10px;
          overflow: hidden;
          background: #181818;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s;
          box-shadow: 0 4px 24px 0 #0004;
        }
        .expert-card:hover {
          transform: scale(1.07);
          box-shadow: 0 8px 32px 0 #0006;
        }
        .expert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: filter 0.5s cubic-bezier(.4,2,.6,1);
        }
        .expert-card.hovered .expert-img {
          filter: blur(4px) brightness(0.7);
        }
        .expert-info-container {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          background: rgba(24,24,24,0.7);
          padding: 1.5rem 1rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.5s, transform 0.5s;
        }
        .expert-card.hovered .expert-info-container {
          opacity: 1;
          transform: translateY(0);
        }
        .expert-name {
          color: #fff;
          font-size: 1.15rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 2;
        }
        .expert-underline {
          height: 3px;
          background: #19e6f7;
          width: 0;
          margin-top: 4px;
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(.4,2,.6,1);
        }
        .expert-card.hovered .expert-underline {
          width: 100%;
        }
        .expert-title {
          color: #19e6f7;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          margin-top: 0.75rem;
        }
        .expert-bio {
          color: #bfc1be;
          font-size: 0.85rem;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .expert-btn {
          background: #19e6f7;
          color: #181818;
          font-weight: bold;
          border-radius: 4px;
          padding: 0.25rem 0.75rem;
          font-size: 0.95rem;
        }
        .expert-social-icons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s, transform 0.5s;
        }
        .expert-card.hovered .expert-social-icons {
          opacity: 1;
          transform: translateY(0);
        }
        .social-icon {
          color: #19e6f7;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(25, 230, 247, 0.1);
        }
        .social-icon:hover {
          color: #fff;
          background: #19e6f7;
          transform: scale(1.1);
        }
      `}</style>
      <section className="py-16 px-4" style={{ background: theme === 'dark' ? '#111211' : '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{{
              en: 'Meet Our',
              ar: 'تعرف على',
              he: 'הכירו את',
            }[language.code]} </span>
            <span className="text-[#19e6f7]">{{
              en: 'Experts',
              ar: 'الخبراء',
              he: 'המומחים',
            }[language.code]}</span>
          </h2>
          <p className={`text-center mb-8 max-w-2xl ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>
            {{
              en: 'Connect with our AI specialists and get personalized solutions for your business needs.',
              ar: 'تواصل مع خبراء الذكاء الاصطناعي لدينا واحصل على حلول مخصصة لاحتياجات عملك.',
              he: 'התחברו עם מומחי ה-AI שלנו וקבלו פתרונות מותאמים אישית לעסק שלכם.',
            }[language.code]}
          </p>
          
          {/* Expert Carousel */}
          <div className="relative w-full max-w-6xl">
            {/* Left Arrow */}
            <button 
              onClick={prevExpert}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextExpert}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Expert Cards Container */}
            <div className="flex items-center justify-center gap-8 relative">
              {/* Left Card (Blurred) */}
              <div className="transform transition-all duration-500 ease-in-out opacity-60 blur-sm scale-75 -translate-y-8">
                <ExpertCard 
                  img={experts[getExpertIndex(-1)].img} 
                  name={experts[getExpertIndex(-1)].name[language.code]} 
                  title={experts[getExpertIndex(-1)].title[language.code]} 
                  bio={experts[getExpertIndex(-1)].bio[language.code]} 
                />
              </div>
              
              {/* Center Card (Main - Scaled) */}
              <div className="transform transition-all duration-500 ease-in-out z-10 scale-110">
                <ExpertCard 
                  img={experts[currentExpertIndex].img} 
                  name={experts[currentExpertIndex].name[language.code]} 
                  title={experts[currentExpertIndex].title[language.code]} 
                  bio={experts[currentExpertIndex].bio[language.code]} 
                />
              </div>
              
              {/* Right Card (Blurred) */}
              <div className="transform transition-all duration-500 ease-in-out opacity-60 blur-sm scale-75 -translate-y-8">
                <ExpertCard 
                  img={experts[getExpertIndex(1)].img} 
                  name={experts[getExpertIndex(1)].name[language.code]} 
                  title={experts[getExpertIndex(1)].title[language.code]} 
                  bio={experts[getExpertIndex(1)].bio[language.code]} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>


  
      <section className="py-20 px-4 min-h-[300px] flex items-center justify-center" style={{background: 'linear-gradient(35deg,rgb(43, 144, 112) 0%,rgb(46, 136, 199) 100%)', position: 'relative'}}>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 py-8 md:py-16 relative">
          {/* CEO Image */}
          <div className="w-full md:w-auto flex-shrink-0 flex items-center justify-center mb-8 md:mb-0">
            <img src={ceoImg} loading="lazy" alt="CEO" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover rounded-2xl shadow-xl border-4 border-white" />
          </div>
          {/* Message Content */}
          <div className="w-full md:flex-1 flex flex-col justify-center items-start text-left text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">{{
              en: 'Meet Our',
              ar: 'تعرف على',
              he: 'הכירו את',
            }[language.code]} <span className="text-[#19e6f7]">{{
              en: 'CEO',
              ar: 'الرئيس التنفيذي',
              he: 'המנכ"ל',
            }[language.code]}</span></h2>
          <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow-lg mb-4">
            <div className="text-justify">{{
              en: `With over 20 years of leadership in the technology sector, our CEO has guided the company through rapid growth and innovation. Their vision for integrating artificial intelligence into everyday business processes has transformed the way we deliver value to our clients.\n\nUnder their direction, our team has launched groundbreaking AI solutions that empower organizations to automate workflows, gain actionable insights, and stay ahead in a competitive market. Their commitment to excellence, integrity, and customer success is at the heart of everything we do.\n\nDiscover how our CEO's passion for technology and people is shaping the future of our company and the industry as a whole.`,
              ar: `مع أكثر من 20 عامًا من القيادة في قطاع التكنولوجيا، قاد الرئيس التنفيذي شركتنا نحو نمو سريع وابتكار. رؤيته لدمج الذكاء الاصطناعي في العمليات التجارية اليومية غيرت طريقة تقديم القيمة لعملائنا.\n\nتحت قيادته، أطلق فريقنا حلول ذكاء اصطناعي رائدة تمكن المؤسسات من أتمتة سير العمل، واكتساب رؤى قابلة للتنفيذ، والبقاء في صدارة المنافسة. التزامه بالتميز والنزاهة ونجاح العملاء هو جوهر كل ما نقوم به.\n\nاكتشف كيف يشكل شغف الرئيس التنفيذي بالتكنولوجيا والناس مستقبل شركتنا والصناعة ككل.`,
              he: `עם למעלה מ-20 שנות מנהיגות בתחום הטכנולוגיה, המנכ"ל שלנו הוביל את החברה לצמיחה מהירה וחדשנות. החזון שלו לשילוב AI בתהליכים עסקיים יומיומיים שינה את הדרך בה אנו מספקים ערך ללקוחותינו.\n\nבהנהגתו, הצוות שלנו השיק פתרונות AI פורצי דרך שמאפשרים לארגונים לאוטומט זרימות עבודה, להפיק תובנות ולהישאר מובילים בשוק תחרותי. המחויבות שלו למצוינות, יושרה והצלחת לקוחות היא בלב כל מה שאנו עושים.\n\nגלו כיצד התשוקה של המנכ"ל שלנו לטכנולוגיה ולאנשים מעצבת את עתיד החברה והתעשייה כולה.`,
            }[language.code]}</div>
          </p>
            <div className="mt-4">
              <div className="text-xl font-bold">Demish Tornado</div>
              <div className="text-[#e0dbe6] text-base">{{
                en: 'CEO & Founder',
                ar: 'الرئيس التنفيذي والمؤسس',
                he: 'מנכ"ל ומייסד',
              }[language.code]}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-20" style={{ background: theme === 'dark' ? '#181818' : '#f5f5f5' }}>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5 md:ml-30">
          {/* Left: Heading, para, button */}
          <div className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{{
              en: 'Insights',
              ar: 'رؤى',
              he: 'תובנות',
            }[language.code]}</h2>
            <div className="text-[#19e6f7] text-lg font-semibold ">{{
              en: 'Your source for practical AI knowledge',
              ar: 'مصدر المعرفة العملية للذكاء الاصطناعي',
              he: 'המקור שלך לידע AI מעשי',
            }[language.code]}</div>
            <p className={`text-md md:text-lg mb-2 max-w-2xl ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
              <div className="text-justify">{{
                en: 'Stay ahead with the latest trends, tips, and real-world stories about AI, automation, and digital transformation for your business. Explore our expert insights and practical guides to help you succeed in the AI era.',
                ar: 'ابق في المقدمة مع أحدث الاتجاهات والنصائح والقصص الواقعية حول الذكاء الاصطناعي والأتمتة والتحول الرقمي لعملك. استكشف رؤى خبرائنا والأدلة العملية لمساعدتك على النجاح في عصر الذكاء الاصطناعي.',
                he: 'הישארו מובילים עם הטרנדים, הטיפים והסיפורים האמיתיים האחרונים על AI, אוטומציה ודיגיטציה לעסק שלכם. גלו את התובנות והמדריכים המעשיים שלנו להצלחה בעידן ה-AI.',
              }[language.code]}</div>
            </p>
            <p className={`text-md md:text-lg mb-6 max-w-2xl ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
              <div className="text-justify">{{
                en: 'Discover how leading companies are leveraging AI to drive innovation and achieve measurable results.',
                ar: 'اكتشف كيف تستفيد الشركات الرائدة من الذكاء الاصطناعي لدفع الابتكار وتحقيق نتائج قابلة للقياس.',
                he: 'גלו כיצד חברות מובילות מנצלות את ה-AI לקידום חדשנות והשגת תוצאות מדידות.',
              }[language.code]}</div>
            </p>
            <ul className={`mb-8 pl-5 list-disc text-base space-y-2 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
              <li>{{
                en: 'Real-world case studies and success stories',
                ar: 'دراسات حالة واقعية وقصص نجاح',
                he: 'מחקרי מקרה אמיתיים וסיפורי הצלחה',
              }[language.code]}</li>
              <li>{{
                en: 'Actionable AI implementation tips',
                ar: 'نصائح عملية لتنفيذ الذكاء الاصطناعي',
                he: 'טיפים ליישום AI מעשי',
              }[language.code]}</li>
              <li>{{
                en: 'Security, compliance, and best practices',
                ar: 'الأمان والامتثال وأفضل الممارسات',
                he: 'אבטחה, תאימות ונהלים מומלצים',
              }[language.code]}</li>
            </ul>
            <a href="/blog" className="inline-block font-bold text-lg px-8 py-3 rounded-full shadow transition text-white" style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #19e6f7 100%)'}}>{{
              en: 'Read More Insights',
              ar: 'اقرأ المزيد من الرؤى',
              he: 'קרא עוד תובנות',
            }[language.code]}</a>
          </div>
          {/* Right: 2x2 grid of cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-[#232323] shadow-2xl p-8 flex flex-col mb-0" style={{background: 'linear-gradient(0deg,rgb(57, 175, 186) 10%,rgb(21, 21, 21) 80%)'}}>
              <h3 className="text-lg font-bold text-white mb-2">{{
                en: 'How AI is Changing the Future of Work',
                ar: 'كيف يغير الذكاء الاصطناعي مستقبل العمل',
                he: 'איך AI משנה את עתיד העבודה',
              }[language.code]}</h3>
              <p className="text-[#bfc1be] mb-0">
                <div className="text-justify">{{
                  en: 'Explore the latest trends in AI-driven automation and what it means for businesses of all sizes.',
                  ar: 'استكشف أحدث الاتجاهات في الأتمتة المدفوعة بالذكاء الاصطناعي وما تعنيه للشركات من جميع الأحجام.',
                  he: 'גלו את הטרנדים האחרונים באוטומציה מבוססת AI ומה זה אומר לעסקים בכל הגדלים.',
                }[language.code]}</div>
              </p>
            </div>
            <div className="bg-[#232323]  shadow-2xl p-8 flex flex-col mb-0">
              <h3 className="text-lg font-bold text-white mb-2">{{
                en: '5 Ways to Secure Your Data with AI',
                ar: '5 طرق لتأمين بياناتك باستخدام الذكاء الاصطناعي',
                he: '5 דרכים לאבטח את הנתונים שלך עם AI',
              }[language.code]}</h3>
              <p className="text-[#bfc1be] mb-0">
                <div className="text-justify">{{
                  en: `Learn practical strategies for leveraging AI to enhance your organization's data security and compliance.`,
                  ar: 'تعلم استراتيجيات عملية للاستفادة من الذكاء الاصطناعي لتعزيز أمان بيانات مؤسستك والامتثال.',
                  he: 'למדו אסטרטגיות מעשיות לשימוש ב-AI לשיפור אבטחת הנתונים והעמידה בדרישות.',
                }[language.code]}</div>
              </p>
            </div>
            <div className="bg-[#232323]  shadow-2xl p-8 flex flex-col mb-0">
              <h3 className="text-lg font-bold text-white mb-2">{{
                en: 'AI Trends to Watch in 2024',
                ar: 'اتجاهات الذكاء الاصطناعي التي يجب مراقبتها في 2024',
                he: 'מגמות AI שכדאי לעקוב אחריהן ב-2024',
              }[language.code]}</h3>
              <p className="text-[#bfc1be] mb-0">
                <div className="text-justify">{{
                  en: 'Stay ahead of the curve with the latest trends and predictions in artificial intelligence.',
                  ar: 'ابق في المقدمة مع أحدث الاتجاهات والتوقعات في الذكاء الاصطناعي.',
                  he: 'הישארו מובילים עם הטרנדים והתחזיות האחרונות ב-AI.',
                }[language.code]}</div>
              </p>
            </div>
            <div className="bg-[#232323] shadow-2xl p-8 flex flex-col mb-0" style={{background: 'linear-gradient(0deg, #19e6f7 0%, #232323 80%)'}}>
              <h3 className="text-lg font-bold text-white mb-2">{{
                en: 'Getting Started with AI in Your Business',
                ar: 'البدء باستخدام الذكاء الاصطناعي في عملك',
                he: 'להתחיל עם AI בעסק שלך',
              }[language.code]}</h3>
              <p className="text-[#bfc1be] mb-0">
                <div className="text-justify">{{
                  en: 'A practical guide to implementing AI solutions and driving digital transformation.',
                  ar: 'دليل عملي لتنفيذ حلول الذكاء الاصطناعي ودفع التحول الرقمي.',
                  he: 'מדריך מעשי ליישום פתרונות AI והובלת טרנספורמציה דיגיטלית.',
                }[language.code]}</div>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      
      {/* Meet Our Experts */}
      
      
      <WebinarFeaturedList />

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`relative w-full max-w-md ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'} rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto`}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>

            {!submitSuccess ? (
              <>
                <h2 className="text-2xl font-bold text-center mb-6 text-[#19e6f7]">{{
                  en: 'Event Registration',
                  ar: 'تسجيل الفعالية',
                  he: 'הרשמה לאירוע',
                }[language.code]}</h2>
                {registrationData.event && (
                  <p className="text-center mb-6 text-sm text-gray-400">
                    {{
                      en: 'Registering for:',
                      ar: 'تسجيل لـ:',
                      he: 'נרשם ל:',
                    }[language.code]} <span className="font-semibold text-[#19e6f7]">{registrationData.event}</span>
                  </p>
                )}
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        {{
                          en: 'First Name *',
                          ar: 'الاسم الأول *',
                          he: 'שם פרטי *',
                        }[language.code]}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={registrationData.firstName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${
                          theme === 'dark' ? 'bg-[#333] text-white border-gray-600' : 'bg-white text-black'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        {{
                          en: 'Last Name *',
                          ar: 'اسم العائلة *',
                          he: 'שם משפחה *',
                        }[language.code]}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={registrationData.lastName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${
                          theme === 'dark' ? 'bg-[#333] text-white border-gray-600' : 'bg-white text-black'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      {{
                        en: 'Email *',
                        ar: 'البريد الإلكتروني *',
                        he: 'אימייל *',
                      }[language.code]}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={registrationData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${
                        theme === 'dark' ? 'bg-[#333] text-white border-gray-600' : 'bg-white text-black'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      {{
                        en: 'Phone',
                        ar: 'رقم الهاتف',
                        he: 'טלפון',
                      }[language.code]}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={registrationData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${
                        theme === 'dark' ? 'bg-[#333] text-white border-gray-600' : 'bg-white text-black'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#19e6f7] to-[#19bba6] text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? {
                      en: 'Submitting...',
                      ar: 'جارٍ الإرسال...',
                      he: 'שולח...',
                    }[language.code] : {
                      en: 'Register for Event',
                      ar: 'سجل في الفعالية',
                      he: 'הרשם לאירוע',
                    }[language.code]}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#19e6f7] mb-2">{{
                  en: 'Registration Successful!',
                  ar: 'تم التسجيل بنجاح!',
                  he: 'ההרשמה הצליחה!',
                }[language.code]}</h3>
                <p className="text-gray-400">
                  {{
                    en: `Thank you for registering. We'll send you a confirmation email with event details.`,
                    ar: 'شكرًا لتسجيلك. سنرسل لك بريدًا إلكترونيًا يحتوي على تفاصيل الفعالية.',
                    he: 'תודה שנרשמת. נשלח לך מייל אישור עם פרטי האירוע.',
                  }[language.code]}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Insights Blog */}
      
    </div>
  );
};

export default SecondHome;