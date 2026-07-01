import { LayoutGrid, Code, Settings } from "lucide-react";
import { useAppContext } from "../AppContext";
import { translations } from "../data/translations";

export function BottomNav() {
  const { activeTab, setActiveTab, language } = useAppContext();
  const t = translations[language];

  const navItems = [
    { id: "home", label: t.home, icon: LayoutGrid },
    { id: "editor", label: t.editor, icon: Code },
    { id: "profile", label: t.profile, icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 flex justify-around py-3 pb-6 z-50 transition-colors">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`flex flex-col items-center justify-center gap-1 w-20 transition-colors ${
              isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 dark:text-gray-500"
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
