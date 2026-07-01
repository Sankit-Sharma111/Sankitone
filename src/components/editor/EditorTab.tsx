import { useState, useRef, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { Play, RotateCcw, Sparkles } from "lucide-react";
import { useAppContext } from "../../AppContext";

type FileType = "html" | "css";

export function EditorTab() {
  const { editorHtml, setEditorHtml, editorCss, setEditorCss, setActiveTab } = useAppContext();
  const [activeFile, setActiveFile] = useState<FileType>("html");
  const [showPreview, setShowPreview] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const htmlExtensions = [html()];
  const cssExtensions = [css()];

  const updatePreview = () => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>${editorCss}</style>
            </head>
            <body>${editorHtml}</body>
          </html>
        `);
        doc.close();
      }
    }
  };

  useEffect(() => {
    if (showPreview) {
      updatePreview();
    }
  }, [showPreview, editorHtml, editorCss]);

  const insertSnippet = (snippet: string) => {
    if (activeFile === "html") {
      setEditorHtml(prev => prev + snippet);
    } else {
      setEditorCss(prev => prev + snippet);
    }
  };

  const handleReset = () => {
    setEditorHtml("<!-- Write HTML here -->\n");
    setEditorCss("/* Write CSS here */\n");
  };

  const handleAskAI = async () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    
    try {
      const response = await fetch("/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: aiPrompt,
          currentCode: activeFile === "html" ? editorHtml : editorCss,
          fileType: activeFile,
        }),
      });

      if (!response.ok) {
        throw new Error("AI request failed");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      insertSnippet(`\n${data.code}\n`);
      setAiPrompt("");
    } catch (error) {
      console.error(error);
      alert("Failed to get AI response. Please ensure API key is set.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (showPreview) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <div className="bg-slate-900 text-white p-3 flex items-center justify-between">
          <button 
            onClick={() => setShowPreview(false)}
            className="text-indigo-400 hover:text-indigo-300 font-bold px-3 py-1 flex items-center gap-1"
          >
            ← Back to Editor
          </button>
          <span className="font-bold">Preview</span>
          <button onClick={updatePreview} className="p-2 text-slate-400 hover:text-white">
            <RotateCcw size={18} />
          </button>
        </div>
        <iframe 
          ref={iframeRef} 
          className="w-full flex-1 bg-white border-none"
          title="preview"
        />
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen pb-24 max-w-lg mx-auto flex flex-col">
      {/* Top Navigation Back */}
      <div className="px-3 pt-3 flex items-center">
        <button 
          onClick={() => setActiveTab("home")}
          className="text-slate-400 hover:text-white font-bold px-1 flex items-center gap-1 transition-colors"
        >
          ← Back
        </button>
      </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between px-2 pt-2 border-b border-slate-800">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveFile("html")}
            className={`px-4 py-2 rounded-t-lg font-bold text-sm flex items-center gap-2 transition-colors ${
              activeFile === "html" ? "bg-slate-800 text-orange-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <span className="text-orange-500">&lt;/&gt;</span> index.html
          </button>
          <button
            onClick={() => setActiveFile("css")}
            className={`px-4 py-2 rounded-t-lg font-bold text-sm flex items-center gap-2 transition-colors ${
              activeFile === "css" ? "bg-slate-800 text-blue-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <span className="text-blue-500">#</span> style.css
          </button>
        </div>
        <div className="flex items-center gap-2 px-2 pb-1">
          <button onClick={handleReset} className="text-slate-500 hover:text-slate-300">
             <RotateCcw size={16} />
          </button>
          <button
            onClick={() => setShowPreview(true)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 transition-colors"
          >
            <Play size={14} fill="currentColor" /> Live Preview
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-auto bg-[#282c34]">
        <CodeMirror
          value={activeFile === "html" ? editorHtml : editorCss}
          height="100%"
          theme="dark"
          extensions={activeFile === "html" ? htmlExtensions : cssExtensions}
          onChange={(val) => {
            if (activeFile === "html") setEditorHtml(val);
            else setEditorCss(val);
          }}
          className="text-sm"
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            foldGutter: false,
          }}
        />
      </div>

      {/* Keyboard helpers */}
      <div className="bg-slate-800 border-t border-slate-700 p-2 flex flex-col gap-2">
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
          {activeFile === "html" ? (
            <>
              <HelperBtn onClick={() => insertSnippet("<div>\n\n</div>")}>&lt;div&gt;</HelperBtn>
              <HelperBtn onClick={() => insertSnippet(' class=""')}>class=""</HelperBtn>
              <HelperBtn onClick={() => insertSnippet(' id=""')}>id=""</HelperBtn>
              <HelperBtn onClick={() => insertSnippet("<h1></h1>")}>&lt;h1&gt;</HelperBtn>
              <HelperBtn onClick={() => insertSnippet("<p></p>")}>&lt;p&gt;</HelperBtn>
              <HelperBtn onClick={() => insertSnippet("<!--  -->")}>&lt;!-- --&gt;</HelperBtn>
            </>
          ) : (
            <>
              <HelperBtn onClick={() => insertSnippet("{\n\n}")}>{"{ }"}</HelperBtn>
              <HelperBtn onClick={() => insertSnippet("color: ;")}>color:</HelperBtn>
              <HelperBtn onClick={() => insertSnippet("background: ;")}>bg:</HelperBtn>
              <HelperBtn onClick={() => insertSnippet("margin: ;")}>margin:</HelperBtn>
              <HelperBtn onClick={() => insertSnippet("padding: ;")}>padding:</HelperBtn>
              <HelperBtn onClick={() => insertSnippet("/*  */")}>/* */</HelperBtn>
            </>
          )}
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-2">
          <HelperBtn onClick={() => insertSnippet("<")}>&lt;</HelperBtn>
          <HelperBtn onClick={() => insertSnippet(">")}>&gt;</HelperBtn>
          <HelperBtn onClick={() => insertSnippet("/")}>/</HelperBtn>
          <HelperBtn onClick={() => insertSnippet("=")}>=</HelperBtn>
          <HelperBtn onClick={() => insertSnippet('"')}>"</HelperBtn>
          <HelperBtn onClick={() => insertSnippet(":")}>:</HelperBtn>
          <HelperBtn onClick={() => insertSnippet(";")}>;</HelperBtn>
        </div>
      </div>

      {/* Ask AI Footer */}
      <div className="bg-slate-900 border-t border-slate-800 p-3 flex gap-2">
        <input 
          type="text" 
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
          placeholder="Ask AI Mentor to help you code..."
          className="flex-1 bg-slate-800 border border-slate-700 text-slate-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleAskAI}
          disabled={isGenerating || !aiPrompt.trim()}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl px-4 py-2 flex items-center gap-1 transition-colors disabled:opacity-50"
        >
          <Sparkles size={16} />
          {isGenerating ? "..." : "Ask Me"}
        </button>
      </div>
    </div>
  );
}

function HelperBtn({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-mono text-xs px-3 py-1.5 rounded whitespace-nowrap shrink-0 transition-colors"
    >
      {children}
    </button>
  );
}
