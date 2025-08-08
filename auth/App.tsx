
import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AuthForm } from './components/AuthForm';

const App: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-6xl h-full min-h-[800px] lg:h-auto lg:min-h-0 lg:max-h-[700px] flex flex-col lg:flex-row bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/30 overflow-hidden border border-slate-700">
        
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
          <AnimatedBackground />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent p-8 flex flex-col justify-end lg:justify-center">
             <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Hey Learners
                </h1>
                <p className="mt-4 text-lg text-slate-300 max-w-md">
                    Join a community of learners and professionals pushing the boundaries of knowledge.
                </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-slate-900">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
                <div className="relative bg-slate-800 p-1 rounded-full inline-flex items-center border border-slate-700">
                    <button
                        onClick={() => setIsLoginView(true)}
                        className={`w-1/2 px-6 py-2 text-sm font-semibold rounded-full focus:outline-none transition-colors duration-300 ${isLoginView ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLoginView(false)}
                        className={`w-1/2 px-6 py-2 text-sm font-semibold rounded-full focus:outline-none transition-colors duration-300 ${!isLoginView ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        Sign Up
                    </button>
                    <div className={`absolute top-1 bottom-1 w-1/2 bg-teal-600 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out ${isLoginView ? 'translate-x-0' : 'translate-x-full'}`} style={{ left: '2px', right: '2px', width: 'calc(50% - 4px)' }}></div>
                </div>
            </div>

            <div key={isLoginView ? 'login' : 'signup'} className="animate-fade-in-slow">
              <h2 className="text-3xl font-bold text-white mb-2">
                {isLoginView ? 'Welcome Back!' : 'Create an Account'}
              </h2>
              <p className="text-slate-400 mb-8">
                {isLoginView ? "Let's get you signed in." : "Start your learning journey today."}
              </p>
            </div>

            <AuthForm isLogin={isLoginView} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
