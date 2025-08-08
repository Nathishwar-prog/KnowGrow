
import React from 'react';

interface SocialButtonProps {
    icon: React.ReactNode;
    text: string;
    onClick?: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full inline-flex items-center justify-center py-3 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500"
        >
            <span className="mr-3">{icon}</span>
            {text}
        </button>
    );
};
