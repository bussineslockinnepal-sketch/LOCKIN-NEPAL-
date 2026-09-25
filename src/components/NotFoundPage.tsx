import React from 'react';
import { AlertOctagon, Home, ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-2xl shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-950/40 border border-red-500/30 flex items-center justify-center">
          <AlertOctagon className="w-8 h-8 text-[#E50914]" />
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-black text-white">404</div>
          <h2 className="text-xl font-bold text-white">Campaign Page Not Found</h2>
          <p className="text-xs text-neutral-400">
            The link you accessed does not exist or has been archived by the LockIn Nepal editorial desk.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onBackToHome}
            className="w-full py-3.5 px-4 rounded-xl text-xs uppercase font-extrabold tracking-wider text-white bg-gradient-to-r from-[#E50914] to-black border border-red-500/40 hover:from-[#FF1E27] hover:to-[#E50914] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Agency Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};
