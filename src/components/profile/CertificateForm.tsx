import { useState, useRef } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { useAppContext } from "../../AppContext";

export function CertificateForm({ onBack }: { onBack: () => void }) {
  const { setCertificateData, setIsCertificateGenerated, userName } = useAppContext();
  const [formData, setFormData] = useState({
    name: userName,
    fatherName: "",
    dob: "",
    address: "",
    state: "",
    pinCode: "",
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    const certData = {
      ...formData,
      date: new Date().toLocaleDateString(),
    };
    
    setCertificateData(certData);
    setIsCertificateGenerated(true);
    setIsGenerating(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 max-w-lg mx-auto">
      <div className="bg-white border-b border-slate-100 px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-xl font-bold text-slate-800">Claim Certificate</h1>
      </div>

      <div className="p-6">
        <p className="text-slate-500 mb-6 text-sm">
          Please fill in your official details. This will be printed on your certificate. 
          <strong className="text-red-500 block mt-1">Note: This can only be generated ONCE.</strong>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Father's Name</label>
            <input 
              required
              type="text" 
              value={formData.fatherName}
              onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Date of Birth</label>
            <input 
              required
              type="date" 
              value={formData.dob}
              onChange={(e) => setFormData({...formData, dob: e.target.value})}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Address</label>
            <textarea 
              required
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500" 
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">State</label>
              <input 
                required
                type="text" 
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500" 
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Pin Code</label>
              <input 
                required
                type="text" 
                value={formData.pinCode}
                onChange={(e) => setFormData({...formData, pinCode: e.target.value})}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500" 
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isGenerating}
            className="mt-6 w-full bg-emerald-600 text-white font-bold rounded-xl py-4 shadow-md shadow-emerald-200 transition-transform active:scale-95 disabled:opacity-50"
          >
            {isGenerating ? "Processing..." : "Generate & Lock Certificate"}
          </button>
        </form>
      </div>
    </div>
  );
}
