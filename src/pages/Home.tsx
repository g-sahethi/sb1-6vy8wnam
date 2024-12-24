import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import InterpreterDemo from '../components/InterpreterDemo';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main 
        className="relative min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80')"
        }}
      >
        {/* Subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Break Language Barriers with SignSpeak
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Real-time sign language interpretation powered by AI.
              Connect and communicate effortlessly.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center px-10 py-4 text-lg rounded-full 
                        bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 
                        hover:bg-white/20 transition-all duration-300 
                        shadow-lg hover:shadow-xl"
            >
              Start Communicating
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </div>

          {/* Interpreter Demo Section */}
          <div className="max-w-5xl w-full mx-auto px-4 mb-24">
            <InterpreterDemo />
          </div>

          {/* Bottom section with statistics */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-8">
            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 px-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Interpretation</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}