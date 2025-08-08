
import React from 'react';

const Shape: React.FC<{ className: string; animationClass: string; style?: React.CSSProperties }> = ({ className, animationClass, style }) => (
    <div className={`absolute ${className} ${animationClass}`} style={style}></div>
);

export const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
            <Shape className="bg-teal-500/20 rounded-full w-64 h-64" animationClass="animate-float" style={{ top: '10%', left: '20%' }} />
            <Shape className="bg-sky-500/20 rounded-xl w-48 h-48" animationClass="animate-float-reverse" style={{ top: '50%', left: '60%' }} />
            <Shape className="bg-indigo-500/20 rounded-full w-32 h-32" animationClass="animate-float" style={{ bottom: '15%', left: '5%' }} />
            <Shape className="bg-teal-500/10 rounded-lg w-72 h-72" animationClass="animate-float-reverse" style={{ top: '-10%', right: '-5%' }} />
            <Shape className="bg-sky-500/10 rounded-full w-56 h-56" animationClass="animate-float" style={{ bottom: '5%', right: '20%' }} />
            <div className="absolute inset-0 backdrop-blur-2xl"></div>
        </div>
    );
};
