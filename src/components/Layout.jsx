import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen relative flex flex-col items-center pt-32 pb-20 px-4">
            <Navbar serverName="jadeMC" />

            {/* Decorazioni background */}
            <div className="absolute inset-0 bg-gradient-to-b from-jade-glow/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-jade-glow/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-jade-glow/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center font-sans">
                <Outlet />

                {/* Footer */}
                <div className="w-full flex flex-col items-center pt-32 pb-20 text-center">
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-jade-glow text-4xl md:text-5xl font-black tracking-tighter drop-shadow-[0_0_40px_rgba(0,255,163,0.5)] animate-pulse-slow italic">
                            <span className="text-white">Jade</span><span className="text-jade-glow">MC</span>
                        </h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-jade-light/60 font-black tracking-[0.4em]">© All Rights Reserved 2026</p>
                            <p className="text-jade-light/60 font-black tracking-[0.4em]">Non siamo affiliati con Mojang, AB.</p>
                            <span className="text-jade-light/60 font-bold uppercase tracking-[0.2em] text-sm group">
                                by <span className="text-jade-glow text-lg">𝖎𝕿𝖟𝕱𝖗𝖆𝖓𝖈𝖊𝖘𝖈𝖔</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
