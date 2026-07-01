export interface Topic {
  id: string;
  title: string;
  title_en?: string;
  title_hi?: string;
  content: string; // Markdown or HTML string
  content_en?: string;
  content_hi?: string;
  sandboxCode?: {
    html: string;
    css: string;
  };
  sandboxes?: {
    title?: string;
    title_en?: string;
    title_hi?: string;
    html: string;
    css: string;
  }[];
}

export interface Chapter {
  id: string;
  title: string;
  title_en?: string;
  title_hi?: string;
  description?: string;
  topics: Topic[];
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  question_en?: string;
  question_hi?: string;
  options: string[];
  options_en?: string[];
  options_hi?: string[];
  correctAnswerIndex: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  initialHtml: string;
  initialCss: string;
}

export interface CertificateData {
  name: string;
  fatherName: string;
  dob: string;
  address: string;
  state: string;
  pinCode: string;
  date: string;
}

export type TabType = "home" | "editor" | "profile";
export type HomeViewType = "main" | "chapters" | "topics" | "lesson" | "quiz" | "projects";
export type Language = "en" | "hi";
