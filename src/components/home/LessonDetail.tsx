import { ArrowLeft, Code } from "lucide-react";
import { useAppContext } from "../../AppContext";
import Markdown from "react-markdown";
import { translations } from "../../data/translations";

export function LessonDetail() {
  const { setHomeView, selectedTopic, setActiveTab, setEditorHtml, setEditorCss, language } = useAppContext();
  const t = translations[language];

  if (!selectedTopic) {
    setHomeView("topics");
    return null;
  }

  const handleLoadCode = () => {
    if (selectedTopic.sandboxCode) {
      setEditorHtml(selectedTopic.sandboxCode.html);
      setEditorCss(selectedTopic.sandboxCode.css);
      setActiveTab("editor");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen pb-24 max-w-lg mx-auto flex flex-col transition-colors">
      <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 z-10 px-4 py-4 flex items-center gap-3 transition-colors">
        <button 
          onClick={() => setHomeView("topics")}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft size={20} className="text-slate-700 dark:text-slate-300" />
        </button>
        <h1 className="font-bold text-slate-800 dark:text-white flex-1 truncate">{language === 'en' ? selectedTopic.title_en : selectedTopic.title_hi}</h1>
      </div>

      <div className="p-5 flex-1 overflow-auto">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 prose-code:text-pink-600 prose-code:bg-pink-50 dark:prose-code:bg-pink-900/30 prose-code:px-1 prose-code:rounded prose-pre:bg-slate-800 prose-pre:text-slate-50">
          <Markdown>{language === 'en' ? selectedTopic.content_en : selectedTopic.content_hi}</Markdown>
        </div>
      </div>

      {selectedTopic.sandboxCode && (
        <div className="px-5 pb-5 bg-white dark:bg-slate-900">
          <div className="bg-[#111827] rounded-3xl p-5 mb-4 shadow-sm border border-slate-800">
            <div className="text-slate-400 text-xs font-bold tracking-widest mb-3 uppercase">CSS INTERACTIVE</div>
            <pre className="text-slate-50 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
              {selectedTopic.sandboxCode.css}
            </pre>
          </div>
          <button
            onClick={handleLoadCode}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl p-4 font-bold shadow-md shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Code size={20} />
            {t.openInEditor || "Load Code Into Editor"}
          </button>
        </div>
      )}
    </div>
  );
}
