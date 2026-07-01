import { ArrowLeft } from "lucide-react";
import { useAppContext } from "../../AppContext";
import { projectsData } from "../../data/projectsData";
import { translations } from "../../data/translations";

export function ProjectList() {
  const { setHomeView, setEditorHtml, setEditorCss, setActiveTab, language } = useAppContext();
  const t = translations[language];

  const handleOpenProject = (project: any) => {
    setEditorHtml(project.initialHtml);
    setEditorCss(project.initialCss);
    setActiveTab("editor");
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-24 max-w-lg mx-auto transition-colors">
      <div className="p-6 pb-2">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => setHomeView("main")}
            className="w-10 h-10 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-700 dark:text-slate-300" />
          </button>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white">{t.beginnerProjects}</h1>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
          {t.projectsDesc}
        </p>
      </div>

      <div className="px-5 flex flex-col gap-5">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col transition-colors">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
            <button
              onClick={() => handleOpenProject(project)}
              className="bg-pink-500 hover:bg-pink-400 text-white rounded-2xl py-3 font-bold shadow-md shadow-pink-200 dark:shadow-none transition-transform active:scale-95 w-full"
            >
              {t.openInEditor}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
