import React from 'react';
import { MessageSquare, Mic, Volume2 } from 'lucide-react';

export default function InterpreterDemo() {
  return (
    <div className="relative bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
            <Mic className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">Speech Input</h3>
          <p className="text-white/80">Converts spoken words into text in real-time</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">AI Translation</h3>
          <p className="text-white/80">Translates between sign language and spoken language</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <Volume2 className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">Voice Output</h3>
          <p className="text-white/80">Converts text to natural-sounding speech</p>
        </div>
      </div>

      {/* Demo Animation */}
      <div className="mt-12 bg-black/40 rounded-lg p-6 border border-white/10">
        <div className="flex items-center space-x-4 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-white/10" />
          <div className="flex-1">
            <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
            <div className="h-4 bg-white/10 rounded w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}