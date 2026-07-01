import { BookOpen, Globe } from "lucide-react";
import { useAppContext } from "../../AppContext";
import { translations } from "../../data/translations";

export function HomeMain() {
  const { setHomeView, language } = useAppContext();
  const t = translations[language];

  return (
    <div className="p-5 pb-24 max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 tracking-tight">Sankit Accademy</h1>
      
      {/* Premium Banner */}
      <div 
        className="w-full text-left bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg shadow-indigo-200 dark:shadow-none mb-8 relative overflow-hidden"
      >
        <div className="inline-block bg-white/20 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {t.premiumContent}
        </div>
        <h2 className="text-3xl font-bold">{t.learnCssTitle}</h2>
        {/* Subtle decorative circles */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -right-4 top-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 leading-tight">{t.startJourney}</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          onClick={() => setHomeView("chapters")}
          className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3 text-left transition-transform active:scale-95"
        >
          <div className="bg-indigo-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm">
            <BookOpen size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg">{t.learn}</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs">{t.cssLesson}</p>
          </div>
        </button>

        <button 
          onClick={() => setHomeView("projects")}
          className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3 text-left transition-transform active:scale-95"
        >
          <div className="bg-pink-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm">
            <Globe size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg">{t.exercise}</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs">{t.practiceProject}</p>
          </div>
        </button>
      </div>

      <a 
        href="https://mfirstweb.netlify.app" 
        target="_blank" 
        rel="noreferrer"
        className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4 transition-transform active:scale-95"
      >
        <div className="bg-emerald-100 dark:bg-emerald-900/50 w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-800 dark:text-slate-100">{t.studentCommunity}</h4>
          <p className="text-slate-500 dark:text-slate-400 text-xs">{t.joinUpdates}</p>
        </div>
        <div className="text-slate-300 dark:text-slate-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </a>
    </div>
  );
}
