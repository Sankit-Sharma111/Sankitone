import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";
import { useAppContext } from "../../AppContext";
import { translations } from "../../data/translations";

export function TopicList() {
  const { setHomeView, selectedChapter, setSelectedTopic, language } = useAppContext();
  const t = translations[language];

  if (!selectedChapter) {
    setHomeView("chapters");
    return null;
  }

  const handleTopicClick = (topic: any) => {
    setSelectedTopic(topic);
    setHomeView("lesson");
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-24 max-w-lg mx-auto transition-colors">
      <div className="bg-pink-500 rounded-b-[40px] p-6 pb-12 text-white shadow-lg shadow-pink-100 dark:shadow-none relative">
        <button 
          onClick={() => setHomeView("chapters")}
          className="bg-white/20 hover:bg-white/30 transition-colors w-10 h-10 rounded-full flex items-center justify-center mb-6"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
          {t.courseCurriculum}
        </div>
        <h1 className="text-3xl font-bold leading-tight">{language === 'en' ? selectedChapter.title_en : selectedChapter.title_hi}</h1>
      </div>

      <div className="px-5 mt-6 mb-4 flex items-center gap-2 text-slate-700 dark:text-slate-200 font-bold text-lg">
        <BookOpen size={20} />
        <h2>{t.chapterResources}</h2>
      </div>

      <div className="px-5 flex flex-col gap-3">
        {selectedChapter.topics.map((topic, index) => (
          <button
            key={topic.id}
            onClick={() => handleTopicClick(topic)}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4 text-left transition-transform active:scale-95"
          >
            <div className="bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen size={18} />
            </div>
            <div className="flex-1 font-bold text-slate-800 dark:text-slate-100 text-sm">
              {language === 'en' ? topic.title_en : topic.title_hi}
            </div>
            <div className="text-xs font-bold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30 px-3 py-1.5 rounded-full shrink-0">
              {t.open}
            </div>
          </button>
        ))}

        <button
          onClick={() => setHomeView("quiz")}
          className="mt-4 bg-pink-500 hover:bg-pink-400 text-white rounded-2xl p-4 font-bold shadow-md shadow-pink-200 dark:shadow-none flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <BookOpen size={20} />
          {t.testYourself}
        </button>
      </div>
    </div>
  );
}
