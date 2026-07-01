import { useState } from "react";
import { Settings2, Award, Moon, Sun, Globe, ChevronRight } from "lucide-react";
import { useAppContext } from "../../AppContext";
import { courseData } from "../../data/courseData";
import { CertificateForm } from "./CertificateForm";
import { CertificateView } from "./CertificateView";
import { translations } from "../../data/translations";

export function ProfileTab() {
  const { 
    userName, setUserName, 
    completedChapters, 
    isDarkMode, setIsDarkMode,
    language, setLanguage,
    isCertificateGenerated
  } = useAppContext();
  const t = translations[language];
  
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);
  const [showCertForm, setShowCertForm] = useState(false);
  const [showCertView, setShowCertView] = useState(false);

  const totalChapters = courseData.length;
  const completedCount = completedChapters.length;
  const progressPercent = Math.round((completedCount / totalChapters) * 100) || 0;

  const handleSave = () => {
    if (editName.trim()) {
      setUserName(editName.trim());
    }
    setIsEditing(false);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  if (showCertForm) {
    return <CertificateForm onBack={() => setShowCertForm(false)} />;
  }

  if (showCertView) {
    return <CertificateView onBack={() => setShowCertView(false)} />;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24 max-w-lg mx-auto p-5 dark:bg-slate-900 transition-colors">
      {/* Profile Card */}
      <div className="bg-[#1a1c2e] rounded-3xl p-6 text-white mb-6 relative overflow-hidden shadow-xl shadow-indigo-900/20 dark:shadow-none">
        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="flex items-center gap-4 relative z-10 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-indigo-500 flex items-center justify-center text-2xl font-bold border-2 border-white/20 shrink-0">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            {isEditing ? (
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white w-full text-lg"
                  autoFocus
                />
                <button onClick={handleSave} className="bg-indigo-500 hover:bg-indigo-400 px-3 rounded font-bold text-sm transition-colors">{t.save}</button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold truncate">{userName}</h2>
                  <button onClick={() => setIsEditing(true)} className="text-indigo-300 text-xs hover:text-white shrink-0">{t.edit}</button>
                </div>
                <p className="text-slate-400 text-sm">{t.student}</p>
              </>
            )}
          </div>
        </div>

        {/* Progress Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative z-10 backdrop-blur-sm">
          <div className="flex justify-between text-sm font-bold mb-3">
            <span className="text-slate-300">{t.courseProgress}</span>
            <span className="text-emerald-400">{progressPercent}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-emerald-400 rounded-full transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400 font-medium">
            <span>{completedCount} {t.completedChapters}</span>
            <span>{totalChapters - completedCount} {t.remaining}</span>
          </div>
        </div>
      </div>

      {/* Certificate Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 mb-6 flex flex-col items-center text-center transition-colors">
        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-slate-400 dark:text-slate-300 mb-4 transition-colors">
          <Award size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{t.certificate}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{t.completeToUnlock}</p>
        
        {progressPercent === 100 ? (
          isCertificateGenerated ? (
            <button 
              onClick={() => setShowCertView(true)}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-2xl shadow-md transition-colors"
            >
              {t.viewCertificate}
            </button>
          ) : (
            <button 
              onClick={() => setShowCertForm(true)}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 rounded-2xl shadow-md shadow-emerald-200 dark:shadow-none transition-colors"
            >
              {t.claimCertificate}
            </button>
          )
        ) : (
          <button disabled className="w-full bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 font-bold py-3 rounded-2xl cursor-not-allowed transition-colors">
            {t.certificateLocked}
          </button>
        )}
      </div>

      {/* Settings Options */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-2 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col transition-colors">
        <div className="flex items-center justify-between p-4 border-b border-slate-50 dark:border-slate-700 transition-colors">
          <div className="flex items-center gap-3">
            <Sun size={20} className="text-amber-500" />
            <span className="font-bold text-slate-700 dark:text-slate-200">
              {t.toggleDarkMode}
            </span>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${isDarkMode ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-600'}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        </div>
        
        <button 
          onClick={handleLanguageToggle}
          className="flex items-center justify-between p-4 active:bg-slate-50 dark:active:bg-slate-700 rounded-2xl transition-colors"
        >
          <div className="flex items-center gap-3">
            <Globe size={20} className="text-emerald-500" />
            <span className="font-bold text-slate-700 dark:text-slate-200">
              {t.changeLanguage}
            </span>
          </div>
          <ChevronRight size={20} className="text-slate-300 dark:text-slate-500" />
        </button>
      </div>
    </div>
  );
}
