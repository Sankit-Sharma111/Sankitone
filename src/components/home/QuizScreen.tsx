import { useState } from "react";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { useAppContext } from "../../AppContext";
import { translations } from "../../data/translations";

export function QuizScreen() {
  const { setHomeView, selectedChapter, completeChapter, language } = useAppContext();
  const t = translations[language];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  if (!selectedChapter || !selectedChapter.quiz) {
    setHomeView("topics");
    return null;
  }

  const quiz = selectedChapter.quiz;
  const currentQuestion = quiz[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      const passed = (score + (selectedOption === currentQuestion.correctAnswerIndex ? 1 : 0)) >= (quiz.length * 0.7);
      if (passed) {
        completeChapter(selectedChapter.id);
      }
    }
  };

  const passed = score >= quiz.length * 0.7;

  if (showResults) {
    return (
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-24 max-w-lg mx-auto flex flex-col items-center justify-center p-6 text-center transition-colors">
        {passed ? (
          <CheckCircle2 size={80} className="text-green-500 dark:text-green-400 mb-6" />
        ) : (
          <XCircle size={80} className="text-red-500 dark:text-red-400 mb-6" />
        )}
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          {passed ? "Congratulations!" : "Keep Practicing"}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
          You scored <span className="font-bold text-slate-800 dark:text-slate-200">{score}</span> out of {quiz.length} ({(score/quiz.length)*100}%).
          {passed ? " You have completed this chapter." : " You need 70% to pass."}
        </p>
        <button
          onClick={() => setHomeView("chapters")}
          className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl p-4 font-bold shadow-md w-full max-w-xs transition-transform active:scale-95"
        >
          {t.back || "Back to Chapters"}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-24 max-w-lg mx-auto flex flex-col transition-colors">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 px-4 py-4 flex items-center gap-3 transition-colors">
        <button 
          onClick={() => setHomeView("topics")}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft size={20} className="text-slate-700 dark:text-slate-300" />
        </button>
        <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-500 h-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex) / quiz.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
          {currentQuestionIndex + 1}/{quiz.length}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 leading-tight">
          {language === 'en' ? currentQuestion.question_en : currentQuestion.question_hi}
        </h2>

        <div className="flex flex-col gap-3 flex-1">
          {(language === 'en' ? currentQuestion.options_en : currentQuestion.options_hi).map((option, index) => {
            let btnClass = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200";
            if (isAnswered) {
              if (index === currentQuestion.correctAnswerIndex) {
                btnClass = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-400";
              } else if (index === selectedOption) {
                btnClass = "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-400";
              }
            } else if (index === selectedOption) {
               btnClass = "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 text-indigo-800 dark:text-indigo-400";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
                className={`text-left p-4 rounded-2xl border-2 font-medium transition-all ${btnClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <button
            onClick={handleNext}
            className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl p-4 font-bold shadow-md dark:shadow-none w-full transition-transform active:scale-95"
          >
            {currentQuestionIndex < quiz.length - 1 ? "Next Question" : "Finish Test"}
          </button>
        )}
      </div>
    </div>
  );
}
