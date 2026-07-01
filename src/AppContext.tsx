import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TabType, HomeViewType, Chapter, Topic, Language, CertificateData } from "./types";

interface AppState {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  
  homeView: HomeViewType;
  setHomeView: (view: HomeViewType) => void;
  
  selectedChapter: Chapter | null;
  setSelectedChapter: (chapter: Chapter | null) => void;
  
  selectedTopic: Topic | null;
  setSelectedTopic: (topic: Topic | null) => void;
  
  completedChapters: string[];
  completeChapter: (chapterId: string) => void;
  
  userName: string;
  setUserName: (name: string) => void;
  
  editorHtml: string;
  setEditorHtml: (html: string | ((prev: string) => string)) => void;
  editorCss: string;
  setEditorCss: (css: string | ((prev: string) => string)) => void;
  
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;

  language: Language;
  setLanguage: (lang: Language) => void;

  isCertificateGenerated: boolean;
  setIsCertificateGenerated: (val: boolean) => void;

  certificateData: CertificateData | null;
  setCertificateData: (data: CertificateData | null) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

const getStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Error reading localStorage", e);
  }
  return defaultValue;
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [homeView, setHomeView] = useState<HomeViewType>("main");
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [editorHtml, setEditorHtml] = useState("<!-- Write HTML here -->\n");
  const [editorCss, setEditorCss] = useState("/* Write CSS here */\n");

  const [completedChapters, setCompletedChapters] = useState<string[]>(() => getStorage("completedChapters", []));
  const [userName, setUserName] = useState(() => getStorage("userName", "Guest"));
  const [isDarkMode, setIsDarkMode] = useState(() => getStorage("isDarkMode", false));
  const [language, setLanguage] = useState<Language>(() => getStorage("language", "en"));
  const [isCertificateGenerated, setIsCertificateGenerated] = useState(() => getStorage("isCertificateGenerated", false));
  const [certificateData, setCertificateData] = useState<CertificateData | null>(() => getStorage("certificateData", null));

  useEffect(() => {
    localStorage.setItem("completedChapters", JSON.stringify(completedChapters));
  }, [completedChapters]);

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  useEffect(() => {
    localStorage.setItem("isCertificateGenerated", JSON.stringify(isCertificateGenerated));
  }, [isCertificateGenerated]);

  useEffect(() => {
    localStorage.setItem("certificateData", JSON.stringify(certificateData));
  }, [certificateData]);

  const completeChapter = (chapterId: string) => {
    if (!completedChapters.includes(chapterId)) {
      setCompletedChapters([...completedChapters, chapterId]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeTab, setActiveTab,
        homeView, setHomeView,
        selectedChapter, setSelectedChapter,
        selectedTopic, setSelectedTopic,
        completedChapters, completeChapter,
        userName, setUserName,
        editorHtml, setEditorHtml,
        editorCss, setEditorCss,
        isDarkMode, setIsDarkMode,
        language, setLanguage,
        isCertificateGenerated, setIsCertificateGenerated,
        certificateData, setCertificateData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
