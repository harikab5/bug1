import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaComments, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import contacthero from '../assets/contacthero.mp4'; 
import formImg from '../assets/form.jpeg';
import help1 from '../assets/help1.jpeg';
import help2 from '../assets/help2.jpeg';
import help3 from '../assets/help3.jpeg';
import { useTheme } from "../context/ThemeContext";


import { useLanguage } from "../context/LanguageContext";
const translations = {
  en: {
    contactUs: "Contact Us",
    heroText: "Need an expert? You are more than welcomed to leave your contact info and we will be in touch shortly.",
    generalInquiries: "General Inquiries",
    enterDetails: "Enter your contact details and message below",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourSubject: "Your Subject",
    message: "Message",
    privacy: "By submitting this form, you agree to the ",
    privacyPolicy: "Privacy Policy",
    sendMessage: "Send Message",
    thankYou: "Thank you! Your message has been sent.",
    faqTitle: "Frequently Asked Questions",
    helpTitle: "How can we help?",
    visitUs: "VISIT US",
    visitUsDesc: "Visit our AI innovation center to see cutting-edge tools and discuss your AI transformation journey with our experts",
    visitUsAddr: "2 Elizabeth St. London, UK",
    callUs: "CALL US",
    callUsDesc: "Speak directly with our AI specialists to get personalized solutions for your business automation",
    callUsPhone: "+44 (0) 203 116 7711",
    contactUsCard: "CONTACT US",
    contactUsDesc: "Send us your AI project requirements and we'll respond with customized solutions and implementation strategies",
    contactUsSite: "stackly.com",
    findUs: "Find Us",
    newsletterTitle: "Subscribe to our AI Newsletter",
    newsletterDesc: "Get the latest updates, AI trends, and exclusive offers from our team. No spam, just smart insights!",
    newsletterPlaceholder: "Your email address",
    subscribe: "Subscribe",
    newsletterThankYou: "Thank you for subscribing!"
  },
  ar: {
    heroText: "هل تحتاج إلى خبير؟ يمكنك ترك معلومات الاتصال الخاصة بك وسنتواصل معك قريبًا.",
    generalInquiries: "الاستفسارات العامة",
    enterDetails: "أدخل تفاصيل الاتصال والرسالة أدناه",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    yourSubject: "الموضوع",
    message: "رسالتك",
    privacy: "بتقديم هذا النموذج، فإنك توافق على ",
    privacyPolicy: "سياسة الخصوصية",
    sendMessage: "إرسال الرسالة",
    thankYou: "شكرًا لك! تم إرسال رسالتك.",
    faqTitle: "الأسئلة الشائعة",
    helpTitle: "كيف يمكننا المساعدة؟",
    visitUs: "زرنا",
    visitUsDesc: "قم بزيارة مركز الابتكار الخاص بنا لمشاهدة أحدث الأدوات ومناقشة رحلة التحول بالذكاء الاصطناعي مع خبرائنا",
    visitUsAddr: "2 إليزابيث ستريت، لندن، المملكة المتحدة",
    callUs: "اتصل بنا",
    callUsDesc: "تحدث مباشرة مع متخصصي الذكاء الاصطناعي لدينا للحصول على حلول مخصصة لأتمتة أعمالك",
    callUsPhone: "+44 (0) 203 116 7711",
    contactUsCard: "تواصل معنا",
    contactUsDesc: "أرسل متطلبات مشروع الذكاء الاصطناعي الخاص بك وسنرد عليك بحلول مخصصة واستراتيجيات التنفيذ",
    contactUsSite: "stackly.com",
    findUs: "اعثر علينا",
    newsletterTitle: "اشترك في نشرتنا الإخبارية للذكاء الاصطناعي",
    newsletterDesc: "احصل على آخر التحديثات واتجاهات الذكاء الاصطناعي والعروض الحصرية من فريقنا. لا سبام، فقط رؤى ذكية!",
    newsletterPlaceholder: "بريدك الإلكتروني",
    subscribe: "اشترك",
    newsletterThankYou: "شكرًا لاشتراكك!"
  },
  he: {
    heroText: "צריך מומחה? השאר את פרטיך וניצור איתך קשר בקרוב.",
    generalInquiries: "פניות כלליות",
    enterDetails: "הזן את פרטי הקשר וההודעה שלך למטה",
    yourName: "השם שלך",
    yourEmail: "האימייל שלך",
    yourSubject: "נושא",
    message: "הודעה",
    privacy: "על ידי שליחת טופס זה, אתה מסכים ל- ",
    privacyPolicy: "מדיניות פרטיות",
    sendMessage: "שלח הודעה",
    thankYou: "תודה! ההודעה שלך נשלחה.",
    faqTitle: "שאלות נפוצות",
    helpTitle: "איך נוכל לעזור?",
    visitUs: "בקר אותנו",
    visitUsDesc: "בקר במרכז החדשנות שלנו כדי לראות כלים מתקדמים ולדון במסע ה-AI שלך עם המומחים שלנו",
    visitUsAddr: "2 Elizabeth St. London, UK",
    callUs: "התקשר אלינו",
    callUsDesc: "שוחח ישירות עם מומחי ה-AI שלנו לקבלת פתרונות מותאמים אישית לאוטומציה עסקית",
    callUsPhone: "+44 (0) 203 116 7711",
    contactUsCard: "צור קשר",
    contactUsDesc: "שלח לנו את דרישות פרויקט ה-AI שלך ונשיב עם פתרונות מותאמים ואסטרטגיות יישום",
    contactUsSite: "stackly.com",
    findUs: "מצא אותנו",
    newsletterTitle: "הירשם לניוזלטר ה-AI שלנו",
    newsletterDesc: "קבל עדכונים אחרונים, מגמות AI והצעות בלעדיות מהצוות שלנו. אין ספאם, רק תובנות חכמות!",
    newsletterPlaceholder: "האימייל שלך",
    subscribe: "הירשם",
    newsletterThankYou: "תודה שנרשמת!"
  }
};

