"use client" 

import { useAuth, useUser } from "@clerk/nextjs"
import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

  const { isLoaded, userId } = useAuth();
  const { isSignedIn, user } = useUser();

  if (!isLoaded) return "Loading...";

  if(!isSignedIn){
    return null
  }


    
    return (
            <div className="m-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl shadow-2xl p-12 w-full max-w-md">
                {/* Counter Display */}
                <div className="text-center mb-8">
                    <p className="text-slate-400 text-sm font-medium mb-3 uppercase tracking-wider">
                        Counter
                    </p>
                    <div className="relative">
                        <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            {counter}
                        </div>
                        {/* Animated ring on change */}
                        <div className="absolute inset-0 -z-10 blur-2xl opacity-50">
                            <div className="text-8xl font-bold text-blue-500">
                                {counter}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button Group */}
                <div className="flex gap-4">
                    {/* Decrement Button */}
                    <button
                        onClick={() => setCounter(counter - 1)}
                        className="flex-1 group relative bg-slate-700/50 hover:bg-red-600/20 border-2 border-slate-600 hover:border-red-500 text-slate-300 hover:text-red-400 font-semibold rounded-xl py-4 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={3} 
                                    d="M20 12H4"
                                />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={() => setCounter(0)}
                        className="group relative bg-slate-700/50 hover:bg-slate-600 border-2 border-slate-600 hover:border-slate-500 text-slate-400 hover:text-slate-200 font-semibold rounded-xl px-6 py-4 transition-all duration-300"
                    >
                        <svg 
                            className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                    </button>

                    {/* Increment Button */}
                    <button
                        onClick={() => setCounter(counter + 1)}
                        className="flex-1 group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl py-4 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden transform hover:-translate-y-0.5"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={3} 
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-slate-700/50 grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                            Status
                        </p>
                        <p className={`font-semibold ${
                            counter > 0 ? 'text-green-400' : 
                            counter < 0 ? 'text-red-400' : 
                            'text-slate-400'
                        }`}>
                            {counter > 0 ? 'Positive' : counter < 0 ? 'Negative' : 'Neutral'}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                            Absolute
                        </p>
                        <p className="font-semibold text-slate-300">
                            {Math.abs(counter)}
                        </p>
                    </div>
                </div>
            </div>
    )
}