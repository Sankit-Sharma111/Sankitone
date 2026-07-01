/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppProvider, useAppContext } from "./AppContext";
import { BottomNav } from "./components/BottomNav";
import { HomeMain } from "./components/home/HomeMain";
import { ChapterList } from "./components/home/ChapterList";
import { TopicList } from "./components/home/TopicList";
import { LessonDetail } from "./components/home/LessonDetail";
import { QuizScreen } from "./components/home/QuizScreen";
import { ProjectList } from "./components/home/ProjectList";
import { EditorTab } from "./components/editor/EditorTab";
import { ProfileTab } from "./components/profile/ProfileTab";

function MainContent() {
  const { activeTab, homeView } = useAppContext();

  if (activeTab === "editor") return <EditorTab />;
  if (activeTab === "profile") return <ProfileTab />;

  // Home Tab Routing
  switch (homeView) {
    case "chapters": return <ChapterList />;
    case "topics": return <TopicList />;
    case "lesson": return <LessonDetail />;
    case "quiz": return <QuizScreen />;
    case "projects": return <ProjectList />;
    case "main":
    default:
      return <HomeMain />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <div className="font-sans antialiased text-slate-900 dark:text-slate-100 bg-black min-h-screen">
        <div className="max-w-lg mx-auto bg-slate-50 dark:bg-slate-900 min-h-screen relative shadow-2xl overflow-hidden transition-colors">
          <MainContent />
          <BottomNav />
        </div>
      </div>
    </AppProvider>
  );
}
