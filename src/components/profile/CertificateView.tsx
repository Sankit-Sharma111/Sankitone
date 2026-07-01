import { useRef, useState } from "react";
import { Download, ArrowLeft } from "lucide-react";
import domtoimage from "dom-to-image";
import { jsPDF } from "jspdf";
import { useAppContext } from "../../AppContext";

export function CertificateView({ onBack }: { onBack: () => void }) {
  const { certificateData } = useAppContext();
  const certRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!certificateData) return null;

  const handleDownload = async () => {
    if (!certRef.current) return;
    setIsDownloading(true);
    try {
      const node = certRef.current;
      const scale = 2;
      const width = node.offsetWidth * scale;
      const height = node.offsetHeight * scale;
      
      const imgData = await domtoimage.toPng(node, {
        width: width,
        height: height,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${node.offsetWidth}px`,
          height: `${node.offsetHeight}px`
        }
      });
      
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (height * pdfWidth) / width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certificate_${certificateData.name.replace(/\\s+/g, "_")}.pdf`);
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 max-w-lg mx-auto flex flex-col">
      <div className="bg-white border-b border-slate-100 px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-700" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Your Certificate</h1>
        </div>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-indigo-600 text-white rounded-lg px-3 py-2 text-sm font-bold flex items-center gap-2 disabled:opacity-50"
        >
          <Download size={16} />
          {isDownloading ? "..." : "Save PDF"}
        </button>
      </div>

      <div className="p-4 flex-1 overflow-x-auto bg-slate-200 flex items-start justify-center pt-8">
        {/* Certificate Rendering Box - Landscape Aspect Ratio */}
        <div 
          ref={certRef} 
          className="p-8 relative shadow-2xl flex flex-col items-center text-center shrink-0"
          style={{ width: '800px', height: '565px', border: '16px solid #4F46E5', backgroundColor: '#ffffff' }}
        >
          <div className="absolute top-4 left-4 right-4 bottom-4 border-2" style={{ borderColor: '#c7d2fe' }}></div>
          
          <div className="mt-8 mb-4">
            <h1 className="text-5xl font-serif font-bold tracking-widest uppercase" style={{ color: '#312e81' }}>Certificate</h1>
            <h2 className="text-xl font-serif tracking-widest uppercase mt-2" style={{ color: '#4f46e5' }}>of Completion</h2>
          </div>
          
          <p className="italic mt-8 text-lg" style={{ color: '#64748b' }}>This is proudly presented to</p>
          
          <h3 className="text-4xl font-serif font-bold mt-4 mb-2 border-b-2 inline-block px-8 pb-2" style={{ color: '#1e293b', borderBottomColor: '#c7d2fe' }}>
            {certificateData.name}
          </h3>
          
          <p className="mt-6 max-w-2xl leading-relaxed" style={{ color: '#475569' }}>
            For successfully completing the comprehensive CSS Learning Track on Sankit Academy, 
            demonstrating proficiency in CSS Selectors, Box Model, Flexbox, Layouts, and modern CSS techniques.
          </p>

          <div className="mt-auto mb-8 flex justify-between w-full px-16">
            <div className="text-center">
              <div className="border-b w-40 pb-1 font-bold" style={{ borderColor: '#94a3b8', color: '#1e293b' }}>{certificateData.date}</div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: '#64748b' }}>Date</div>
            </div>
            <div className="text-center">
              <div className="border-b w-40 pb-1 font-bold italic font-serif" style={{ borderColor: '#94a3b8', color: '#1e293b' }}>Sankit Academy</div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: '#64748b' }}>Issuer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
