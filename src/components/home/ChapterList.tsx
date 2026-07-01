import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useAppContext } from "../../AppContext";
import { courseData } from "../../data/courseData";
import { translations } from "../../data/translations";

export function ChapterList() {
  const { setHomeView, setSelectedChapter, completedChapters, language } = useAppContext();
  const t = translations[language];

  const handleChapterClick = (chapter: any) => {
    setSelectedChapter(chapter);
    setHomeView("topics");
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-24 max-w-lg mx-auto transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-b-[40px] p-6 pb-12 text-white shadow-lg shadow-indigo-100 dark:shadow-none relative">
        <button 
          onClick={() => setHomeView("main")}
          className="bg-white/20 hover:bg-white/30 transition-colors w-10 h-10 rounded-full flex items-center justify-center mb-6"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-4xl font-bold mb-2 tracking-tight">{t.learnCssTitle}</h1>
        <p className="text-white/80 text-sm font-medium">{t.chooseChapter}</p>
      </div>

      <div className="px-5 -mt-6 flex flex-col gap-4 relative z-10">
        {courseData.map((chapter, index) => {
          const isCompleted = completedChapters.includes(chapter.id);
          return (
            <button
              key={chapter.id}
              onClick={() => handleChapterClick(chapter)}
              className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4 text-left transition-transform active:scale-95"
            >
              <div className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight pr-2">
                {language === 'en' ? chapter.title_en : chapter.title_hi}
              </div>
              {isCompleted ? (
                <CheckCircle2 className="text-green-500 shrink-0" size={24} />
              ) : (
                <div className="text-slate-300 dark:text-slate-500 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
