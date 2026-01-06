
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F0F2F5] flex flex-col items-center justify-center p-6 py-20">
      {/* Platform Title - Matching Image 41 */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-[#7D0000] tracking-tight leading-tight uppercase">
          Blood Donation<br />Platform
        </h1>
      </div>

      {/* Auth Card - Matching Image 41 */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-zinc-100 p-10 md:p-12 animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-10">
          <p className="text-zinc-400 font-bold text-sm tracking-tight uppercase">
            {isLogin ? 'Sign in to continue' : 'Create a new account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="space-y-1">
              <label className="block text-[11px] font-black text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-zinc-50 border border-zinc-200 px-5 py-3.5 rounded-xl font-bold text-sm focus:border-[#7D0000] outline-none transition-all placeholder:text-zinc-300"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-[11px] font-black text-zinc-500 uppercase tracking-widest ml-1">Email</label>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-zinc-50 border border-zinc-200 px-5 py-3.5 rounded-xl font-bold text-sm focus:border-[#7D0000] outline-none transition-all placeholder:text-zinc-300"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-black text-zinc-500 uppercase tracking-widest ml-1">Password</label>
            <div className="relative group">
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full bg-zinc-50 border border-zinc-200 px-5 py-3.5 rounded-xl font-bold text-sm focus:border-[#7D0000] outline-none transition-all placeholder:text-zinc-300"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#7D0000] text-white py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#900000] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
          >
            {isLogin ? 'Sign In' : 'Register'}
            <ArrowRight size={14} />
          </button>
        </form>

        <div className="mt-6 text-center">
          <button className="text-[11px] font-bold text-zinc-400 hover:text-red-700 transition-colors uppercase tracking-widest">
            {isLogin ? 'Forgot Password?' : ''}
          </button>
        </div>

        {/* Divider - Matching Image 41 */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
            <span className="bg-white px-4 text-zinc-300 italic">or</span>
          </div>
        </div>

        {/* Google Sign In - Matching Image 41 */}
        <button className="w-full bg-white border border-zinc-200 text-zinc-600 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.1em] shadow-sm hover:bg-zinc-50 transition-all flex items-center justify-center gap-3">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
          Sign in with Google
        </button>

        {/* Footer Link - Matching Image 41 */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[11px] font-black text-[#7D0000] hover:underline uppercase tracking-widest decoration-2 underline-offset-4"
          >
            {isLogin ? 'New user - Register here' : 'Already have an account? Login here'}
          </button>
        </div>
      </div>
      
      <p className="mt-20 text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">
        Operational Security Level: AES-256 Enabled
      </p>
    </div>
  );
};

export default LoginPage;
