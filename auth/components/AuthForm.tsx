
import React, { useState, useEffect } from 'react';
import { SocialButton } from './SocialButton';
import { GoogleIcon } from './icons/GoogleIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { UserIcon } from './icons/UserIcon';
import { EmailIcon } from './icons/EmailIcon';
import { LockIcon } from './icons/LockIcon';
import { EyeIcon } from './icons/EyeIcon';
import { EyeOffIcon } from './icons/EyeOffIcon';

interface AuthFormProps {
    isLogin: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    useEffect(() => {
        // Reset fields on view change
        setName('');
        setEmail('');
        setPassword('');
        setPasswordStrength(0);
    }, [isLogin]);

    const checkPasswordStrength = (pass: string) => {
        let score = 0;
        if (pass.length > 8) score++;
        if (/[A-Z]/.test(pass)) score++;
        if (/[a-z]/.test(pass)) score++;
        if (/[0-9]/.test(pass)) score++;
        if (/[^A-Za-z0-9]/.test(pass)) score++;
        setPasswordStrength(score);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (!isLogin) {
            checkPasswordStrength(newPassword);
        }
    };
    
    const strengthColors = ['bg-slate-700', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];
    const strengthLabels = ['','Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle form submission, e.g., call an API
        const formData = { name: isLogin ? undefined : name, email, password };
        console.log('Submitting:', formData);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isLogin ? 'max-h-0 opacity-0' : 'max-h-24 opacity-100'}`}>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                           <UserIcon className="h-5 w-5 text-slate-500" />
                        </span>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="relative">
                     <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                       <EmailIcon className="h-5 w-5 text-slate-500" />
                    </span>
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                    />
                </div>

                <div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                           <LockIcon className="h-5 w-5 text-slate-500" />
                        </span>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full pl-10 pr-10 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-white"
                        >
                            {passwordVisible ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                        </button>
                    </div>
                     <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isLogin || password.length === 0 ? 'max-h-0 opacity-0 mt-0' : 'max-h-24 opacity-100 mt-2'}`}>
                        <div className="flex items-center gap-2">
                           <div className="w-full bg-slate-700 rounded-full h-1.5">
                              <div
                                 className={`h-1.5 rounded-full transition-all duration-300 ${strengthColors[passwordStrength]}`}
                                 style={{ width: `${(passwordStrength / 5) * 100}%` }}
                              ></div>
                           </div>
                           <span className="text-xs text-slate-400 w-20 text-right">{strengthLabels[passwordStrength]}</span>
                        </div>
                    </div>
                </div>

                <div className={`transition-opacity duration-500 ease-in-out ${isLogin ? 'opacity-100' : 'opacity-0 h-0'}`}>
                     {isLogin && (
                        <div className="text-right">
                            <a href="#" className="text-sm text-teal-500 hover:underline">Forgot Password?</a>
                        </div>
                    )}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 rounded-lg font-semibold text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500 transform hover:scale-105"
                    >
                        {isLogin ? 'Login' : 'Create Account'}
                    </button>
                </div>
            </form>

            <div className="mt-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-slate-900 text-slate-500">Or continue with</span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SocialButton icon={<GoogleIcon />} text="Google" />
                    <SocialButton icon={<LinkedInIcon />} text="LinkedIn" />
                </div>
            </div>
        </div>
    );
};
