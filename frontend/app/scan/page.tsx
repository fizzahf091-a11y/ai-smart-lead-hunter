"use client";
import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { Zap, RotateCcw, Camera, Lightbulb } from "lucide-react";
export default function ScanPage() {
    const webcamRef = useRef<Webcam>(null);
    const capture = useCallback(() => { const imageSrc = webcamRef.current?.getScreenshot(); 
        console.log("Captured Image:", imageSrc); }, [webcamRef]);
  return (
    <main className="min-h-fit bg-[#020617] bg-grid flex flex-col items-center p-8 ">
      <div className="max-w-4xl w-full  bg-[#020617] border border-white/5 rounded-3xl p-4 px-8">
        
        {/* --- 1. HEADER SECTION --- */}
        <div className="flex justify-between items-center mb-8 w-full">
          <div>
            <h2 className="text-2xl font-bold text-white justify-center font-space uppercase tracking-tight">Scan Card</h2>
            <p className="text-gray-500 text-xs">Capture or upload a business card</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 text-xs hover:bg-white/10 transition-all">
            < Lightbulb size={14}/> Tips
          </button>
        </div>

        {/* --- 2. MAIN SCANNER & CONTROLS --- */}
        
        <div className="flex flex-col lg:flex-row gap-6 w-full mb-10">
          
          {/* A: CAMERA VIEWPORT (Left Side) */}
          <div className="flex-grow relative aspect-[3/2] rounded-[32px] overflow-hidden  border border-white/10 group shadow-2xl">
           < Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="rounded-3xl w-full object-cover" videoConstraints={{ facingMode: "environment" }} />
            <div className="absolute inset-0 pointer-events-none  ">
            {/* Viewfinder Corners */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-lg"></div>

            {/* Auto-detect Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-white font-medium uppercase tracking-wider">
                Auto-detect: <span className="text-emerald-400">On</span>
              </span>
            </div>

            {/* Animated Scan Line */}
            <div className="animate-scan"></div>
          </div>
          </div>

          {/* B: CONTROLS PANEL (Right Side) */}
          <div className="w-full lg:w-56 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-8 ">
              <p className="text-[10px]  text-left text-white font-bold uppercase ">Controls</p>
              
              <div className="flex justify-between w-full px-2">
                <div className="flex flex-col items-center gap-1"><button className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 transition-colors">< Zap size={14}/></button><span className="text-[8px] text-gray-500">Flash</span></div>
                <div className="flex flex-col items-center gap-1"><button className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 transition-colors">< RotateCcw size={14} /></button><span className="text-[8px] text-gray-500">Auto</span></div>
                <div className="flex flex-col items-center gap-1"><button className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 transition-colors">< Camera size={14}/></button><span className="text-[8px] text-gray-500">Flip</span></div>
              </div>

              {/* Capture Button */}
              <button className="w-20 h-20 rounded-full border-4 border-white p-1 hover:scale-105 transition-all active:scale-95">
                <div className="w-full h-full bg-blue-600 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)]"></div>
              </button>
            </div>

            {/* Upload Box */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
              <p className="text-[10px] text-gray-500 mb-3">Or upload image</p>
              <div className="border-2 border-dashed border-white/10 rounded-xl py-4 hover:border-blue-500/50 transition-all cursor-pointer">
                <p className="text-xs text-white font-medium">Click to upload</p>
                <p className="text-[9px] text-gray-500 text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. BOTTOM STEPPER --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          
          {/* Step 1 (Active) */}
          <div className="flex items-center gap-4 bg-blue-600/10 border border-blue-500/30 rounded-2xl p-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">1</div>
            <div>
              <h4 className="text-white text-xs font-bold">Position Card</h4>
              <p className="text-gray-500 text-[10px]">Place card in frame</p>
            </div>
          </div>

          {/* Steps 2, 3, 4 (Inactive Loop) */}
          {[
            { id: 2, title: "Capture", desc: "Auto-detect edges" },
            { id: 3, title: "Extract", desc: "AI extracts data" },
            { id: 4, title: "Save", desc: "Add to your records" }
          ].map((step) => (
            <div key={step.id} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs font-bold shrink-0">{step.id}</div>
              <div>
                <h4 className="text-gray-400 text-xs font-bold">{step.title}</h4>
                <p className="text-gray-600 text-[10px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}