const faqsTranslations = {
  en: [
    {
      question: 'What services does your AI platform offer?',
      answer: 'We offer AI chatbots, workflow automation, computer vision, content generation, data analysis, NLP, and more. Visit our Services page for details.'
    },
    {
      question: 'Do you provide technical support?',
      answer: 'Yes! Our support team is available to help with onboarding, troubleshooting, and ongoing maintenance for all our AI tools.'
    },
    {
      question: 'Is my data secure with your platform?',
      answer: 'Absolutely. We use enterprise-grade security, encryption, and compliance best practices to keep your data safe.'
    },
    {
      question: 'Can I integrate your AI tools with my existing software?',
      answer: 'Yes, our solutions are designed for easy integration with popular platforms and custom systems via APIs.'
    },
    {
      question: 'Do you offer a free trial or demo?',
      answer: 'We offer demos and limited free trials for most of our AI tools. Contact us to schedule a personalized demo.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply fill out the contact form above or reach out to our team. We\'ll guide you through the next steps.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on your specific needs and requirements. Contact our sales team for a customized quote tailored to your business.'
    },
  ],
  ar: [
    {
      question: 'ما هي الخدمات التي تقدمها منصة الذكاء الاصطناعي الخاصة بكم؟',
      answer: 'نقدم روبوتات الدردشة، أتمتة سير العمل، الرؤية الحاسوبية، إنشاء المحتوى، تحليل البيانات، معالجة اللغة الطبيعية، والمزيد. زر صفحة الخدمات لمزيد من التفاصيل.'
    },
    {
      question: 'كيف يمكنني الحصول على حل ذكاء اصطناعي مخصص لنموذج أعمالي؟',
      answer: 'اتصل بنا باستخدام النموذج أعلاه أو اتصل بفريق المبيعات لدينا. سنناقش متطلباتك ونقترح حلاً مخصصًا.'
    },
    {
      question: 'هل تقدمون دعمًا فنيًا؟',
      answer: 'نعم! فريق الدعم لدينا متاح للمساعدة في الإعداد، وحل المشكلات، والصيانة المستمرة لجميع أدوات الذكاء الاصطناعي لدينا.'
    },
    {
      question: 'هل بياناتي آمنة مع منصتكم؟',
      answer: 'بالتأكيد. نستخدم أمانًا على مستوى المؤسسات، وتشفيرًا، وأفضل ممارسات الامتثال للحفاظ على بياناتك آمنة.'
    },
    {
      question: 'هل يمكنني دمج أدوات الذكاء الاصطناعي الخاصة بكم مع برامجي الحالية؟',
      answer: 'نعم، حلولنا مصممة للدمج السهل مع المنصات الشائعة والأنظمة المخصصة عبر واجهات برمجة التطبيقات.'
    },
    {
      question: 'هل تقدمون تجربة مجانية أو عرضًا توضيحيًا؟',
      answer: 'نقدم عروضًا توضيحية وتجارب مجانية محدودة لمعظم أدوات الذكاء الاصطناعي لدينا. اتصل بنا لتحديد موعد عرض شخصي.'
    },
    {
      question: 'كيف أبدأ؟',
      answer: 'ما عليك سوى ملء نموذج الاتصال أعلاه أو التواصل مع فريقنا. سنرشدك خلال الخطوات التالية.'
    },
    {
      question: 'ما هو هيكل التسعير الخاص بكم؟',
      answer: 'تختلف أسعارنا بناءً على احتياجاتك ومتطلباتك المحددة. اتصل بفريق المبيعات لدينا للحصول على عرض مخصص.'
    },
  ],
  he: [
    {
      question: 'אילו שירותים מציעה פלטפורמת ה-AI שלכם?',
      answer: 'אנו מציעים צ\'אטבוטים, אוטומציה של תהליכים, ראייה ממוחשבת, יצירת תוכן, ניתוח נתונים, עיבוד שפה טבעית ועוד. בקר בדף השירותים לפרטים.'
    },
    {
      question: 'איך אפשר לקבל פתרון AI מותאם אישית לעסק שלי?',
      answer: 'צור קשר באמצעות הטופס למעלה או התקשר לצוות המכירות שלנו. נדון בדרישותיך ונציע פתרון מותאם.'
    },
    {
      question: 'האם אתם מספקים תמיכה טכנית?',
      answer: 'כן! צוות התמיכה שלנו זמין לעזור בהטמעה, פתרון בעיות ותחזוקה שוטפת לכלי ה-AI שלנו.'
    },
    {
      question: 'האם הנתונים שלי בטוחים אצלכם?',
      answer: 'בהחלט. אנו משתמשים באבטחה ברמה ארגונית, הצפנה ונהלי תאימות לשמירה על בטיחות הנתונים שלך.'
    },
    {
      question: 'האם ניתן לשלב את כלי ה-AI שלכם עם התוכנה הקיימת שלי?',
      answer: 'כן, הפתרונות שלנו נועדו להשתלב בקלות עם פלטפורמות פופולריות ומערכות מותאמות אישית באמצעות API.'
    },
    {
      question: 'האם אתם מציעים ניסיון חינם או הדגמה?',
      answer: 'אנו מציעים הדגמות וניסיונות חינם מוגבלים לרוב כלי ה-AI שלנו. צור קשר לתיאום הדגמה אישית.'
    },
    {
      question: 'איך מתחילים?',
      answer: 'פשוט מלא את טופס יצירת הקשר למעלה או פנה לצוות שלנו. נלווה אותך בשלבים הבאים.'
    },
    {
      question: 'מה מבנה התמחור שלכם?',
      answer: 'התמחור שלנו משתנה בהתאם לצרכים ולדרישות שלך. צור קשר עם צוות המכירות לקבלת הצעת מחיר מותאמת.'
    },
  ]
};

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  // Query section state
  const [askQuery, setAskQuery] = useState('');
  const [askQuerySent, setAskQuerySent] = useState(false);
  // Newsletter section state
  const [newsletter, setNewsletter] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);
  const { theme } = useTheme();
  const { language, setLanguage, languages } = useLanguage();

  const handleSupportClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Query section handlers
  const handleAskQueryChange = (e) => setAskQuery(e.target.value);
  const handleAskQuerySubmit = (e) => {
    e.preventDefault();
    setAskQuerySent(true);
    setAskQuery('');
    setTimeout(() => setAskQuerySent(false), 4000);
  };
  // Newsletter section handlers
  const handleNewsletterChange = (e) => setNewsletter(e.target.value);
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSent(true);
    setNewsletter('');
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  // Helper to get current translations
  const t = translations[language.code];
  const faqs = faqsTranslations[language.code];

  return (
    <div className="w-full flex flex-col" style={{background: '#111211', minHeight: '100vh'}} dir={language.dir} lang={language.code}>
      {/* Hero Section with Background Video */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 bg-[#111211] overflow-hidden" style={{height: '100vh'}}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={contacthero} type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#111211] bg-opacity-70 z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide">
            <span className="text-[#bfc1be]">{t.contactUs}</span>
          </h1>
          <p className="text-white text-center text-lg max-w-2xl mx-auto">
            <div className="text-center">
              {t.heroText}
            </div>
          </p>
        </div>
      </section>

      {/* Background Section with Gradient */}
      <section className="w-full" style={{background: '#000000'}}>
        {/* Modern Contact Form Section */}
        <section ref={formRef} className="w-full flex flex-col md:flex-row shadow-xl overflow-hidden" style={{background: '#000000'}}>
          {/* Left Column - Image */}
          <div className={`md:w-1/2 w-full flex items-start justify-center p-0 pt-8 md:pt-12 ${theme === 'dark' ? 'bg-transparent' : 'bg-white'}`}>
            <img src={formImg} loading="lazy" alt="Contact Visual" className="object-cover w-full rounded-none md:rounded-r-2xl" style={{maxHeight: '700px'}} />
          </div>
          {/* Right Column - Form */}
          <div className={`md:w-1/2 w-full flex flex-col justify-start p-8 md:p-12 ${theme === 'dark' ? '' : 'bg-white'}`}>
            <h2 className={`text-3xl font-bold mb-2 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.generalInquiries}</h2>
            <p className={`text-center mb-6 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <div className="text-justify">{t.enterDetails}</div>
            </p>
            <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
              <div>
                <label className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.yourName}</label>
                <input 
                  type="text" 
                  placeholder={t.yourName} 
                  className="w-full border border-[#8e878a] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] focus:border-[#04D9FF] text-[#111211]" 
                  required 
                />
              </div>
              <div>
                <label className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.yourEmail}</label>
                <input 
                  type="email" 
                  placeholder={t.yourEmail} 
                  className="w-full border border-[#8e878a] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] focus:border-[#04D9FF] text-[#111211]" 
                  required 
                />
              </div>
              <div>
                <label className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.yourSubject}</label>
                <input 
                  type="text" 
                  placeholder={t.yourSubject} 
                  className="w-full border border-[#8e878a] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] focus:border-[#04D9FF] text-[#111211]" 
                  required 
                />
              </div>
              <div>
                <label className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.message}</label>
                <textarea 
                  placeholder={t.message} 
                  className="w-full border border-[#8e878a] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] focus:border-[#04D9FF] text-[#111211] resize-none" 
                  rows={4} 
                  required 
                />
              </div>
              <div className="flex items-start gap-2 mt-2">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mt-1 w-4 h-4 text-[#04D9FF] border-[#8e878a] rounded focus:ring-[#04D9FF] focus:ring-2" 
                  required 
                />
                <label htmlFor="privacy" className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.privacy}<a href="#" className="text-[#04D9FF] underline hover:text-[#27bdb5]">{t.privacyPolicy}</a></label>
              </div>
              <button 
                type="submit" 
                className="mt-2 bg-[#04D9FF] hover:bg-[#27bdb5] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                {t.sendMessage}
              </button>
            </form>
            {submitted && (
              <div className="bg-[#04D9FF] bg-opacity-20 text-[#12716c] px-4 py-2 rounded mt-4 text-center font-semibold transition-all">
                {t.thankYou}
              </div>
            )}
          </div>
        </section>
      </section>

      {/* FAQ Section: always use #04D9FF as background in both themes */}
      <section className="w-full py-20" style={{background: '#04D9FF'}}>
        <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.faqTitle}</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-4">
          {/* Left Column: FAQ Items */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            {faqs.slice(0, 3).map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none transform transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transform transition-all duration-200 hover:scale-110" style={{background: '#04D9FF'}}>
                    {openIndex === idx ? (
                      <span className="text-white font-bold text-lg transform transition-transform duration-200">-</span>
                    ) : (
                      <span className="text-white font-bold text-lg transform transition-transform duration-200">+</span>
                    )}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`} style={{transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'}}>
                  <div className={`mt-4 pt-4 border-t transform transition-transform duration-500 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}>
                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right Column: FAQ Items */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            {faqs.slice(3, 6).map((faq, idx) => (
              <motion.div
                key={idx + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
                className={`rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none transform transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => setOpenIndex(openIndex === idx + 3 ? null : idx + 3)}
                >
                  <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transform transition-all duration-200 hover:scale-110" style={{background: '#04D9FF'}}>
                    {openIndex === idx + 3 ? (
                      <span className="text-white font-bold text-lg transform transition-transform duration-200">-</span>
                    ) : (
                      <span className="text-white font-bold text-lg transform transition-transform duration-200">+</span>
                    )}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx + 3 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`} style={{transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'}}>
                  <div className={`mt-4 pt-4 border-t transform transition-transform duration-500 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}>
                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How can we help? section: white bg/black text in white theme, card images white bg in white theme */}
      <section className={`w-full py-16 ${theme === 'dark' ? '' : 'bg-white'}`} style={theme === 'dark' ? {background: '#111211'} : {}}>
        <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.helpTitle}</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Visit Us */}
          <div className={`flex flex-col items-center text-center p-8 border-r md:border-r md:border-[#222] last:border-none ${theme === 'dark' ? '' : 'bg-white'}`}>
            <div className={`w-14 h-14 mb-4 object-contain rounded-full flex items-center justify-center ${theme === 'dark' ? '' : 'bg-white'}`}>
              <img src={help1} loading="lazy" alt="Visit Us" className="w-14 h-14 object-contain rounded-lg" />
            </div>
            <h3 className="text-lg font-bold mb-2 tracking-wider" style={{color: '#04D9FF'}}>{t.visitUs}</h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <div className="text-justify">{t.visitUsDesc}</div>
            </p>
            <p className={`font-bold ${theme === 'dark' ? '' : 'text-black'}`} style={theme === 'dark' ? {color: '#04D9FF'} : {}}>{t.visitUsAddr}</p>
          </div>
          {/* Call Us */}
          <div className={`flex flex-col items-center text-center p-8 border-r md:border-r md:border-[#222] last:border-none ${theme === 'dark' ? '' : 'bg-white'}`}>
            <div className={`w-14 h-14 mb-4 object-contain rounded-full flex items-center justify-center ${theme === 'dark' ? '' : 'bg-white'}`}>
              <img src={help2} loading="lazy" alt="Call Us" className="w-14 h-14 object-contain rounded-lg" />
            </div>
            <h3 className="text-lg font-bold mb-2 tracking-wider" style={{color: '#04D9FF'}}>{t.callUs}</h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <div className="text-justify">{t.callUsDesc}</div>
            </p>
            <p className={`font-bold ${theme === 'dark' ? '' : 'text-black'}`} style={theme === 'dark' ? {color: '#04D9FF'} : {}}>{t.callUsPhone}</p>
          </div>
          {/* Contact Us */}
          <div className={`flex flex-col items-center text-center p-8 ${theme === 'dark' ? '' : 'bg-white'}`}>
            <div className={`w-14 h-14 mb-4 object-contain rounded-full flex items-center justify-center ${theme === 'dark' ? '' : 'bg-white'}`}>
              <img src={help3} loading="lazy" alt="Contact Us" className="w-14 h-14 object-contain rounded-lg" />
            </div>
            <h3 className="text-lg font-bold mb-2 tracking-wider" style={{color: '#04D9FF'}}>{t.contactUsCard}</h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <div className="text-justify">{t.contactUsDesc}</div>
            </p>
            <p className={`font-bold ${theme === 'dark' ? '' : 'text-black'}`} style={theme === 'dark' ? {color: '#04D9FF'} : {}}>{t.contactUsSite}</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full pt-8 pb-0" style={{background: '#04D9FF', margin: 0}}>
        <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{t.findUs}</h2>
        <div className="w-full" style={{height: '60vh'}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5!2d31.2175!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMTMnMDMuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
            width="100%"
            height="100%"
            style={{border: 0, width: '100%', height: '100%', display: 'block'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </section>

      {/* Newsletter section: white bg/black text in white theme */}
      <section className={`w-full py-12 ${theme === 'dark' ? '' : 'bg-white'}`} style={theme === 'dark' ? {background: '#111211'} : {}}>
        <section className={`w-full rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>{t.newsletterTitle}</h2>
          <p className={`mb-4 text-center ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
            <div className="text-justify">{t.newsletterDesc}</div>
          </p>
          <form className={`w-full flex flex-col sm:flex-row gap-4 items-center justify-center ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`} onSubmit={handleNewsletterSubmit}>
            <input type="email" className={`flex-1 border border-[#8e878a] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] ${theme === 'dark' ? 'bg-[#111211] text-[#bfc1be]' : 'bg-white text-black'}`} placeholder={t.newsletterPlaceholder} value={newsletter} onChange={handleNewsletterChange} required />
            <button type="submit" className="bg-[#04D9FF] hover:bg-[#27bdb5] text-white font-bold px-6 py-2 rounded-lg shadow transition-all">{t.subscribe}</button>
          </form>
          {newsletterSent && (
            <div className={`bg-[#04D9FF] bg-opacity-20 px-4 py-2 rounded mt-4 text-center font-semibold transition-all ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>{t.newsletterThankYou}</div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Contact;